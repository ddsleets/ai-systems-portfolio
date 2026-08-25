# Calibration Eligibility Policy v0.1

Human-verified does not automatically mean calibration-eligible.

## Eligibility states

### CALIBRATION_ELIGIBLE

All of the following should be true:
- task/evidence packet is frozen and fingerprinted;
- human reviewer completed Gold before candidate exposure;
- reviewer did not receive prior model-judge output or evaluator critique;
- answer-revealing metadata was not present;
- reviewer identity/type and exposure state are recorded;
- Gold judgment is complete enough for the intended scoring axes;
- task is not a near-duplicate intentionally tuned against the same candidate failure.

### DIAGNOSTIC_ONLY

Use when the human judgment remains useful but one or more independence controls were not met, such as candidate exposure before Gold freeze. Diagnostic Gold may support candidate-to-human comparison and workflow development, but not clean calibration claims.

### INVALID_CONTAMINATED

Use when contamination undermines the reference itself, such as prior Gold leakage or answer-revealing hidden metadata.

## Held-out states

Calibration-eligible Gold should also record one of:
- `DEVELOPMENT`: may be used to refine rubric/judge behavior;
- `HELD_OUT`: reserved for later evaluation and not used to tune judge prompts or scoring policy;
- `NOT_ASSIGNED_YET`.

A task used to tune scoring semantics should not later be presented as untouched held-out evidence.

## Current registry interpretation

- Mission 001: DIAGNOSTIC_ONLY.
- Mission 002: DIAGNOSTIC_ONLY.
- Mission 003: CALIBRATION_ELIGIBLE, held-out assignment not yet made.

No judge-vs-human calibration claim is supported by one calibration-eligible task.
