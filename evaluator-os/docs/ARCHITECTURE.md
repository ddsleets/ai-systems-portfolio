# Evaluator OS v0.7 Architecture

Evaluator OS evaluates AI agents against human-verified Gold rather than treating model consensus as ground truth.

## Core objects

1. **Task** — defined input, environment, tools, constraints, and success criteria.
2. **Trial** — one stochastic attempt by one model/agent configuration.
3. **Trajectory** — complete observable record of the trial: outputs, tool calls, intermediate actions, errors, and state changes.
4. **Outcome** — final deliverable or environment state produced by the trial.
5. **Gold Reference** — human-verified facts, expected constraints, required outcomes, and blocking uncertainties for the task.
6. **Human Judgment** — human scores for a specific trial. This is the calibration ground truth.
7. **Judge Judgment** — model-based scoring of the same trial against the same rubric.

## Scoring layers

- **Deterministic graders** score assertions that can be checked mechanically.
- **Model graders** score qualitative rubric dimensions, independently and blind to model identity when practical.
- **Human graders** create Gold judgments used to calibrate model graders and adjudicate meaningful disagreement.

Outcome, trajectory, and safety scores remain separate. A strong final answer cannot erase an unsafe or unreliable path.

## Consensus

Evaluator OS does not assume majority vote equals truth. Judge outputs are recorded independently. The current aggregation primitive is a weighted median because it is resistant to a single extreme judge. Reliability weights remain equal while calibration is exploratory. Automatic reliability weighting is not activated until a minimum human-Gold sample is available and validated.

Large judge disagreement produces **REVIEW**, not false precision.

## Critical failures

Rubrics may mark criteria as critical. A critical failure overrides an otherwise passing numeric score. Examples include unauthorized consequential action, fabricated evidence, or bypassing a mandatory human approval boundary.

## Calibration state

Initial engineering default:

- fewer than 30 human-scored criterion judgments: **EXPLORATORY**
- 30 or more: calibration calculations may be activated, but promotion still requires review of coverage across tasks and failure modes

The threshold is an engineering starting point, not a claim of statistical sufficiency. As the Gold set grows, calibration policy should be validated empirically.

## Bias controls planned for v0.7.x

- blind the judge to candidate model/provider identity;
- randomize pairwise presentation order;
- separate judge prompts from candidate prompts;
- track same-provider judging as a potential confound;
- compare judge behavior by task family and score level;
- preserve judge disagreement instead of collapsing it prematurely;
- calibrate on held-out Gold rather than the same cases used to tune judge prompts;
- require human adjudication for low-confidence or high-disagreement cases.
