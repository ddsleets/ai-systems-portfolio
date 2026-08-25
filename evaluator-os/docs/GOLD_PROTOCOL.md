# Human Gold Protocol v0.2

The Gold set is the most important asset in Evaluator OS. Synthetic labels may bootstrap mechanics, but they do not become calibration ground truth until a human verifies them.

## Two human-review modes

### A. Reviewer-blind Gold (calibration eligible)

Use this whenever a task may later support judge calibration, inter-rater analysis, or held-out evaluation.

1. Freeze the task and authoritative evidence packet.
2. Give the human reviewer only the reviewer packet: task, evidence, decision semantics, and required judgment schema.
3. Do not reveal candidate output, candidate provider/model identity, model-judge output, evaluator critique, or prior Gold.
4. Human reviewer records the authoritative decision, operational disposition, blocking uncertainties, required findings, forbidden claims, next actions, and any critical failure.
5. Freeze the Gold artifact and set `reviewer_blinding=CANDIDATE_BLIND`.
6. Only after Gold freeze may the candidate output be unembargoed to that reviewer.
7. Candidate-to-Gold and judge-to-Gold scoring may then proceed.

### B. Candidate-exposed human judgment (diagnostic only)

If the reviewer saw the candidate before judging, preserve the judgment but mark `reviewer_blinding=NOT_CANDIDATE_BLIND`. It may be used for candidate-to-human comparison and workflow debugging, but not as clean judge-calibration, inter-rater-independence, or held-out reliability evidence.

## Required Gold metadata

Every Gold artifact should record:

- reviewer and reviewer type;
- packet ID and packet SHA-256;
- authoritative decision and operational disposition;
- blocking uncertainties;
- required findings;
- forbidden claims;
- required next actions;
- critical-failure state;
- `gold_verified`;
- `reviewer_blinding`;
- reviewer-exposure note when blinding is not candidate-blind;
- numeric criterion scores only when the human actually supplied them.

Never synthesize missing human numeric scores.

## Identity bias control

Even after candidate output becomes reviewable for trial-specific scoring, hide provider/model identity from human and model judges when practical. Candidate blindness and provider-identity blindness are separate controls and should be recorded separately.

## Gold eligibility states

- `CALIBRATION_ELIGIBLE`: human Gold is candidate-blind, packet-verified, and otherwise uncontaminated.
- `DIAGNOSTIC_ONLY`: valid human judgment, but candidate/model-judge exposure occurred before Gold freeze.
- `INVALID_CONTAMINATED`: answer-revealing metadata, prior Gold, or other contamination invalidates the reference.

## What the Gold set should contain

Do not build Gold only from easy successes. Deliberately accumulate clearly good trials, clearly bad trials, plausible-but-wrong outputs, correct outcomes reached through poor trajectories, poor outcomes reached through disciplined trajectories, correct abstentions/escalations, prompt-injection/tool-manipulation attempts, missing-evidence cases, degraded-provenance cases, and judge-disagreement cases.

The goal is not a large pile of labels. The goal is defensible coverage of the decisions Evaluator OS must make reliably.

## Current protocol lesson

Mission 001 and Mission 002 both produced useful human-verified diagnostic Gold, but the reviewer had candidate exposure before Gold freeze. They remain valid for candidate-to-human comparison and evaluator development, while reviewer-blind calibration evidence remains unearned. Mission 003 should be the first reviewer-blind Gold example.
