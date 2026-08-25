from evaluator_os.freeze import freeze_readiness_issues, packet_is_freeze_ready
from evaluator_os.packet_integrity import packet_sha256


def _packet():
    packet = {
        "packet_id": "mission-x-evidence-v1.0",
        "task_id": "mission-x",
        "classification": "SYNTHETIC",
        "candidate_visibility": "NO_GOLD_METADATA",
        "scenario": "bounded test",
        "decision_space": ["PROCEED", "REVISE", "HALT", "ESCALATE"],
        "authority_rules": ["human authority required"],
        "evidence": [{"id": "MX-E01", "facts": ["fact"], "limitation": "limit"}],
        "candidate_instructions": ["use evidence only"],
    }
    packet["packet_sha256"] = packet_sha256(packet)
    return packet


def test_packet_freeze_ready_when_hash_and_structure_are_valid():
    packet = _packet()
    assert freeze_readiness_issues(packet, expected_task_id="mission-x") == ()
    assert packet_is_freeze_ready(packet, expected_task_id="mission-x")


def test_duplicate_evidence_id_blocks_freeze():
    packet = _packet()
    packet["evidence"].append(dict(packet["evidence"][0]))
    packet["packet_sha256"] = packet_sha256(packet)
    assert "duplicate_evidence_id" in freeze_readiness_issues(packet)


def test_gold_leakage_blocks_freeze():
    packet = _packet()
    packet["candidate_instructions"] = ["Use the human gold answer."]
    packet["packet_sha256"] = packet_sha256(packet)
    assert any(item.startswith("candidate_contamination:") for item in freeze_readiness_issues(packet))
