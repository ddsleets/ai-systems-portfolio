# Decision Semantics v0.1

Evaluator OS distinguishes the release/disposition decision from engineering continuation policy.

## Primary release decision

- `PROCEED`: approve the proposed release/deployment state under the stated scope.
- `REVISE`: do not approve as-is; modify the proposed artifact/profile/configuration, but no stronger program-level stop is required beyond normal revision control.
- `HALT`: freeze further rollout/deployment/promotion of the proposed state. Engineering investigation and controlled test activity may continue under authority. HALT does not mean abandon the program.
- `ESCALATE`: the evaluator cannot make or recommend the disposition without a higher-authority decision or additional information outside its allowed scope. ESCALATE may coexist with a conservative temporary HOLD, but must not be used as a substitute for an obvious HALT when the evidence supports freezing rollout.

## Required disposition fields

Every candidate output should separately state:

1. `release_decision`: PROCEED | REVISE | HALT | ESCALATE
2. `production_rollout`: APPROVE | HOLD | NOT_APPLICABLE
3. `engineering_test`: CONTINUE_CONTROLLED | PAUSE | NOT_APPLICABLE
4. `configuration_change_authority`: HUMAN_REQUIRED | NO_CHANGE_NEEDED
5. `external_investigation`: INITIATE | CONTINUE | NOT_REQUIRED | UNKNOWN

## Scoring rule

Exact decision-label agreement is scored separately from disposition-policy agreement. A model cannot recover an exact-label miss through similar prose, but policy alignment receives partial credit so the failure mode remains diagnosable.

## Mission 001 lesson

The original Mission 001 decision space allowed `REVISE` and `HALT` to produce overlapping operational prose. Human Gold established `HALT` because broader production rollout must stop while controlled engineering testing continues. This led to the explicit decision/disposition split above.
