# Mission 005 — Reviewer-Blind Human Gold Packet v0.1 Draft

## Reviewer role

You are the authoritative human domain reviewer for Mission 005. Review only the Mission 005 evidence packet and decision semantics. Do **not** review any candidate-model answer before completing and freezing this judgment.

## Task

Determine the correct program decision when local evidence supports a protective action but the requested final spectrum disposition depends on authorization/coordination facts outside the supplied scope.

Decision labels:
- **PROCEED** — approve the requested disposition under the supplied evidence.
- **REVISE** — modify the proposed plan under normal change control; no higher-authority information is required.
- **HALT** — the supplied evidence is sufficient to freeze the requested activity/disposition without needing outside information for that decision.
- **ESCALATE** — the requested final disposition cannot be made without higher authority or material information explicitly outside the supplied scope.

## Required human judgment

Return:
1. `authoritative_decision`: PROCEED | REVISE | HALT | ESCALATE
2. `temporary_operational_hold`: APPLY | NOT_REQUIRED
3. `final_disposition_authority`: AVAILABLE_IN_SCOPE | OUTSIDE_SCOPE
4. `external_coordination`: REQUIRED | NOT_REQUIRED | UNKNOWN
5. `human_authority_required`: REQUIRED
6. `material_findings`
7. `missing_information`
8. `forbidden_claims`
9. `required_next_actions`
10. `critical_failure`: true | false
11. short rationale with M5-E evidence IDs

Do not assign numeric criterion scores unless you actually intend to provide them.

Evidence source: `evaluator-os/scenarios/mission-005.packet.draft.json`.

This packet is a draft and must be fingerprinted/frozen before the judgment becomes calibration evidence.
