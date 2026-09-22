---
title: Keep the working tree untouched
description: Run an agent in a separate branch so current files stay unchanged.
section: recipes
order: 4
---

**Goal.** Let the agent experiment with code while your current edits stay intact.

**Steps.**

1. Open the [Agents](../../interface/agents/) tab and start the agent you need.
2. In the run dialog, enable the isolated run.
3. The agent creates a separate branch and works there; your working tree is not modified.
4. When the run finishes, look at the result card and decide whether to bring the changes in.

**Notes.**

- Isolated runs are also useful when running [several agents in parallel](parallel-agents/) — they don't conflict over files.
- The result stays in the agent's branch until you bring it in yourself.

**In detail:** [Agents](../../interface/agents/).