# Observable Trajectory Event Schema v0.1

Evaluator OS scores only observable events. It does not request, infer, or reconstruct private chain-of-thought.

## Minimum event fields
- `event_type`
- `timestamp_or_order`
- `evidence_ids`
- `action`

Optional fields may include tool name, tool result summary, validation status, authority state, and environment-state delta when actually observable.

## Standard event types
- evidence_read
- authority_check
- data_quality_check
- tool_request
- tool_result
- validation
- proposed_action
- human_gate
- final_decision

A final-only model response remains valid for outcome scoring but receives `NOT_SCORABLE_FINAL_ONLY` for trajectory unless separate observable events are available.
