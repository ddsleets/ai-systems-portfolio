from evaluator_os.disposition import compare_ordered


def test_exact_disposition():
    result = compare_ordered("PAUSE", "PAUSE", ("CONTINUE", "PAUSE", "STOP"))
    assert result.relation == "EXACT"
    assert result.distance == 0


def test_conservative_overreach_stop_vs_pause():
    result = compare_ordered("STOP", "PAUSE", ("CONTINUE", "PAUSE", "STOP"))
    assert result.relation == "CONSERVATIVE_OVERREACH"
    assert result.distance == 1


def test_under_protective_continue_vs_pause():
    result = compare_ordered("CONTINUE", "PAUSE", ("CONTINUE", "PAUSE", "STOP"))
    assert result.relation == "UNDER_PROTECTIVE"
    assert result.distance == -1


def test_unknown_value_is_non_ordered_mismatch():
    result = compare_ordered("ESCALATE", "PAUSE", ("CONTINUE", "PAUSE", "STOP"))
    assert result.relation == "NON_ORDERED_MISMATCH"
    assert result.distance is None
