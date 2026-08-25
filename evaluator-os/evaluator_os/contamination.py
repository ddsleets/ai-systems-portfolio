from __future__ import annotations

from collections.abc import Iterable

DEFAULT_FORBIDDEN_TOKENS = (
    "authoritative_decision",
    "human-gold",
    "human gold answer",
    "gold_decision",
    "gold_alignment_score",
    "evaluator critique",
    "prior candidate response",
)


def scan_candidate_text(text: str, forbidden_tokens: Iterable[str] = DEFAULT_FORBIDDEN_TOKENS) -> tuple[str, ...]:
    lowered = text.casefold()
    hits = []
    for token in forbidden_tokens:
        if token.casefold() in lowered:
            hits.append(token)
    return tuple(hits)


def candidate_text_is_clean(text: str, forbidden_tokens: Iterable[str] = DEFAULT_FORBIDDEN_TOKENS) -> bool:
    return not scan_candidate_text(text, forbidden_tokens)
