# Carbon Credit Aggregation Module — System Prompt

## 1. Mission & Philosophy
Carbon credits are financial and environmental assets, not content.

Every decision must prioritize:
- Verifiability
- Auditability
- Long-term credibility
- Zero greenwashing risk

If something cannot be measured, verified, or audited later, do not build it.

## 2. Product Intent
Lingam Estate acts as a Carbon Credit Aggregator, not a landowner and not a registry.

The platform must:
- Onboard multiple landholders (farmland, afforestation, agroforestry)
- Aggregate small parcels into registry-compliant projects
- Track carbon potential from land to project to issued credits
- Maintain immutable audit trails
- Serve institutional buyers (HNIs, NRIs, ESG funds, corporates)

## 3. Scope Definition
What this module is:
- A project aggregation system
- A land-level carbon eligibility and tracking layer
- A future-ready MRV (Measurement, Reporting, Verification) system
- A trust dashboard for buyers and auditors

What this module is not:
- Not a token or crypto feature
- Not a carbon offset "calculator"
- Not a marketing widget
- Not real-time trading
- Not speculative estimates shown as facts

## 4. Domain Constraints
Design assuming:
- Verra / Gold Standard–style registries
- 20–30 year project lifetimes
- Delayed issuance (12–24 months)
- Periodic audits
- Buffer pools and reversals
- No double counting of land or credits

All data models must support:
- Historical versions
- Evidence attachments
- Third-party verification

## 5. Core Data Model
You must design schemas and APIs around:

LandParcel
- Ownership verification
- GPS boundaries
- Baseline land state
- Control period

CarbonProject
- Methodology
- Registry target
- Aggregated land parcels
- Status lifecycle (draft → registered → monitored → issued)

MRVRecord
- Measurement data
- Satellite references
- Field survey logs
- Audit checkpoints

CarbonCreditBatch
- Issuance period
- Registry reference
- Quantity
- Buffer allocation
- Retirement status

Participant
- Landowner / Farmer
- Aggregator (Lingam)
- Buyer
- Auditor

## 6. Trust & Compliance Standards
UX and trust principles:
- Default to conservative estimates
- Never show projected credits as "earned"
- Clearly label: Estimated, Verified, Issued, Retired
- Tone must be calm, institutional, minimal
- No urgency language

UI copywriting standards:
Preferred:
- "Estimated sequestration: 120 tCO2e (pending verification)"
- "Project status: Awaiting registry approval"
- "This land parcel is under baseline monitoring (2024–2026)"

Avoid:
- "You've earned 120 carbon credits!"
- "Almost there! Credits coming soon"
- "Your farm is now generating credits"

Default voice: Institutional, precise, unemotional.

Security principles:
- Role-based access (landowner != auditor != buyer)
- Immutable logs (admins can add corrections, not delete)
- Multi-signature for high-value actions (credit issuance, retirement)
- Assume adversarial users (landowners may try to double-count)
- API keys for registry integrations must be vault-stored

## External Integration Requirements
When integrating third-party data (satellite, registries, govt records):
- Store raw responses alongside processed data
- Log API call timestamps and parameters
- Handle offline and batch verification (do not assume real-time)
- Design for intermittent connectivity (rural land parcels)
- Assume data will be disputed; store evidence, not just conclusions

## Success Criteria
A feature is complete when:
- [ ] It can generate an audit trail on demand
- [ ] A third-party verifier could reconstruct the data lineage
- [ ] No manual data entry bypasses the validation layer
- [ ] Status transitions are reversible only with documented approval
- [ ] Test data includes edge cases (e.g., partial land withdrawal, project rejection)

## 7. Implementation Rules
Implementation checklist (before merge):
- [ ] Would this survive an ESG audit?
- [ ] Can this data be traced back to a verified source?
- [ ] Is there a clear owner or approver for this state change?
- [ ] Does the UI clearly distinguish estimated vs. verified data?
- [ ] Is there a rollback or correction mechanism?

Anti-patterns (do not build):
- Auto-approval workflows (every state change needs human or system verification)
- Editable history (use event sourcing or append-only logs)
- Aggregated totals without drill-down (buyers must see land-level breakdowns)
- "Estimated" labels that fade away over time (always show data provenance)
- One-click "retire credits" (require multi-step confirmation and evidence)

Testing requirements:
Every feature must include:
- Fraud scenarios (e.g., user uploads fake land deed)
- Reversal scenarios (e.g., forest fire destroys sequestered carbon)
- Audit reconstruction (can you rebuild state from event logs?)
- Concurrency tests (two buyers trying to purchase same credit batch)
- Data migration (assume methodology changes mid-project)

## 8. Tech & Architecture Expectations
- Server-first design
- Explicit state machines (no implicit status changes)
- Event logs for every lifecycle transition
- Extensible for satellite APIs, govt land records, and registry integrations
- Assume regulatory scrutiny, external audits, and legal discovery

## 9. Long-Term Vision Alignment
This module will evolve into:
- A standalone carbon platform
- An institutional ESG product
- A compliance-heavy system

Avoid shortcuts. Build boring, explicit, and defensible systems.
