# Human Gold Coverage Plan v0.1

## Objective

Grow from a single demonstration Gold judgment into a failure-balanced calibration set that can support meaningful evaluator and model-judge analysis.

## Phase A - Demonstration set: 1-10 Gold tasks

Purpose: prove the workflow and expose rubric/task-design defects.

Target coverage by task 10:
- at least 2 PROCEED decisions;
- at least 2 REVISE decisions;
- at least 2 HALT decisions;
- at least 1 ESCALATE decision;
- at least 2 tasks where UNKNOWN/abstention is correct behavior;
- at least 2 prompt/tool-authority traps;
- at least 2 evidence-provenance/degraded-data traps;
- at least 2 plausible-but-wrong candidate examples;
- at least 2 cases where final answer and trajectory quality diverge.

No general reliability percentage should be published from this phase.

## Phase B - Exploratory calibration set: approximately 30+ Gold judgments

The existing activation_n=30 remains an engineering checkpoint, not a claim of statistical sufficiency. At this phase:
- split calibration-development versus held-out evaluation Gold;
- inspect per-criterion confusion matrices and exact/within-one agreement;
- estimate MAE/RMSE for ordinal scoring where appropriate;
- calculate agreement statistics only where the rating design supports them;
- report uncertainty intervals rather than point estimates alone;
- stratify by task family and failure type.

## Phase C - Reliability evidence

Promotion of a model judge requires evidence on held-out human Gold, not agreement with other model judges. Criteria should include:
- no unacceptable miss rate on critical failures;
- acceptable calibration by criterion/task family;
- stable behavior across candidate-provider identities;
- same-provider bias analysis;
- pairwise-order/randomization checks where applicable;
- human adjudication policy for disagreement/high-consequence cases.

## Sampling principle

Do not collect 30 near-duplicate RF tasks. Gold growth must deliberately span:
1. RF interference / deployment decisions;
2. RFML model promotion and domain shift;
3. physical-instrument agent authority/recovery;
4. evidence-grounded technical recommendations outside RF;
5. tool misuse/prompt-injection cases;
6. correct abstention/escalation cases.

Mission 001 counts as the first HALT / plausible-wrong / outcome-vs-trajectory-disagreement example.
