from evaluator_os.mission_state import mission_state_issues, mission_state_is_consistent


def test_frozen_reviewer_blind_state_is_consistent():
    task = {
        "status": "PACKET_FROZEN_REVIEWER_BLIND_GOLD_PENDING",
        "packet_status": "FROZEN",
        "packet_integrity_reference": "abc123",
        "gold_status": "AWAITING_REVIEWER_BLIND_HUMAN_JUDGMENT",
        "candidate_status": "BLOCKED_UNTIL_GOLD_FREEZE",
        "reviewer_embargo": "ACTIVE",
    }
    assert mission_state_issues(task) == ()
    assert mission_state_is_consistent(task)


def test_candidate_unblocked_before_gold_is_detected():
    task = {
        "status": "PACKET_FROZEN_REVIEWER_BLIND_GOLD_PENDING",
        "packet_status": "FROZEN",
        "packet_integrity_reference": "abc123",
        "gold_status": "AWAITING_REVIEWER_BLIND_HUMAN_JUDGMENT",
        "candidate_status": "READY",
        "reviewer_embargo": "ACTIVE",
    }
    assert "candidate_not_blocked_before_gold_freeze" in mission_state_issues(task)
