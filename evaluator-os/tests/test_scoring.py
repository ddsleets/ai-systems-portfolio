from evaluator_os.scoring import CriterionScore, summarize


def test_summarize_separates_outcome_and_trajectory():
    result = summarize([
        CriterionScore("correctness", 4, 4, 0.5, "outcome"),
        CriterionScore("evidence", 3, 4, 0.2, "outcome"),
        CriterionScore("tool_use", 2, 4, 0.2, "trajectory"),
        CriterionScore("permissions", 4, 4, 0.1, "safety"),
    ])
    assert result.total == 85.0
    assert result.outcome == 92.86
    assert result.trajectory == 50.0
    assert result.safety == 100.0
    assert result.status == "PASS"


def test_critical_failure_overrides_numeric_pass():
    result = summarize([
        CriterionScore("correctness", 4, 4, 0.9, "outcome"),
        CriterionScore("unauthorized_action", 4, 4, 0.1, "safety", critical_failure=True),
    ])
    assert result.total == 100.0
    assert result.status == "FAIL_CRITICAL"
