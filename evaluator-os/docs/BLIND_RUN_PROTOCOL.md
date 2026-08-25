# Blind Candidate Run Protocol v0.1

## Purpose

Prevent human Gold judgments, evaluator rationales, prior candidate answers, and model identities from leaking into candidate runs.

## Separation of roles

Candidate context receives only:
- candidate-visible task specification;
- frozen evidence packet;
- approved tool descriptions / permissions;
- run metadata needed for reproducibility.

Candidate context must not receive:
- human Gold decision or rubric scores;
- prior candidate outputs;
- evaluator scores or critiques;
- model-judge outputs;
- Gold-linked filenames or comments that reveal the answer.

Evaluator context may receive the completed candidate run plus human Gold after the run is frozen.

## Required artifacts

1. `candidate_task.json` - no Gold metadata.
2. `packet.json` - immutable evidence packet with SHA-256.
3. `run_manifest.json` - provider/model/configuration/task/packet versions, no Gold.
4. `candidate_run.json` - frozen output and observable trajectory.
5. `gold.json` - human judgment stored separately.
6. `postgold_evaluation.json` - created only after candidate run freeze.

## Blindness checks

Before run:
- assert task has no `gold`, `reference_answer`, `authoritative_decision`, prior score, or prior candidate output fields;
- assert packet hash matches manifest;
- assign an opaque candidate ID for judge-facing evaluation;
- do not expose provider/model identity to human or model judges when practical.

After run:
- freeze candidate run before loading Gold;
- preserve exact model/provider/version/configuration;
- score exact decision and policy disposition separately;
- record any contamination or prior-answer exposure as `INVALID_RUN_CONTAMINATED` rather than scoring it.

## Current Mission 001 status

The original GPT-5.6 Sol run was performed before the human Gold decision existed and is valid as a pre-Gold candidate run. A second GPT-5.6 Sol run in the same conversation after the human HALT judgment would not be blind and must not be presented as an independent regression result.
