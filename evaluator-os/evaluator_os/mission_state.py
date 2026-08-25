from __future__ import annotations

from collections.abc import Mapping
from typing import Any


def mission_state_issues(task: Mapping[str, Any]) -> tuple[str, ...]:
    issues: list[str] = []
    status = task.get("status")
    packet_status = task.get("packet_status")
    gold_status = task.get("gold_status")
    candidate_status = task.get("candidate_status")

    if status == "PACKET_FROZEN_REVIEWER_BLIND_GOLD_PENDING":
        if packet_status != "FROZEN":
            issues.append("frozen_state_without_frozen_packet")
        if not task.get("packet_integrity_reference"):
            issues.append("frozen_state_without_packet_fingerprint")
        if gold_status != "AWAITING_REVIEWER_BLIND_HUMAN_JUDGMENT":
            issues.append("frozen_state_gold_status_mismatch")
        if candidate_status != "BLOCKED_UNTIL_GOLD_FREEZE":
            issues.append("candidate_not_blocked_before_gold_freeze")
        if task.get("reviewer_embargo") != "ACTIVE":
            issues.append("reviewer_embargo_not_active")
    return tuple(issues)


def mission_state_is_consistent(task: Mapping[str, Any]) -> bool:
    return not mission_state_issues(task)
