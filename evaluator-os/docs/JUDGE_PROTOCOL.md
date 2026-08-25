# Model Judge Protocol

## Judge contract

A model judge scores one candidate trial against a fixed task rubric. It does not decide the Gold truth and it does not see other judges' scores before producing its own judgment.

Every judgment should return criterion score, short evidence-based rationale, cited trajectory/output spans when available, optional confidence for analysis, critical-failure flags, and an abstain/review-needed flag when the rubric cannot be applied cleanly.

## Cross-model panel

Planned provider adapters:

- OpenAI
- Anthropic
- Google Gemini
- xAI / Grok

Judge identity is stored for analysis but should be hidden from other judges. Candidate provider identity should be masked during judging when technically practical.

## Judge promotion

A judge configuration is not promoted because it agrees with other models. It is promoted because its performance against held-out human Gold is acceptable for the intended task family.
