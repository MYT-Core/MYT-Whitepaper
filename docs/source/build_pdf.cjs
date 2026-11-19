// Renders docs/source/whitepaper-<version>.html to docs/MYT_Whitepaper_<version>.pdf.
// Usage: node docs/source/build_pdf.cjs v1.4   (requires the `playwright` package with Chromium)
const path = require("node:path");
const { chromium } = require("playwright");

const version = process.argv[2] || "v1.4";
const src = path.resolve(__dirname, `whitepaper-${version}.html`);
const out = path.resolve(__dirname, "..", `MYT_Whitepaper_${version}.pdf`);
const label = version.replace(/^v/, "");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + src, { waitUntil: "load" });
  await page.pdf({
    path: out,
    format: "A4",
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `<div style="width:100%;font-size:7.5pt;color:#7a8496;padding:0 20mm;display:flex;justify-content:space-between;font-family:Arial,sans-serif"><span>MYT · Privacy Settlement Layer — Technical Specification</span><span>Version ${label}</span></div>`,
    footerTemplate: `<div style="width:100%;font-size:7.5pt;color:#7a8496;padding:0 20mm;text-align:right;font-family:Arial,sans-serif">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>`,
    margin: { top: "22mm", bottom: "20mm", left: "20mm", right: "20mm" },
  });
  await browser.close();
  console.log("wrote", out);
})().catch((error) => { console.error(error); process.exitCode = 1; });
