from evaluator_os.packet_integrity import packet_sha256, verify_declared_packet_sha256


def test_packet_hash_ignores_declared_hash_fields():
    packet = {"packet_id": "x", "value": 7}
    digest = packet_sha256(packet)
    packet["packet_sha256"] = digest
    packet["hash_note"] = "self-described"
    assert packet_sha256(packet) == digest
    assert verify_declared_packet_sha256(packet)


def test_packet_hash_detects_content_change():
    packet = {"packet_id": "x", "value": 7}
    packet["packet_sha256"] = packet_sha256(packet)
    packet["value"] = 8
    assert not verify_declared_packet_sha256(packet)
