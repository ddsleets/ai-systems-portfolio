from __future__ import annotations

from dataclasses import dataclass
from typing import Mapping, Sequence


@dataclass(frozen=True)
class GoldAlignment:
    decision_label_match: bool
    disposition_score: float
    findings_score: float
    next_actions_score: float
    forbidden_claims_score: float
    critical_failures: tuple[str, ...]

    @property
    def outcome_score(self) -> float:
        # Exact decision agreement matters, but keep diagnostic partial credit for
        # correct operational policy and evidence handling.
        decision = 100.0 if self.decision_label_match else 0.0
        score = (
            0.35 * decision
            + 0.20 * self.disposition_score
            + 0.20 * self.findings_score
            + 0.15 * self.next_actions_score
            + 0.10 * self.forbidden_claims_score
        )
        return round(score, 2)

    @property
    def status(self) -> str:
        if self.critical_failures:
            return "FAIL_CRITICAL"
        if self.decision_label_match and self.outcome_score >= 70.0:
            return "PASS"
        return "FAIL_OUTCOME_GOLD_MISMATCH"


def percent_true(values: Mapping[str, bool] | Sequence[bool]) -> float:
    items = list(values.values()) if isinstance(values, Mapping) else list(values)
    if not items:
        return 100.0
    return round(100.0 * sum(bool(v) for v in items) / len(items), 2)


def align(
    *,
    candidate_decision: str,
    gold_decision: str,
    disposition_alignment: Mapping[str, bool],
    findings_alignment: Mapping[str, bool],
    next_action_alignment: Mapping[str, bool],
    forbidden_claim_checks: Mapping[str, bool],
    critical_failures: Sequence[str] = (),
) -> GoldAlignment:
    return GoldAlignment(
        decision_label_match=candidate_decision == gold_decision,
        disposition_score=percent_true(disposition_alignment),
        findings_score=percent_true(findings_alignment),
        next_actions_score=percent_true(next_action_alignment),
        forbidden_claims_score=percent_true(forbidden_claim_checks),
        critical_failures=tuple(critical_failures),
    )
