from __future__ import annotations

from dataclasses import dataclass
from typing import Sequence


@dataclass(frozen=True)
class JudgeVote:
    judge_id: str
    score: float
    reliability_weight: float = 1.0


@dataclass(frozen=True)
class ConsensusResult:
    score: float
    status: str
    spread: float
    judges: tuple[str, ...]


def weighted_median(votes: Sequence[JudgeVote]) -> float:
    if not votes:
        raise ValueError("at least one vote is required")
    if any(v.reliability_weight <= 0 for v in votes):
        raise ValueError("reliability weights must be > 0")

    ordered = sorted(votes, key=lambda v: v.score)
    total = sum(v.reliability_weight for v in ordered)
    cutoff = total / 2.0
    running = 0.0
    for vote in ordered:
        running += vote.reliability_weight
        if running >= cutoff:
            return vote.score
    return ordered[-1].score


def consensus(votes: Sequence[JudgeVote], review_spread: float = 2.0) -> ConsensusResult:
    score = weighted_median(votes)
    spread = max(v.score for v in votes) - min(v.score for v in votes)
    return ConsensusResult(
        score=score,
        status="REVIEW" if spread >= review_spread else "CONSENSUS",
        spread=spread,
        judges=tuple(v.judge_id for v in votes),
    )
