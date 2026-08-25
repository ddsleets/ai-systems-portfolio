# Dan Sleeter — AI / RFML Technical Program Portfolio

A public portfolio focused on technical leadership across **AI, RF systems, RF machine learning, agentic engineering, evaluation, risk, and deployment readiness**.

**Live portfolio:** https://ddsleets.github.io/ai-systems-portfolio/

> Branch note: the `portfolio-v2-evaluator-os` branch contains the current Case 06 / Evaluator OS development work. GitHub Pages remains deployed from `main` until the portfolio update is explicitly approved for release.

## What this portfolio demonstrates

My background is 20+ years in RF engineering, systems integration, field testing, troubleshooting, automation, and technical leadership. The current portfolio connects that engineering depth with hands-on AI/RFML work and a technical-program operating model: define the mission, establish acceptance criteria, build and test the technical system, expose failure modes, preserve human authority, and tie measured evidence to a defensible release decision.

The flagship question is not simply whether an AI model can produce a strong result. It is:

**What evidence would be required before an AI-enabled RF system should be trusted to advance toward deployment?**

## Flagship case

### Case 06 — AI + RFML Technical Program
**Taking an AI-enabled RF signal-identification system from measurement to deployment decision**

Case 06 connects the hands-on engineering from Cases 04 and 05 with the program-level work around requirements, data strategy, RFML development, agent integration, independent evaluation, risk, human controls, and deployment-readiness decisions.

My role is framed as:

**Technical Program Lead | RF Systems Engineering | AI/RFML**

The case deliberately distinguishes measured technical evidence from release claims. It shows what can proceed under controlled engineering scope, what requires revision or more evidence, and what should not yet be promoted as a reliable capability.

File: `case-ai-rfml-program.html`

## Supporting technical cases

### Case 05 — RFML + Persistent RF Memory
**Building an AI RF investigator that learns from what it measures**

Experimental RFML pipeline combining deterministic DSP, 43 engineered RF features, a 192-dimensional learned I/Q representation, hierarchical recognition, legitimate UNKNOWN decisions, persistent RF evidence, and controlled human verification.

Confirmed experimental results include:
- 81% external signal-class accuracy;
- 91% external RF-family accuracy;
- 99.3% accuracy among accepted external family predictions;
- transmitter-specific learning on WiSig with severe cross-day domain drift preserved as a material limitation.

File: `case-rfml-memory.html`

Assets: `assets/case05/`

### Case 04 — Physical-World Agent
**Giving an AI engineer supervised control of a real RF measurement workflow**

A physical-world agent architecture built around a Keysight FieldFox measurement workflow. A deterministic Python control plane handles acquisition while an AI engineering supervisor operates through approved semantic tools, bounded authority, recovery logic, validation, and explicit human override.

File: `case-agentic-rf.html`

Assets: `assets/case04/`

## Earlier AI / automation work

### Case 01 — Prior-Art Research Workflow
A staged AI-assisted research process built around claim scope, evidence mapping, date proof, confidence, blocking gaps, and explicit human review.

File: `case-agentic-prior-art.html`

### Case 02 — Agent Rules
An operating charter defining what an AI research assistant can do, what it cannot claim, when it must ask for clarification, what must be verified, and where professional judgment takes over.

File: `case-ip-navigator.html`

### Case 03 — Automation + Recovery
A Python and Playwright prototype designed around changing browser states, consent prompts, timeouts, download verification, recovery, and clear human handoff.

File: `case-automation.html`

## Evaluator OS

Evaluator OS is an experimental evaluation subsystem supporting Case 06. It separates final outcome, observable trajectory, and safety/authority behavior; uses frozen evidence packets and human-verified Gold judgments; and preserves disagreement instead of treating model consensus as ground truth.

Current earned evidence:
- 3 human-verified Gold tasks across 3 task families;
- 1 reviewer-blind, calibration-eligible Human Gold task;
- decision-label versus operational-disposition evaluation;
- critical-failure, authority, provenance, and contamination controls;
- user-mediated external candidate comparisons from Microsoft Copilot and Gemini on Mission 003.

Evaluator OS is **not** presented as a statistically calibrated or production-ready evaluator. The current Gold set is too small for general reliability or provider-performance claims.

Directory: `evaluator-os/`

## Technical-program principles

- Start with the mission and the decision required, not a feature list.
- Get technically deep enough to challenge assumptions, test design, and release claims.
- Turn ambiguity into workstreams, gates, dependencies, owners, and measurable evidence.
- Keep physical and release authority explicit rather than implied by model confidence.
- Preserve provenance and uncertainty when data, model behavior, or system state changes.
- Treat failure analysis as program input, not an exception to hide.
- State clearly what can proceed, what must be revised, what should halt, and what requires escalation.

## Public portfolio boundaries

This repository is intentionally sanitized for public use.

It does **not** contain private production source code, credentials, API keys, customer-confidential material, raw field data, exact test coordinates, proprietary evidence, private instrument addresses, private prompts, or internal implementation details.

RFML results are framed as experimental/research-grade. The portfolio does not claim production RFML deployment, operational government deployment, general evaluator reliability, or provider superiority.

## Technology represented

- RF systems engineering and instrumentation
- Keysight FieldFox / VISA / SCPI architecture
- Python automation and technical tooling
- PyTorch / TorchSig / RFML experimentation
- I/Q analysis and RF feature engineering
- Agentic AI workflow design
- Human-in-the-loop controls
- Evaluation and Human Gold workflows
- Evidence provenance and traceability
- HTML / CSS / JavaScript
- Playwright browser automation

## Repository structure

```text
assets/
  case04/
  case05/
evaluator-os/
README.md
case-ai-rfml-program.html
case-agentic-prior-art.html
case-agentic-rf.html
case-automation.html
case-ip-navigator.html
case-rfml-memory.html
index.html
script.js
styles.css
```

## Local preview

The portfolio is a static site. Open `index.html` directly in a browser or serve the repository locally:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The public site is deployed with GitHub Pages from the repository's `main` branch and root directory.

## Contact

Dan Sleeter  
Frederick, Maryland  
daniel.d.sleeter@gmail.com

---

© 2026 Dan Sleeter. Selected work is sanitized for public portfolio use.
