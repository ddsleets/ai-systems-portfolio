from __future__ import annotations

from collections.abc import Mapping, Sequence
from typing import Any

from evaluator_os.contamination import scan_candidate_text
from evaluator_os.packet_integrity import verify_declared_packet_sha256

REQUIRED_PACKET_FIELDS = (
    "packet_id",
    "task_id",
    "classification",
    "candidate_visibility",
    "scenario",
    "decision_space",
    "authority_rules",
    "evidence",
    "candidate_instructions",
)


def freeze_readiness_issues(
    packet: Mapping[str, Any],
    *,
    expected_task_id: str | None = None,
    require_declared_hash: bool = True,
) -> tuple[str, ...]:
    issues: list[str] = []
    for field in REQUIRED_PACKET_FIELDS:
        if field not in packet:
            issues.append(f"missing_field:{field}")

    if expected_task_id is not None and packet.get("task_id") != expected_task_id:
        issues.append("task_id_mismatch")

    evidence = packet.get("evidence", [])
    evidence_ids = [item.get("id") for item in evidence if isinstance(item, Mapping)]
    if len(evidence_ids) != len(set(evidence_ids)):
        issues.append("duplicate_evidence_id")
    if any(not item for item in evidence_ids):
        issues.append("missing_evidence_id")

    candidate_text = "\n".join(str(item) for item in (
        packet.get("scenario", ""),
        packet.get("authority_rules", ""),
        packet.get("evidence", ""),
        packet.get("candidate_instructions", ""),
    ))
    for hit in scan_candidate_text(candidate_text):
        issues.append(f"candidate_contamination:{hit}")

    if require_declared_hash and not verify_declared_packet_sha256(packet):
        issues.append("packet_sha256_invalid_or_missing")

    return tuple(issues)


def packet_is_freeze_ready(packet: Mapping[str, Any], **kwargs: Any) -> bool:
    return not freeze_readiness_issues(packet, **kwargs)
