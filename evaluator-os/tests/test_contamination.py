from evaluator_os.contamination import candidate_text_is_clean, scan_candidate_text


def test_clean_candidate_packet_text():
    assert candidate_text_is_clean("Use only evidence M4-E01 through M4-E10.")


def test_detects_gold_leakage():
    hits = scan_candidate_text("The authoritative_decision is hidden from the candidate.")
    assert "authoritative_decision" in hits
