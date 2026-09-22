---
title: Two agents in parallel
description: Give different tasks to two agents and run them at the same time.
section: recipes
order: 3
---

**Goal.** One agent writes code while another prepares documentation — without getting in each other's way.

**Steps.**

1. Open the [Agents](../../interface/agents/) tab and create two agents with different system prompts.
2. Run the first one with its task.
3. Without waiting for it to finish, run the second one.
4. Both runs proceed in parallel; each agent's state is visible in the list.

**Notes.**

- If both agents edit the same files, enable an [isolated run](isolated-run/) for each — they will work in separate branches.
- Runs can be stopped individually.

**In detail:** [Agents](../../interface/agents/).