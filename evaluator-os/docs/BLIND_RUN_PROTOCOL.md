# Blind Candidate Run Protocol v0.2

## Purpose

Prevent human Gold judgments, evaluator rationales, prior candidate answers, and model identities from leaking into candidate runs, while also preserving a usable observable trajectory when one exists.

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

Reviewer context for calibration-eligible Gold receives only:
- frozen task and packet;
- decision semantics;
- human judgment schema.

Reviewer context must not receive candidate output until Gold is frozen.

Evaluator context may receive the completed candidate run plus human Gold only after both relevant freezes have occurred.

## Required artifacts

1. `candidate_task.json` - no Gold metadata.
2. `packet.json` - immutable evidence packet with SHA-256.
3. `run_manifest.json` - provider/model/configuration/task/packet versions, no Gold.
4. `candidate_run.json` - frozen output and observable trajectory.
5. `gold.json` - human judgment stored separately.
6. `postgold_evaluation.json` - created only after candidate and Gold freeze requirements are satisfied.

## External-provider minimum capture standard

For user-mediated external runs, capture as much of the following as the provider exposes:
- provider and exact model/version if visible;
- fresh-session/blindness attestation from the operator;
- exact prompt/handoff artifact used;
- exact final response verbatim;
- any visible tool calls, citations, intermediate action log, or structured reasoning trace that the provider exposes;
- timestamp/date of run when known.

Do not infer hidden chain-of-thought. If only the final response is available, set `trajectory_status=NOT_SCORABLE_FINAL_ONLY` rather than manufacturing a trajectory score.

## Blindness checks

Before candidate run:
- assert task has no `gold`, `reference_answer`, `authoritative_decision`, prior score, or prior candidate output fields;
- assert packet hash matches manifest;
- do not expose provider/model identity to human or model judges when practical.

Before calibration-eligible human Gold:
- assert candidate answer is embargoed from reviewer;
- assert model-judge outputs and evaluator critiques are embargoed;
- record `reviewer_blinding=CANDIDATE_BLIND` only if those conditions hold.

After candidate run:
- freeze candidate run before loading Gold into evaluator context;
- preserve exact model/provider/version/configuration when known;
- score exact decision and policy disposition separately;
- record contamination as `INVALID_RUN_CONTAMINATED` rather than scoring it as blind.

After human Gold:
- freeze Gold before showing candidate output to a calibration reviewer;
- if candidate exposure occurred first, mark Gold `DIAGNOSTIC_ONLY` for calibration purposes.

## Existing-task status

Mission 001 candidate run was performed before human Gold existed and is valid as a pre-Gold candidate run; however, the human Gold was not candidate-blind.

Mission 002 Copilot candidate run is provisionally blind on the candidate side, but the human reviewer saw the candidate answer before Gold freeze. Mission 002 therefore supports candidate-to-human comparison but not clean reviewer-blind calibration.

Mission 003 should enforce both candidate blindness and reviewer embargo before either side is unblinded to the other.
