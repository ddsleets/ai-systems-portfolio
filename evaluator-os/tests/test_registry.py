from evaluator_os.registry import registry_consistency_issues


def test_valid_registry_has_no_issues():
    registry = {
        "human_verified_gold_count": 1,
        "entries": [{
            "gold_id": "g1",
            "gold_verified": True,
            "reviewer_blinding": "CANDIDATE_BLIND",
            "eligible_for_judge_calibration": True,
        }],
    }
    assert registry_consistency_issues(registry) == ()


def test_calibration_requires_candidate_blind_gold():
    registry = {
        "human_verified_gold_count": 1,
        "entries": [{
            "gold_id": "g1",
            "gold_verified": True,
            "reviewer_blinding": "NOT_CANDIDATE_BLIND",
            "eligible_for_judge_calibration": True,
        }],
    }
    assert "calibration_blinding_mismatch:g1" in registry_consistency_issues(registry)
