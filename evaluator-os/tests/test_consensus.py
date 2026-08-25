from evaluator_os.consensus import JudgeVote, consensus, weighted_median


def test_weighted_median_resists_single_outlier():
    votes = [
        JudgeVote("judge-a", 4, 1.0),
        JudgeVote("judge-b", 4, 1.0),
        JudgeVote("judge-c", 0, 0.5),
    ]
    assert weighted_median(votes) == 4


def test_disagreement_triggers_review():
    result = consensus([
        JudgeVote("judge-a", 4),
        JudgeVote("judge-b", 2),
        JudgeVote("judge-c", 3),
    ])
    assert result.status == "REVIEW"
    assert result.spread == 2
