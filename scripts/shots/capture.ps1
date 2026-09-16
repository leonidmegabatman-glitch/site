param(
  [Parameter(Mandatory = $true)][string]$Out,
  [string]$ProcName = "Klavdiya",
  [int]$DelaySec = 3
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

Add-Type @"
using System;
using System.Runtime.InteropServices;

[StructLayout(LayoutKind.Sequential)]
public struct RECT { public int Left; public int Top; public int Right; public int Bottom; }

public class NativeWin {
  [DllImport("user32.dll")] public static extern bool SetProcessDPIAware();
  [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr hWnd, out RECT lpRect);
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr hWnd);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);
}
"@

[void][NativeWin]::SetProcessDPIAware()

$proc = Get-Process |
  Where-Object { $_.MainWindowHandle -ne 0 -and $_.ProcessName -like "*$ProcName*" } |
  Select-Object -First 1

if (-not $proc) {
  Write-Error "No window found for process name containing '$ProcName'. Is the app running?"
}

[void][NativeWin]::ShowWindow($proc.MainWindowHandle, 9)
[void][NativeWin]::SetForegroundWindow($proc.MainWindowHandle)

if ($DelaySec -gt 0) {
  Write-Output "Window found: $($proc.MainWindowTitle). Capturing in $DelaySec s."
  Start-Sleep -Seconds $DelaySec
}

$rect = New-Object RECT
if (-not [NativeWin]::GetWindowRect($proc.MainWindowHandle, [ref]$rect)) {
  Write-Error "GetWindowRect failed."
}

$w = $rect.Right - $rect.Left
$h = $rect.Bottom - $rect.Top
if ($w -le 0 -or $h -le 0) { Write-Error "Bad window size: ${w}x${h}" }

$bmp = New-Object System.Drawing.Bitmap $w, $h
$gfx = [System.Drawing.Graphics]::FromImage($bmp)
$gfx.CopyFromScreen($rect.Left, $rect.Top, 0, 0, $bmp.Size)

$dir = Split-Path -Parent $Out
if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }

$bmp.Save($Out, [System.Drawing.Imaging.ImageFormat]::Png)
$gfx.Dispose()
$bmp.Dispose()

Write-Output "saved=$Out width=$w height=$h"
