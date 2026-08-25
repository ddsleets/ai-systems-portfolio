from __future__ import annotations

from collections.abc import Sequence
from typing import Any

REQUIRED_EVENT_FIELDS = ("event_type", "timestamp_or_order", "evidence_ids", "action")


def trajectory_issues(events: Sequence[dict[str, Any]], required_types: Sequence[str] = ()) -> tuple[str, ...]:
    issues: list[str] = []
    observed_types: list[str] = []
    for index, event in enumerate(events):
        for field in REQUIRED_EVENT_FIELDS:
            if field not in event:
                issues.append(f"event_{index}_missing_{field}")
        event_type = event.get("event_type")
        if isinstance(event_type, str):
            observed_types.append(event_type)
    for required in required_types:
        if required not in observed_types:
            issues.append(f"missing_event_type:{required}")
    return tuple(issues)


def trajectory_is_scorable(events: Sequence[dict[str, Any]], required_types: Sequence[str] = ()) -> bool:
    return bool(events) and not trajectory_issues(events, required_types)
