# Evaluator OS

**Human-grounded evaluation for AI agents across outcomes, trajectories, tools, and safety boundaries.**

Evaluator OS is an experimental evaluation harness built around one principle: model consensus is useful evidence, but it is not ground truth. Human-verified Gold judgments remain the calibration reference.

The system separates **what the agent ultimately produced** from **how it got there**. It combines deterministic checks, model-based evaluation, and human review; records disagreement instead of hiding it; and treats critical authority/evidence failures as first-class outcomes.

## Current status

Active experimental build on the v0.7.x path.

Earned now:
- Task / Trial / Trajectory / Outcome / Gold separation.
- Separate outcome, trajectory, and safety/authority evaluation.
- Critical-failure override.
- Exact decision-label versus operational-disposition scoring.
- Ordered disposition diagnostics for conservative overreach versus under-protection.
- Blind candidate protocol and reviewer-blind Human Gold protocol.
- Three human-verified Gold tasks across three task families.
- One candidate-blind, calibration-eligible Gold task (Mission 003).
- User-mediated external candidate captures from Copilot and Gemini on Mission 003, with explicit provenance limitations.

Current Gold decisions:
- Mission 001: HALT — diagnostic-only because reviewer was candidate-exposed.
- Mission 002: REVISE — diagnostic-only because reviewer was candidate-exposed.
- Mission 003: HALT — reviewer-blind, calibration-eligible.

Mission 003 demonstrated why the decision/disposition split matters: one candidate was operationally safe but selected the wrong headline label; another matched HALT but selected STOP rather than the Gold's more precise PAUSE.

## In active development

- Mission 004: PROCEED case with a bounded non-blocking anomaly.
- Mission 005: true ESCALATE/abstention case with controlling evidence outside scope.
- Mission 006: REVISE case with recoverable data-quality defect and structured observable-event trajectory capture.
- Canonical trajectory/event schema and broader replay validation.
- Development versus held-out Gold assignment.

## Not yet claimed

- OpenAI API integration.
- Anthropic API integration.
- Gemini API integration.
- xAI/Grok API integration.
- Blind four-provider benchmark.
- Judge-vs-human calibration performance.
- Inter-rater reliability.
- General evaluator reliability percentage.
- Production-ready RFML or operational deployment evidence.

The current sample is intentionally treated as exploratory engineering evidence.

## Run the core tests

```bash
python -m pytest
```

New tests are added as evaluator semantics change. A test file existing in the repository does not imply it has been rerun unless a verification result is explicitly recorded.

## Key design documents

- `docs/ARCHITECTURE.md`
- `docs/DECISION_SEMANTICS.md`
- `docs/GOLD_PROTOCOL.md`
- `docs/BLIND_RUN_PROTOCOL.md`
- `docs/CALIBRATION_ELIGIBILITY.md`
- `docs/RUN_CAPTURE_PROTOCOL.md`
- `docs/MISSION_DESIGN_CHECKLIST.md`
- `docs/GOLD_COVERAGE_PLAN.md`
- `docs/PORTFOLIO_EVIDENCE_LEDGER.md`

## Design references

The architecture is informed by public evaluation guidance and tooling from frontier AI labs. Those references inform design only and do not imply affiliation or endorsement.
