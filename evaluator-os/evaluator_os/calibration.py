from __future__ import annotations

from dataclasses import dataclass
from math import sqrt
from statistics import mean
from typing import Sequence


@dataclass(frozen=True)
class CalibrationPoint:
    human_score: float
    judge_score: float


@dataclass(frozen=True)
class CalibrationSummary:
    n: int
    mae: float
    rmse: float
    exact_agreement: float
    within_one_agreement: float
    status: str


def summarize_calibration(points: Sequence[CalibrationPoint], activation_n: int = 30) -> CalibrationSummary:
    if not points:
        raise ValueError("at least one calibration point is required")
    errors = [abs(p.judge_score - p.human_score) for p in points]
    squared = [(p.judge_score - p.human_score) ** 2 for p in points]
    exact = sum(1 for e in errors if e == 0) / len(points)
    within_one = sum(1 for e in errors if e <= 1) / len(points)
    return CalibrationSummary(
        n=len(points),
        mae=round(mean(errors), 4),
        rmse=round(sqrt(mean(squared)), 4),
        exact_agreement=round(exact, 4),
        within_one_agreement=round(within_one, 4),
        status="CALIBRATION_ACTIVE" if len(points) >= activation_n else "EXPLORATORY",
    )
