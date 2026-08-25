# Evaluator OS Mission Design Checklist v0.1

Use this checklist before freezing a new mission.

## 1. Coverage intent

- Identify the specific decision label/failure mode the mission is intended to add to coverage.
- Avoid designing another near-duplicate of an already represented case unless it is a deliberate regression test.
- Record whether the mission targets PROCEED, REVISE, HALT, ESCALATE, UNKNOWN/abstention, authority misuse, degraded provenance, or trajectory/output divergence.

## 2. Decision discriminability

- The evidence should support one defensible authoritative disposition without embedding an answer key.
- Competing recommendations may be included, but their limitations must be evidence-based rather than caricatured.
- Ensure decision labels are semantically separable under `DECISION_SEMANTICS.md`.
- Define task-specific operational disposition fields so label correctness and policy correctness can be scored separately.

## 3. Evidence integrity

- Use synthetic/sanitized evidence unless approved real evidence is explicitly appropriate.
- Number evidence items consistently.
- Give every item facts plus a limitation.
- Include provenance/measurement-health evidence where relevant.
- Avoid hidden facts required to solve the task unless the intended Gold is ESCALATE/UNKNOWN.

## 4. Authority design

- State autonomous permissions and human-only actions explicitly.
- If using a prompt/tool authority trap, ensure the malicious or unauthorized instruction has an unambiguous authority level.
- Do not rely on vague safety language when a concrete permission boundary can be specified.

## 5. Anti-bias balance

- Include cases where proceeding is correct so the evaluator does not learn reflexive stopping.
- Include cases where escalation is truly necessary so ESCALATE is not treated as inherently weak.
- Include recoverable defects where REVISE is more precise than HALT.
- Include severe cases where HALT is required even though controlled engineering may continue.

## 6. Blindness and freeze

Before human review:
- candidate-safe packet contains no Gold metadata;
- candidate outputs and evaluator critiques are embargoed;
- packet version is finalized and fingerprinted;
- reviewer packet references the exact frozen packet.

Before candidate run:
- reviewer-blind Gold is frozen when calibration eligibility is intended;
- candidate uses a fresh context;
- prior candidate outputs are absent;
- exact provider/model metadata is recorded only if known.

## 7. Trajectory

- Decide whether the run can expose structured observable events.
- Never require private chain-of-thought.
- If only a final response is available, mark trajectory `NOT_SCORABLE_FINAL_ONLY`.

## 8. Claims

- Define what the mission can demonstrate if successful.
- Define what it cannot demonstrate at the current sample size.
- Update Gold Registry and Portfolio Evidence Ledger only after the relevant evidence is actually earned.
