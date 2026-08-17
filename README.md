# Dan Sleeter — AI Systems & Agentic Workflow Portfolio

A public portfolio focused on engineering-first AI system design: agent behavior, human-in-the-loop control, evidence and traceability, technical automation, and supervised AI interaction with real engineering systems.

**Live portfolio:** https://ddsleets.github.io/ai-systems-portfolio/

## What this portfolio demonstrates

I came to AI design through engineering. My background is in RF engineering, systems integration, field testing, automation, and technical leadership. The work in this portfolio shows how I apply that systems mindset to AI-assisted workflows: make state visible, define authority clearly, preserve evidence, design for failure and recovery, and keep a person in control when judgment matters.

## Case studies

### Case 01 — Prior-Art Research Workflow
**Turning prior-art research into a reviewable workflow**

A staged AI-assisted research process built around claim scope, evidence mapping, date proof, confidence, blocking gaps, and explicit human review.

File: `case-agentic-prior-art.html`

### Case 02 — Agent Rules
**Writing the rules before giving an AI more authority**

A compact operating charter for an IP research assistant defining what the system can do, what it cannot claim, when it must ask for clarification, what must be verified, and where professional judgment takes over.

File: `case-ip-navigator.html`

### Case 03 — Working Prototype
**Making a brittle browser task fail usefully**

A Python and Playwright automation prototype designed around changing browser states, consent prompts, timeouts, download verification, recovery, and clear human handoff when automation cannot safely continue.

File: `case-automation.html`

### Case 04 — Physical-World Agent
**Giving an AI engineer supervised control of a real RF measurement workflow**

A physical-world agent architecture built around a Keysight FieldFox measurement workflow. A deterministic Python control plane handles instrument acquisition while an AI engineering supervisor operates through approved semantic tools, bounded authority, recovery logic, validation, and explicit human override.

Public Case 04 materials include sanitized engineering graphics, architecture diagrams, RF-result plots, and a representative synthetic agent trace.

File: `case-agentic-rf.html`

Assets: `assets/case04/`

## Repository structure

```text
assets/
  case04/
    diagrams/
    gui/
    logs/
    results/
README.md
case-agentic-prior-art.html
case-agentic-rf.html
case-automation.html
case-ip-navigator.html
index.html
script.js
styles.css
```

## Design principles

- Start with the real decision or task the user is trying to complete.
- Make system state, permissions, evidence, and handoffs visible.
- Verify important outputs before advancing.
- Bound AI authority instead of exposing unrestricted controls.
- Keep consequential judgment with the human user.
- Design recovery and failure behavior as part of the system, not as an afterthought.
- Preserve provenance when configuration or system state changes.

## Public portfolio boundaries

This repository is intentionally sanitized for public use.

It does **not** contain production source code for private engineering systems, production AI prompts, credentials, API keys, customer-confidential material, raw field data, exact test coordinates, proprietary evidence, private instrument addresses, or internal implementation details.

Case 04 public artifacts are representative or sanitized. The architecture and agent interaction materials describe the design at a portfolio-safe level without exposing the production implementation.

## Technology represented

- HTML / CSS / JavaScript
- Python automation and prototyping
- Playwright browser automation
- AI-assisted and agentic workflow design
- Human-in-the-loop system design
- Evidence and traceability workflows
- RF measurement and instrumentation concepts
- Keysight FieldFox / VISA / SCPI architecture
- GPS-tagged measurement and RF post-processing concepts

## Local preview

The portfolio is a static site. Open `index.html` directly in a browser or serve the repository locally:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

The public site is deployed with GitHub Pages from the repository's `main` branch and root directory.

## Contact

Dan Sleeter  
Frederick, Maryland  
daniel.d.sleeter@gmail.com

---

© 2026 Dan Sleeter. Selected work is sanitized for public portfolio use.
