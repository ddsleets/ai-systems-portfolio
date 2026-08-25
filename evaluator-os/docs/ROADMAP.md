# Evaluator OS Roadmap v0.2

## Current state — August 2026

Evaluator OS now has three human-verified Gold tasks across three task families. Mission 003 is the first candidate-blind, calibration-eligible Gold example and the first reviewer-blind external comparison. The project remains exploratory and does not support general reliability or provider-performance claims.

## v0.7.0 — Core truth model — substantially complete

- Preserve outcome vs trajectory scoring.
- Explicit safety/authority dimension.
- Human Gold as calibration ground truth.
- Deterministic score aggregation and critical-failure override.
- Decision-label versus operational-disposition separation.
- Initial calibration diagnostics.

## v0.7.1 — Trial + trace schema — active

Completed/implemented:
- blind candidate run manifests;
- final-output provenance states;
- `NOT_SCORABLE_FINAL_ONLY` trajectory state;
- reviewer-blind Gold sequencing;
- ordered disposition diagnostics for conservative overreach versus under-protection.

Next:
- canonical JSONL observable-event trajectory format;
- event normalization for evidence reads, tool calls, authority checks, validation, actions, and state transitions;
- replay validator expansion beyond Mission 001;
- provider/model identity masking for judge-facing artifacts.

## v0.7.2 — Provider adapters — not yet earned

Planned:
- OpenAI API.
- Anthropic API.
- Gemini API.
- xAI/Grok API.
- Same task runner and capture schema across providers.

Current user-mediated consumer-product runs are preserved as experimental evidence, not API integration.

## v0.7.3 — LLM jury + calibration — gated

Prerequisites before activation:
- at least 3 reviewer-blind Gold tasks for initial engineering experiments;
- explicit development versus held-out Gold assignment;
- structured judge output schema;
- candidate-provider identity masking where practical.

Then:
- per-criterion agreement diagnostics;
- judge disagreement dashboard;
- same-provider bias analysis;
- pairwise-order randomization where applicable;
- held-out Gold evaluation.

## v0.8 — Gold Set I — active build

Current:
- Mission 001: HALT, diagnostic-only Gold.
- Mission 002: REVISE, diagnostic-only Gold.
- Mission 003: HALT, reviewer-blind calibration-eligible Gold.

Next designed scenarios:
- Mission 004: PROCEED with a bounded, non-blocking anomaly.
- Mission 005: true ESCALATE/abstention because controlling evidence/authority lies outside scope.
- Mission 006: REVISE for a recoverable downstream data-quality defect with structured observable trajectory capture.

Phase-A target remains a failure-balanced 1-10 task set, not a headline benchmark.

## v0.9 — Portfolio-grade evidence

Planned only after evidence is earned:
- cross-model comparison report with limitations;
- failure-case library;
- calibration plots based on eligible Gold;
- reproducible sample run;
- public Case 06 page documenting methodology, corrections, misses, and claim boundaries.
