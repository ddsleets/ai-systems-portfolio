# Evaluator OS

**Human-grounded evaluation for AI agents across outcomes, trajectories, tools, and safety boundaries.**

Evaluator OS is an experimental evaluation harness designed around one principle: model consensus is useful evidence, but it is not ground truth. Human-verified Gold judgments remain the calibration reference.

The system separates **what the agent ultimately produced** from **how it got there**. It combines deterministic checks, model judges, and human review; records disagreement rather than hiding it; and treats critical authority/safety failures as first-class evaluation outcomes.

## Current version

v0.7.0 — architecture + scoring core.

This version establishes:

- Task / Trial / Trajectory / Outcome / Gold / Human Judgment / Judge Judgment separation.
- Separate outcome, trajectory, and safety scoring.
- Critical-failure override.
- Disagreement-aware judge aggregation.
- Human-Gold calibration diagnostics.
- Cross-provider roadmap for OpenAI, Anthropic, Gemini, and xAI/Grok.

## Why this exists

Agent evaluation is harder than grading a final answer. An agent can reach the right answer through an unacceptable path, misuse tools, fabricate support, skip required approvals, or fail safely in a way that a simplistic answer key would mark wrong. Evaluator OS is designed to preserve those distinctions.

## Status and claim boundary

This is an active experimental build. The current repository contains architecture, schemas, scoring primitives, and seed data. Cross-provider API adapters and the human-verified Gold benchmark are not yet complete. No benchmark result is claimed until the relevant Gold labels and runs exist.

## Run the core tests

```bash
python -m pytest
```

## Design references

The architecture is informed by current public guidance and evaluation work from frontier AI labs, including:

- Anthropic, *Demystifying evals for AI agents*: https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- OpenAI Evals / GDPval: https://evals.openai.com/
- OpenAI AgentKit announcement: https://openai.com/index/introducing-agentkit/
- xAI API documentation: https://docs.x.ai/
- Gemini API documentation: https://ai.google.dev/gemini-api/docs

These sources are design references, not claims that Evaluator OS is affiliated with or endorsed by any provider.
