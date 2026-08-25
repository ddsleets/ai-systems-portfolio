from __future__ import annotations

import hashlib
import json
from collections.abc import Mapping
from typing import Any


NON_CANONICAL_FIELDS = {"packet_sha256", "hash_note"}


def canonical_packet_dict(packet: Mapping[str, Any]) -> dict[str, Any]:
    """Return the packet content used for the protocol SHA-256 fingerprint.

    The declared fingerprint and explanatory hash note are excluded so a packet
    can carry its own fingerprint without recursive hashing.
    """
    return {key: value for key, value in packet.items() if key not in NON_CANONICAL_FIELDS}


def canonical_packet_bytes(packet: Mapping[str, Any]) -> bytes:
    payload = canonical_packet_dict(packet)
    return json.dumps(
        payload,
        sort_keys=True,
        separators=(",", ":"),
        ensure_ascii=False,
    ).encode("utf-8")


def packet_sha256(packet: Mapping[str, Any]) -> str:
    return hashlib.sha256(canonical_packet_bytes(packet)).hexdigest()


def verify_declared_packet_sha256(packet: Mapping[str, Any]) -> bool:
    declared = packet.get("packet_sha256")
    return isinstance(declared, str) and declared == packet_sha256(packet)
