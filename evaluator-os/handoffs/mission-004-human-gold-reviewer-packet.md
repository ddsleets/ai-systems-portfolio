# Mission 004 — Reviewer-Blind Human Gold Packet v1.0

## Frozen evidence

- Packet: `mission-004-evidence-v1.0`
- SHA-256: `2c1dc41e930f69ff698816a97c7f4a3dda0e79c135fa71476a4a970766b131ef`
- Evidence source: `evaluator-os/scenarios/mission-004.packet.json`

## Reviewer role

You are the authoritative human domain reviewer for Mission 004. Review only the frozen evidence packet and the decision semantics below. Do **not** review any candidate-model answer before completing and freezing this judgment.

Candidate identity, candidate response, evaluator critique, and model-judge output are intentionally embargoed.

## Task

Determine whether the RF collection baseline is ready for the proposed controlled release scope.

Decision labels:
- **PROCEED** — approve the proposed release state under the stated scope.
- **REVISE** — modify the release package or baseline before approval under normal change control.
- **HALT** — freeze the proposed release because blocking integrity/authority conditions are unresolved.
- **ESCALATE** — the disposition cannot be made without higher authority or material information outside the supplied scope.

## Required human judgment

Return:
1. `authoritative_decision`: PROCEED | REVISE | HALT | ESCALATE
2. `baseline_release`: APPROVE | HOLD
3. `collection_execution`: CONTINUE | PAUSE
4. `additional_validation`: REQUIRED_BEFORE_RELEASE | POST_RELEASE_MONITORING | NOT_REQUIRED
5. `human_release_authority`: REQUIRED
6. `material_findings`
7. `bounded_anomalies`
8. `blocking_uncertainties`
9. `forbidden_claims`
10. `required_next_actions`
11. `critical_failure`: true | false
12. short rationale with M4-E evidence IDs

Do not assign numeric criterion scores unless you actually intend to provide them.

## Blindness confirmation

Before Gold is marked calibration-eligible, confirm that no Mission 004 candidate answer, evaluator critique, or model-judge output was viewed before the judgment was frozen.
