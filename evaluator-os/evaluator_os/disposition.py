from __future__ import annotations

from dataclasses import dataclass
from typing import Sequence


@dataclass(frozen=True)
class DispositionDiagnostic:
    candidate: str
    gold: str
    relation: str
    distance: int | None


def compare_ordered(candidate: str, gold: str, ordering: Sequence[str]) -> DispositionDiagnostic:
    """Compare an ordered operational disposition without changing Gold scoring.

    `ordering` must run from least restrictive to most restrictive, for example
    ("CONTINUE", "PAUSE", "STOP").
    """
    values = tuple(ordering)
    if candidate not in values or gold not in values:
        return DispositionDiagnostic(candidate, gold, "NON_ORDERED_MISMATCH", None)

    ci = values.index(candidate)
    gi = values.index(gold)
    if ci == gi:
        relation = "EXACT"
    elif ci > gi:
        relation = "CONSERVATIVE_OVERREACH"
    else:
        relation = "UNDER_PROTECTIVE"
    return DispositionDiagnostic(candidate, gold, relation, ci - gi)
