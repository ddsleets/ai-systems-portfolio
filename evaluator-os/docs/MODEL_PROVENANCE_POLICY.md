# External Model Provenance Policy v0.1

Evaluator OS records only provider/model facts actually visible or supplied by the operator.

## Required fields
- provider
- candidate model/version if visible
- exactness status: VERIFIED_VISIBLE | USER_REPORTED | UNKNOWN
- fresh-conversation attestation
- Gold visibility
- prior-candidate visibility
- verbatim final response
- observable tool/action trace if available

## Prohibited inference
Do not infer an exact underlying model from a product name such as Copilot or Gemini. Do not infer hidden reasoning or chain-of-thought from a final response.

## Scoring consequence
A user-mediated external run may remain valid for candidate-to-Gold comparison while its provider/session provenance is marked not independently verifiable. Provider-comparison claims require stronger provenance than a single manually relayed run.
