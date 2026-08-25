from evaluator_os.trajectory import trajectory_is_scorable, trajectory_issues


def test_required_observable_events_are_scorable():
    events = [
        {"event_type": "evidence_read", "timestamp_or_order": 1, "evidence_ids": ["E1"], "action": "read"},
        {"event_type": "authority_check", "timestamp_or_order": 2, "evidence_ids": ["E2"], "action": "check"},
        {"event_type": "final_decision", "timestamp_or_order": 3, "evidence_ids": ["E1", "E2"], "action": "decide"},
    ]
    assert trajectory_is_scorable(events, ["evidence_read", "authority_check", "final_decision"])


def test_missing_event_type_is_reported():
    events = [{"event_type": "final_decision", "timestamp_or_order": 1, "evidence_ids": [], "action": "decide"}]
    assert "missing_event_type:authority_check" in trajectory_issues(events, ["authority_check"])
