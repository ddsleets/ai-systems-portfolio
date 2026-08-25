# External Candidate Run Capture Protocol v0.1

## Purpose

Standardize external-provider candidate capture so Evaluator OS can distinguish reproducible final-output evidence from richer observable trajectory evidence without inventing unavailable data.

## Required final-output capture

For every external candidate run, record:

- run ID;
- task ID and packet ID;
- packet fingerprint when frozen;
- provider name exactly as known;
- exact model/version only when visible or supplied;
- execution mode;
- candidate blindness attestation status;
- whether Gold or prior candidate output was visible;
- normalized required output fields;
- verbatim returned answer;
- evidence IDs cited;
- provenance limitations.

If exact model/version is unavailable, state that plainly. Never infer it from product branding.

## Trajectory capture states

### OBSERVED_STRUCTURED

Use only when the execution environment exposes non-private observable events such as:
- evidence/document read;
- tool call and result;
- authority check;
- validation result;
- state transition;
- proposed action;
- final decision.

These events may be scored as trajectory evidence.

### NOT_SCORABLE_FINAL_ONLY

Use when only the final candidate response is captured. Do not assign a trajectory score from prose that merely describes what the model says it considered.

### INVALID_CONTAMINATED

Use when Gold, prior candidate output, evaluator critique, or answer-revealing metadata contaminated the candidate context in a way that invalidates the intended blind run.

## Private reasoning boundary

Evaluator OS does not require private chain-of-thought. Trajectory evaluation should rely on observable actions, structured events, tool interactions, state changes, and final outputs.

## External relay limitation

User-mediated relays from consumer AI products can be valid experimental evidence when provenance is recorded, but Evaluator OS cannot independently verify hidden conversation state, system prompts, routing, or exact underlying model unless the product exposes those facts.

## Freeze order

Preferred order for calibration-eligible comparison:

1. freeze task and evidence packet;
2. complete and freeze reviewer-blind Human Gold;
3. execute fresh candidate run(s);
4. freeze candidate artifact(s);
5. score post-Gold;
6. update registry and evidence ledger.
