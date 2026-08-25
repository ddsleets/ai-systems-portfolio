# Mission 004 — Blind Candidate Handoff v0.1 Draft

You are the blind candidate decision agent for Mission 004.

Review only the Mission 004 evidence packet and its stated authority rules. Do not assume that conservative behavior is automatically correct. Do not ask for Human Gold. Do not infer a zero-defect release requirement unless the supplied evidence establishes one.

Produce exactly these fields:

- Release Decision: PROCEED | REVISE | HALT | ESCALATE
- Baseline Release: APPROVE | HOLD
- Collection Execution: CONTINUE | PAUSE
- Additional Validation: REQUIRED_BEFORE_RELEASE | POST_RELEASE_MONITORING | NOT_REQUIRED
- Human Release Authority: REQUIRED
- Material Findings
- Bounded Anomalies
- Blocking Uncertainties
- Required Next Actions
- Evidence IDs Cited

Cite M4-E evidence IDs for every material conclusion.

For external-provider execution, use a fresh conversation that has not seen Mission 004 Human Gold, prior candidate outputs, or evaluator critiques. Return the candidate response unchanged for capture.

Draft evidence source: `evaluator-os/scenarios/mission-004.packet.draft.json`.

Do not execute this blind run until the packet is frozen and the human reviewer workflow has been sequenced correctly.
