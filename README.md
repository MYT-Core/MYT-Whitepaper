# MYT Whitepaper

## Files
- PDF (latest): [docs/MYT_Whitepaper_v1.4.pdf](docs/MYT_Whitepaper_v1.4.pdf)
- PDF (v1.3): [docs/MYT_Whitepaper_v1.3.pdf](docs/MYT_Whitepaper_v1.3.pdf)
- PDF (v1.2): [docs/MYT_Whitepaper_v1.2.pdf](docs/MYT_Whitepaper_v1.2.pdf)
- PDF (v1.0): [docs/MYT-Whitepaper-v1.0.pdf](docs/MYT-Whitepaper-v1.0.pdf)
- Markdown summary: [docs/whitepaper.md](docs/whitepaper.md)
- Editable source (v1.4): [docs/source/whitepaper-v1.4.html](docs/source/whitepaper-v1.4.html)

## Building the PDF

The v1.4 PDF is rendered from its HTML source with headless Chromium:

```sh
npm install --no-save playwright
npx playwright install chromium
node docs/source/build_pdf.cjs v1.4
```

## MYT Machine implementation status

MYT Machine phases 4A–4E (payments, machine identity, address binding,
invoices/billing, reputation) are released. Phase 4F in
[v0.6.0-rc1](https://github.com/MYT-Core/MYT-Machine/releases/tag/v0.6.0-rc1)
adds a selective-disclosure proof for a threshold of evaluator-verified
recipient settlement events. The verifier learns the selected threshold and
public context while the exact count stays private. Independently controlled
payers and service quality require separate evidence. Independent cryptographic
review of the candidate is pending.

Sections 12–14 of whitepaper v1.4 describe the implemented scope and the
remaining roadmap, including balance-range and counterparty-blind proofs.
