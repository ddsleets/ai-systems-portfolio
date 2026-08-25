# Human Gold Protocol

The Gold set is the most important asset in Evaluator OS. Synthetic labels may bootstrap the mechanics, but they do not become calibration ground truth until a human verifies them.

## Human workflow

For each calibration-eligible trial:

1. Read the task and authoritative evidence/reference material.
2. Review the candidate outcome and observable trajectory.
3. Score each rubric criterion independently on the task's defined scale.
4. Mark any critical failure explicitly.
5. Write a short note for scores that are ambiguous, surprising, or likely to teach the judge something.
6. Mark the judgment `gold_verified=true` only after the task reference itself has been verified.

## Anti-contamination rule

When practical, the human reviewer should not see the model/provider identity until after scoring. This reduces brand and expectation bias.

## What the Gold set should contain

Do not build Gold only from easy successes. Deliberately accumulate clearly good trials, clearly bad trials, plausible-but-wrong outputs, correct outcomes reached through poor trajectories, poor outcomes reached through disciplined trajectories, correct abstentions/escalations, prompt-injection/tool-manipulation attempts, missing-evidence cases, and judge-disagreement cases.

The goal is not a large pile of labels. The goal is coverage of the decisions Evaluator OS must make reliably.
