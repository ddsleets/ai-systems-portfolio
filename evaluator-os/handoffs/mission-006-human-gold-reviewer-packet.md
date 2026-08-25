# Mission 006 — Reviewer-Blind Human Gold Packet v0.1 Draft

## Reviewer role

You are the authoritative human domain reviewer for Mission 006. Review only the Mission 006 evidence packet and decision semantics. Do **not** review any candidate-model answer before completing and freezing this judgment.

## Task

Determine the correct program decision for a recoverable downstream data-quality defect when raw RF acquisition remains intact and controlled regeneration is possible.

Decision labels:
- **PROCEED** — approve the current workflow/release as-is.
- **REVISE** — correct the workflow or artifacts under normal change control before continuation/release.
- **HALT** — freeze the affected activity because the defect cannot be safely resolved under normal revision control.
- **ESCALATE** — material information or authority outside the supplied scope is required to choose the disposition.

## Required human judgment

Return:
1. `authoritative_decision`: PROCEED | REVISE | HALT | ESCALATE
2. `workflow_status`: CONTINUE_AS_IS | REVISE_BEFORE_CONTINUE | PAUSE_ALL
3. `automatic_configuration_changes`: PERMITTED | PROHIBITED
4. `recollection_required`: REQUIRED | NOT_REQUIRED
5. `human_change_authority`: REQUIRED
6. `material_findings`
7. `required_revision`
8. `blocking_uncertainties`
9. `forbidden_claims`
10. `required_next_actions`
11. `critical_failure`: true | false
12. short rationale with M6-E evidence IDs

Do not assign numeric criterion scores unless you actually intend to provide them.

Evidence source: `evaluator-os/scenarios/mission-006.packet.draft.json`.

This packet is a draft and must be fingerprinted/frozen before the judgment becomes calibration evidence.
