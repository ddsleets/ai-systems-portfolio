# Evaluator OS Roadmap

## v0.7.0 — Core truth model

- Preserve outcome vs trajectory scoring.
- Add explicit safety/authority dimension.
- Define human Gold as calibration ground truth.
- Add deterministic score aggregation and critical-failure override.
- Add disagreement-aware weighted-median judge consensus.
- Add initial calibration diagnostics.

## v0.7.1 — Trial + trace schema

- Canonical JSONL trajectory format.
- Tool-call/event normalization.
- Trial metadata and reproducibility fields.
- Blind candidate identity during judge runs.

## v0.7.2 — Provider adapters

- OpenAI.
- Anthropic.
- Gemini.
- xAI/Grok.
- Same task runner across providers.

## v0.7.3 — LLM jury + calibration

- Structured judge output.
- Held-out Gold calibration split.
- Per-criterion agreement diagnostics.
- Judge disagreement dashboard.
- Same-provider bias analysis.
- Pairwise-order randomization where applicable.

## v0.8 — Gold Set I

- First human-verified multi-task Gold set.
- Failure-balanced sampling.
- Regression suite.
- Judge promotion criteria.

## v0.9 — Portfolio-grade evidence

- Cross-model benchmark report.
- Failure case library.
- Calibration plots.
- Reproducible sample run.
- Public Case 06 page with clear limitations and methodology.
