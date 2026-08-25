from __future__ import annotations

from collections import Counter
from typing import Any


def registry_consistency_issues(registry: dict[str, Any]) -> tuple[str, ...]:
    issues: list[str] = []
    entries = registry.get("entries", [])
    if registry.get("human_verified_gold_count") != len(entries):
        issues.append("human_verified_gold_count_mismatch")
    gold_ids = [entry.get("gold_id") for entry in entries]
    duplicates = [item for item, count in Counter(gold_ids).items() if item and count > 1]
    if duplicates:
        issues.append("duplicate_gold_id")
    for entry in entries:
        if entry.get("eligible_for_judge_calibration") and entry.get("reviewer_blinding") != "CANDIDATE_BLIND":
            issues.append(f"calibration_blinding_mismatch:{entry.get('gold_id')}")
        if entry.get("gold_verified") is not True:
            issues.append(f"unverified_registry_entry:{entry.get('gold_id')}")
    return tuple(issues)
