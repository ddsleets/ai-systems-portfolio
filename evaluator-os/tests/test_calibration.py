from evaluator_os.calibration import CalibrationPoint, summarize_calibration


def test_calibration_stays_exploratory_before_threshold():
    result = summarize_calibration([
        CalibrationPoint(4, 4),
        CalibrationPoint(3, 2),
        CalibrationPoint(1, 2),
    ])
    assert result.n == 3
    assert result.mae == 0.6667
    assert result.exact_agreement == 0.3333
    assert result.within_one_agreement == 1.0
    assert result.status == "EXPLORATORY"
