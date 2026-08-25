from __future__ import annotations

from collections.abc import Mapping, Sequence
from typing import Any


def candidate_output_issues(output: Mapping[str, Any], required_fields: Sequence[str], allowed_decisions: Sequence[str] = ("PROCEED", "REVISE", "HALT", "ESCALATE")) -> tuple[str, ...]:
    issues: list[str] = []
    for field in required_fields:
        if field not in output:
            issues.append(f"missing_output_field:{field}")
    decision = output.get("release_decision")
    if decision is not None and decision not in allowed_decisions:
        issues.append("invalid_release_decision")
    evidence_ids = output.get("evidence_ids")
    if evidence_ids is not None and not isinstance(evidence_ids, list):
        issues.append("evidence_ids_not_list")
    return tuple(issues)


def candidate_output_is_valid(output: Mapping[str, Any], required_fields: Sequence[str]) -> bool:
    return not candidate_output_issues(output, required_fields)
