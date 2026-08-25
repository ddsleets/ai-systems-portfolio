# Packet Freeze Protocol v0.1

A task packet is not frozen merely because its prose appears complete.

## Freeze gates

1. Packet JSON parses successfully.
2. Packet ID and task ID match the task registry.
3. Evidence IDs are unique and ordered.
4. Decision space matches the task definition.
5. Candidate-visible content passes the contamination scan.
6. Candidate packet contains no Human Gold, candidate result, evaluator critique, or model-judge result.
7. Canonical SHA-256 is computed with `evaluator_os.packet_integrity.packet_sha256`.
8. Declared `packet_sha256` verifies against canonical content.
9. Reviewer packet points to the frozen packet ID/fingerprint.
10. Task state changes to `PACKET_FROZEN_REVIEWER_BLIND_GOLD_PENDING`.

## Mutation rule

Any substantive change to evidence, authority rules, candidate instructions, or decision fields after freeze requires a new packet version and new fingerprint. Never silently edit a frozen packet while retaining its old packet ID.
