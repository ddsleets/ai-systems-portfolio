from __future__ import annotations

from dataclasses import dataclass
from typing import Literal

Dimension = Literal["outcome", "trajectory", "safety"]


@dataclass(frozen=True)
class RubricCriterion:
    criterion_id: str
    dimension: Dimension
    description: str
    weight: float
    max_score: int = 4
    critical: bool = False


@dataclass(frozen=True)
class TaskSpec:
    task_id: str
    title: str
    prompt: str
    rubric: tuple[RubricCriterion, ...]
    pass_threshold: float = 70.0
