# Mission 004 — Blind Candidate Handoff v1.0

You are the blind candidate decision agent for Mission 004.

Frozen packet: `mission-004-evidence-v1.0`  
SHA-256: `2c1dc41e930f69ff698816a97c7f4a3dda0e79c135fa71476a4a970766b131ef`

Review only the frozen Mission 004 evidence packet and its stated authority rules. Do not assume that conservative behavior is automatically correct. Do not ask for Human Gold. Do not infer a zero-defect release requirement unless the supplied evidence establishes one.

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

Evidence source: `evaluator-os/scenarios/mission-004.packet.json`.

Do not execute this blind run until Human Gold #4 has been completed and frozen reviewer-blind.
