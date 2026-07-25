<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#8F0E46">
<meta name="robots" content="noindex, nofollow">
<meta name="description" content="Rann Utsav Tent City — internal quotation generator.">
<title>Rann Utsav Tent City — Quotation Generator</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Poppins:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<style>
  /* ============================================================
     1. DESIGN TOKENS
     ============================================================ */
  :root{
    --cream:#FBF3E7;
    --paper:#FEFAF3;
    --maroon:#C4145F;
    --maroon-2:#8F0E46;
    --gold:#E8A23B;
    --gold-soft:#F3C878;
    --ink:#2B211C;
    --ink-soft:#5A4C40;
    --line:#E7D8C2;
    --ok:#2E6B45;
    --ok-bg:#E4F0E7;
    --warn:#A63B2A;
    --warn-bg:#F3DCD4;

    --font-display:'Cinzel',serif;
    --font-script:'Cormorant Garamond',serif;
    --font-body:'Poppins',sans-serif;
    --font-mono:'IBM Plex Mono',monospace;

    --radius-sm:8px;
    --radius-md:12px;
    --radius-lg:16px;
    --shadow-sm:0 1px 2px rgba(43,33,28,.06);
    --shadow-md:0 8px 28px rgba(92,33,25,.12);

    --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px;
    --space-5:20px; --space-6:24px; --space-7:32px; --space-8:40px;

    --touch:48px;
    --container-max:1180px;
  }

  /* ============================================================
     2. RESET
     ============================================================ */
  *,*::before,*::after{ box-sizing:border-box; }
  html{ -webkit-text-size-adjust:100%; text-size-adjust:100%; }
  html,body{ margin:0; padding:0; }
  body{
    background: radial-gradient(1200px 500px at 10% -10%, #fff8ea55, transparent), var(--cream);
    color:var(--ink);
    font-family:var(--font-body);
    line-height:1.5;
    min-height:100vh;
    min-height:100dvh;
    padding:20px 14px 56px;
    overflow-x:hidden;
  }
  img,svg{max-width:100%;display:block;}
  button{font:inherit;}
  input,select,textarea{font:inherit;}

  @media (prefers-reduced-motion:reduce){
    *,*::before,*::after{ animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; scroll-behavior:auto !important; }
  }

  /* Visible focus ring for keyboard users, everywhere */
  a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, [tabindex]:focus-visible{
    outline:3px solid var(--maroon-2);
    outline-offset:2px;
    border-radius:6px;
  }

  .visually-hidden{
    position:absolute !important; width:1px;height:1px; padding:0;margin:-1px;
    overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0;
  }

  /* ============================================================
     3. HEADER
     ============================================================ */
  .topbar{
    max-width:var(--container-max); margin:0 auto var(--space-6);
    display:flex; justify-content:center; text-align:center;
  }
  .brand-mark{ display:flex; flex-direction:column; align-items:center; gap:4px; }
  .brand-mark .eyebrow{
    font-family:var(--font-mono); font-size:11px; letter-spacing:.24em;
    text-transform:uppercase; color:var(--gold);
  }
  .brand-mark h1{
    font-family:var(--font-display); font-size:clamp(24px,5.5vw,38px);
    letter-spacing:.05em; margin:4px 0 0; color:var(--maroon); font-weight:700;
  }
  .brand-mark .sub{
    font-family:var(--font-script); font-style:italic; color:var(--ink-soft);
    font-size:clamp(14px,3vw,17px); margin-top:4px; padding:0 8px;
  }
  .dune{
    max-width:var(--container-max); margin:0 auto 26px; height:10px; border-radius:2px;
    background: linear-gradient(135deg, var(--gold-soft) 25%, transparent 25%) 0 0/16px 16px,
                linear-gradient(225deg, var(--gold-soft) 25%, transparent 25%) 0 0/16px 16px;
    opacity:.75;
  }

  /* ============================================================
     4. LAYOUT
     ============================================================ */
  .wrap{
    max-width:var(--container-max); margin:0 auto;
    display:grid; grid-template-columns:1fr; gap:22px; align-items:start;
  }
  @media (min-width:900px){
    .wrap{ grid-template-columns: minmax(0,1fr) minmax(0,1.1fr); gap:26px; }
  }

  .panel{
    background:var(--paper); border:1px solid var(--line); border-radius:var(--radius-md);
    padding:20px 18px 24px; box-shadow:var(--shadow-sm); min-width:0;
  }
  @media (min-width:560px){ .panel{ padding:24px 24px 28px; } }

  .panel h2{
    font-family:var(--font-display); font-size:14px; letter-spacing:.1em; text-transform:uppercase;
    color:var(--maroon); margin:0 0 18px; padding-bottom:10px; border-bottom:1px solid var(--line);
  }

  /* ============================================================
     5. FORM CONTROLS
     ============================================================ */
  .grid2{ display:grid; grid-template-columns:1fr; gap:0 14px; }
  @media (min-width:480px){ .grid2{ grid-template-columns:1fr 1fr; } }
  .row2{ display:grid; grid-template-columns:1fr; gap:0 12px; }
  @media (min-width:480px){ .row2{ grid-template-columns:1fr 1fr; } }
  .row3{ display:grid; grid-template-columns:1fr; gap:0 12px; }
  @media (min-width:560px){ .row3{ grid-template-columns:1fr 1fr 1fr; } }

  .field{ display:flex; flex-direction:column; gap:6px; margin-bottom:14px; min-width:0; }
  .field.span2{ grid-column:1/-1; }

  label{
    font-size:11.5px; letter-spacing:.04em; text-transform:uppercase;
    color:var(--ink-soft); font-weight:600;
  }
  .label-hint{ text-transform:none; font-weight:400; letter-spacing:0; opacity:.8; }

  input, select{
    font-family:var(--font-body); font-size:16px; /* 16px avoids iOS auto-zoom */
    padding:12px 12px; min-height:var(--touch);
    border:1px solid var(--line); border-radius:var(--radius-sm);
    background:#fff; color:var(--ink); outline:none; width:100%;
    transition:border-color .15s ease, box-shadow .15s ease;
  }
  input:hover, select:hover{ border-color:#D9C39C; }
  input:focus, select:focus{ border-color:var(--gold); box-shadow:0 0 0 3px rgba(184,134,59,.18); }
  input:disabled{ background:#F5EFE3; color:var(--ink-soft); cursor:not-allowed; }
  input::placeholder{ color:#B9A98F; }
  select{ cursor:pointer; }

  .hint{ font-size:12.5px; color:var(--ink-soft); margin-top:-8px; margin-bottom:12px; }
  .divider{ height:1px; background:var(--line); margin:18px 0; border:0; }

  .banner{
    font-size:13px; line-height:1.5; padding:10px 13px; border-radius:var(--radius-sm);
    margin:4px 0 14px; display:none; border:1px solid transparent;
  }
  .banner.show{ display:flex; gap:8px; align-items:flex-start; }
  .peak-banner{ background:#F1E6CF; color:var(--maroon-2); border-color:var(--gold-soft); }
  .peak-banner.tier2{ background:var(--warn-bg); border-color:var(--warn); color:var(--warn); }
  .warn-box{ background:var(--warn-bg); color:var(--warn); border-color:var(--warn); }

  /* ============================================================
     6. BUTTONS
     ============================================================ */
  .btn{
    font-family:var(--font-body); font-weight:600; font-size:14.5px;
    padding:13px 20px; min-height:var(--touch); border-radius:var(--radius-sm);
    border:1px solid transparent; cursor:pointer;
    display:inline-flex; align-items:center; justify-content:center; gap:8px;
    transition:transform .12s ease, opacity .12s ease, background-color .15s ease, box-shadow .15s ease;
    -webkit-tap-highlight-color:transparent;
  }
  .btn:active{ transform:scale(.98); }
  .btn:disabled{ opacity:.6; cursor:not-allowed; transform:none; }

  .btn-primary{ background:var(--maroon); color:#fff; width:100%; box-shadow:0 4px 14px rgba(196,20,95,.25); }
  .btn-primary:hover{ background:var(--maroon-2); }

  .btn-outline{ background:transparent; border-color:var(--maroon); color:var(--maroon); }
  .btn-outline:hover{ background:var(--maroon); color:#fff; }

  .btn-gold{ background:var(--gold); color:#fff; }
  .btn-gold:hover{ background:#D6912E; }

  .btn-ghost{ background:transparent; border:1px dashed var(--gold); color:var(--maroon-2); width:100%; }
  .btn-ghost:hover{ background:#F1E6CF; }

  .btn-remove{
    background:transparent; border:1px solid var(--warn); color:var(--warn);
    font-size:12.5px; padding:8px 12px; min-height:40px; border-radius:7px; white-space:nowrap;
  }
  .btn-remove:hover{ background:var(--warn); color:#fff; }

  .action-row{ display:grid; grid-template-columns:1fr; gap:10px; margin-top:16px; }
  @media (min-width:420px){ .action-row{ grid-template-columns:1fr 1fr; } }

  /* ============================================================
     7. TENT CATEGORY LINE ITEMS
     ============================================================ */
  .tent-line{
    border:1px solid var(--line); border-radius:var(--radius-md);
    padding:16px; margin-bottom:14px; background:#fffdf8; min-width:0;
  }
  .tent-line-head{
    display:flex; flex-wrap:wrap; gap:10px; align-items:flex-end; margin-bottom:10px;
  }
  .tent-line-head .field{ margin-bottom:0; flex:1 1 160px; min-width:140px; }
  .tent-line-head .btn-remove{ flex:0 0 auto; }

  .line-index-tag{
    font-family:var(--font-mono); font-size:10.5px; letter-spacing:.12em; text-transform:uppercase;
    color:var(--gold); margin-bottom:8px; font-weight:600;
  }
  .tent-instances{ display:flex; flex-direction:column; gap:10px; margin-top:10px; }
  .tent-instance{
    background:var(--cream); border:1px solid var(--line); border-radius:9px; padding:12px; min-width:0;
  }
  .tent-instance .ti-title{ font-size:12px; font-weight:700; color:var(--maroon-2); margin-bottom:8px; }
  #addLineBtn{ margin-top:2px; }

  /* ============================================================
     8. QUOTE CARD
     ============================================================ */
  .quote-shell{ min-width:0; }
  @media (min-width:900px){ .quote-shell{ position:sticky; top:20px; } }

  .quote-card{
    background:var(--paper); border-radius:var(--radius-lg); position:relative;
    overflow:hidden; border:1px solid var(--line); box-shadow:var(--shadow-md);
    width:100%; max-width:100%; min-width:0;
    animation:card-in .35s ease both;
  }
  @keyframes card-in{ from{ opacity:0; transform:translateY(6px); } to{ opacity:1; transform:none; } }

  .motif{
    height:14px;
    background-image: linear-gradient(135deg, var(--gold) 25%, transparent 25%),
                       linear-gradient(225deg, var(--gold) 25%, transparent 25%),
                       linear-gradient(45deg, var(--gold) 25%, transparent 25%),
                       linear-gradient(315deg, var(--gold) 25%, transparent 25%);
    background-position: 9px 0, 9px 0, 0 0, 0 0; background-size: 18px 18px; background-repeat: repeat-x; opacity:.9;
  }
  .quote-head{
    background:linear-gradient(180deg,var(--maroon) 0%, var(--maroon-2) 100%); color:#F6EEDD;
    padding:24px 20px 18px; text-align:center; position:relative;
  }
  .quote-head .camel{ position:absolute; right:16px; top:14px; opacity:.35; font-size:22px; }
  .quote-head .name{
    font-family:var(--font-display); font-size:clamp(17px,4vw,20px); letter-spacing:.1em; margin:0;
    word-break:break-word;
  }
  .quote-head .pkg{ font-family:var(--font-script); font-style:italic; font-size:15.5px; color:var(--gold-soft); margin-top:6px; }

  .quote-body{ padding:22px 18px 8px; }
  @media (min-width:480px){ .quote-body{ padding:26px 28px 10px; } }

  .qsection{ margin-bottom:20px; }
  .qsection .qlabel{
    font-family:var(--font-mono); font-size:10.5px; letter-spacing:.16em; text-transform:uppercase;
    color:var(--gold); margin:0 0 10px;
  }
  .qrow{
    display:flex; justify-content:space-between; gap:12px; font-size:14px; padding:6px 0;
    color:var(--ink); flex-wrap:wrap; line-height:1.4;
  }
  .qrow .k{ color:var(--ink-soft); flex-shrink:0; }
  .qrow .v{ font-weight:600; text-align:right; word-break:break-word; overflow-wrap:anywhere; min-width:0; }

  .price-table{ border-top:1px dashed var(--line); border-bottom:1px dashed var(--line); padding:16px 0; margin:8px 0 4px; }
  .price-row{ display:flex; justify-content:space-between; gap:10px; font-size:14.5px; padding:7px 0; }
  .price-row .amt{ font-family:var(--font-mono); font-weight:600; text-align:right; word-break:break-word; }
  .price-row.net{
    font-size:clamp(17px,4vw,19px); font-weight:700; color:var(--maroon);
    border-top:1px solid var(--line); margin-top:10px; padding:14px 12px;
    background:linear-gradient(90deg, rgba(196,20,95,.06), rgba(232,162,59,.06));
    border-radius:var(--radius-sm);
  }
  .price-row.net .amt{ font-family:var(--font-mono); font-weight:700; }

  .quote-foot{
    text-align:center; padding:16px 18px 24px; font-family:var(--font-script); font-style:italic;
    color:var(--ink-soft); font-size:14px; border-top:1px solid var(--line);
  }
  .quote-foot b{ color:var(--maroon); font-style:normal; }

  .empty-note{
    padding:44px 22px; text-align:center; color:var(--ink-soft);
    font-family:var(--font-script); font-style:italic; font-size:16px;
  }

  /* ============================================================
     9. STATUS MESSAGES
     ============================================================ */
  .status{
    font-size:13px; text-align:center; margin-top:10px; min-height:20px;
    padding:0 8px; word-break:break-word;
  }
  .status.status-ok{ color:var(--ok); }
  .status.status-warn{ color:var(--warn); }

  footer.credit{
    text-align:center; color:var(--ink-soft); font-size:11.5px; margin-top:32px;
    letter-spacing:.03em; padding:0 12px;
  }

  /* ============================================================
     10. PRINT — dedicated PDF/print output
     ============================================================ */
  @media print{
    @page{ size:A4 portrait; margin:12mm; }
    html,body{ background:#fff !important; padding:0 !important; margin:0 !important; }
    body *{ visibility:hidden; }
    #quoteCard, #quoteCard *{ visibility:visible; }
    #quoteCard{
      position:absolute; inset:0; margin:0 auto; width:100% !important; max-width:100% !important;
      border:none !important; box-shadow:none !important; border-radius:0 !important;
      animation:none !important;
    }
    .quote-shell{ position:static !important; }
    .no-print{ display:none !important; }
    a[href]::after{ content:""; }
  }
</style>
</head>
<body>

  <header class="topbar">
    <div class="brand-mark">
      <p class="eyebrow">Internal Tool · Not for Guest Circulation</p>
      <h1>Rann Utsav Tent City</h1>
      <p class="sub">Quotation Generator — Season 1 Nov 2026 – 7 Mar 2027</p>
    </div>
  </header>
  <div class="dune" role="presentation"></div>

  <main class="wrap">

    <!-- ============================================================
         FORM PANEL
         ============================================================ -->
    <section class="panel" aria-labelledby="formHeading">
      <h2 id="formHeading">Guest &amp; Stay Details</h2>

      <form id="quoteForm" novalidate>
        <div class="grid2">
          <div class="field span2">
            <label for="guestName">Guest Name</label>
            <input id="guestName" name="guestName" type="text" placeholder="e.g. Om Patel" autocomplete="name" required aria-required="true">
          </div>
          <div class="field">
            <label for="contactNumber">Contact Number</label>
            <input id="contactNumber" name="contactNumber" type="tel" placeholder="Optional" autocomplete="tel" inputmode="tel">
          </div>
          <div class="field">
            <label for="nights">Select Package</label>
            <select id="nights" name="nights">
              <option value="1">1 Night / 2 Days</option>
              <option value="2">2 Nights / 3 Days</option>
              <option value="3">3 Nights / 4 Days</option>
            </select>
          </div>
        </div>

        <div class="row2">
          <div class="field">
            <label for="checkinDate">Check-In</label>
            <input id="checkinDate" name="checkinDate" type="date" min="2026-11-01" max="2027-03-07" required aria-required="true">
          </div>
          <div class="field">
            <label for="checkoutDate">Check-Out</label>
            <input id="checkoutDate" name="checkoutDate" type="text" disabled placeholder="Auto-calculated" aria-live="polite">
          </div>
        </div>

        <div id="dateWarn" class="banner warn-box" role="alert"></div>
        <div id="peakBanner" class="banner peak-banner" role="status"></div>

        <div class="field">
          <label for="peakOverride">Peak Date Charge</label>
          <select id="peakOverride" name="peakOverride">
            <option value="auto">Auto-detect from date</option>
            <option value="none">No additional charge</option>
            <option value="tier1">Standard Peak (Tier 1)</option>
            <option value="tier2">Christmas / High Peak (Tier 2)</option>
          </select>
        </div>

        <hr class="divider">

        <div id="linesContainer"></div>
        <button class="btn btn-ghost" id="addLineBtn" type="button">+ Add Another Tent Category</button>

        <hr class="divider">

        <button class="btn btn-primary" id="generateBtn" type="submit">Generate Quotation</button>
      </form>
    </section>

    <!-- ============================================================
         QUOTE PANEL
         ============================================================ -->
    <div class="quote-shell">
      <div class="quote-card" id="quoteCard" aria-live="polite">
        <div class="motif" role="presentation"></div>
        <p class="empty-note" id="emptyNote">
          Fill in the guest and stay details, then select <b>Generate Quotation</b> — your premium, WhatsApp-ready quote will appear here.
        </p>
        <div id="quoteContent" style="display:none;">
          <div class="quote-head">
            <span class="camel" aria-hidden="true">🐫</span>
            <p class="name" id="qcName">RANN UTSAV TENT CITY</p>
            <p class="pkg" id="qcPackage">Package: 2 Nights</p>
          </div>
          <div class="quote-body">
            <div class="qsection">
              <p class="qlabel">Stay Details</p>
              <div class="qrow"><span class="k">Guest Name</span><span class="v" id="rName">—</span></div>
              <div class="qrow"><span class="k">Check-in Date</span><span class="v" id="rCheckin">—</span></div>
              <div class="qrow"><span class="k">Check-out Date</span><span class="v" id="rCheckout">—</span></div>
            </div>
            <div class="qsection">
              <p class="qlabel">Tent Details</p>
              <div id="rCategoryLines"></div>
            </div>
            <div class="price-table">
              <div class="price-row"><span>GST (18%)</span><span class="amt" id="rGST">₹0</span></div>
              <div class="price-row net"><span>Net Payable</span><span class="amt" id="rNet">₹0</span></div>
            </div>
          </div>
          <div class="quote-foot">
            Thank you for choosing <b>Rann Utsav Tent City</b>.<br>
            We look forward to welcoming you for a memorable experience.
          </div>
        </div>
      </div>

      <div class="action-row no-print" id="actionRow" style="display:none;">
        <button class="btn btn-gold" id="copyBtn" type="button">Copy for WhatsApp</button>
        <button class="btn btn-outline" id="pdfBtn" type="button">Download PDF</button>
      </div>
      <p class="status" id="statusMsg" role="status" aria-live="polite"></p>
    </div>

  </main>

  <footer class="credit">Rates and peak-date tariffs applied as per the current season rate card.</footer>

<script>
'use strict';

/* ================================================================
   CONFIGURATION — RATE CARD
   Business logic and figures below are unchanged from the source
   tool. Do not edit values here without sign-off from Reservations.
   ================================================================ */
const RATES = {
  "Super Premium Tent":      {1:10300, 2:20600, 3:30900, mattress:5500, mattressPeak:6000, flat:false, baseCapacity:2, maxMattress:20},
  "Premium Tent":            {1:9300,  2:18600, 3:27900, mattress:5500, mattressPeak:6000, flat:false, baseCapacity:2, maxMattress:20},
  "Deluxe AC Swiss Cottage": {1:8300,  2:16600, 3:24900, mattress:5500, mattressPeak:6000, flat:false, baseCapacity:2, maxMattress:20},
  "Non-AC Swiss Cottage":    {1:6300,  2:12600, 3:18900, mattress:4500, mattressPeak:5000, flat:false, baseCapacity:2, maxMattress:20},
  "Darbari Suite":           {1:70000, 2:140000,3:210000,mattress:7750, mattressPeak:7750, flat:true, capacity:4, maxMattress:20},
  "Rajwadi Suite":           {1:35000, 2:70000, 3:105000,mattress:7750, mattressPeak:7750, flat:true, capacity:2, maxMattress:20},
};
const CATEGORY_LABELS = Object.keys(RATES);

// Single place to change the extra-mattress ceiling for every category.
// (Each category's own `maxMattress` above is left in place in case a
// future rate card ever needs a per-category limit again, but today
// they all point at this one constant.)
const MAX_EXTRA_MATTRESS = 20;
CATEGORY_LABELS.forEach(c => { RATES[c].maxMattress = MAX_EXTRA_MATTRESS; });

const ADDITIONAL = { tier1:{1:2000,2:3500,3:4500}, tier2:{1:4000,2:6000,3:8000} };

const SEASON_START = "2026-11-01";
const SEASON_END   = "2027-03-07";

const CHRISTMAS = [["2026-12-18","2027-01-02"]];
const TIER1_SPECIFIC = [
  ["2026-11-08","2026-11-14"],
  ["2026-11-22","2026-11-25"],
  ["2026-11-09","2026-11-09"],
  ["2027-02-18","2027-02-21"],
  ["2027-02-06","2027-02-06"],
];
const TIER1_SEASON = [
  ["2026-12-01","2026-12-17"],
  ["2027-01-03","2027-01-31"],
];

/* ================================================================
   DOM HELPERS
   ================================================================ */
const $ = (id) => document.getElementById(id);
const qsa = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

/* ================================================================
   STATE
   ================================================================ */
let lineCounter = 0;
let lastQuote = null;

/* ================================================================
   PEAK-DATE DETECTION
   Peak/Full-Moon pricing is triggered ONLY by the check-in date
   itself — a stay that merely passes through a peak date on a later
   night (with a non-peak check-in) does not qualify. `nights` is no
   longer used here; kept as a parameter for call-site compatibility.
   ================================================================ */
function inRange(d, ranges){
  const t = new Date(d).getTime();
  return ranges.some(([s,e]) => t >= new Date(s).getTime() && t <= new Date(e).getTime());
}

function detectPeakTier(checkinStr, nights){
  if(!checkinStr) return "none";
  const iso = new Date(checkinStr).toISOString().slice(0,10);
  if(inRange(iso, CHRISTMAS)) return "tier2";
  if(inRange(iso, TIER1_SPECIFIC) || inRange(iso, TIER1_SEASON)) return "tier1";
  return "none";
}

/* ================================================================
   FORMATTERS (unchanged)
   ================================================================ */
function fmtINR(n){ n = Math.round(n); return "₹" + n.toLocaleString("en-IN"); }
// Plain "INR n,nn,nnn" form (no ₹ glyph) — used by the WhatsApp copy text
// and the PDF, where a plain-text currency label reads more reliably
// across devices/fonts than the rupee symbol.
function fmtINRPlain(n){ n = Math.round(n); return "INR " + n.toLocaleString("en-IN"); }
function fmtDate(str){
  if(!str) return "—";
  const d = new Date(str);
  return d.toLocaleDateString("en-GB", { day:"2-digit", month:"short", year:"numeric" });
}

/* ================================================================
   STATUS MESSAGE HELPER
   ================================================================ */
function setStatus(message, tone){
  const el = $("statusMsg");
  el.textContent = message || "";
  el.classList.remove("status-ok","status-warn");
  if(tone) el.classList.add(tone === "ok" ? "status-ok" : "status-warn");
}

/* ================================================================
   OPTION-LIST BUILDERS
   ================================================================ */
function categoryOptions(selected){
  return CATEGORY_LABELS.map(c=>{
    const cap = RATES[c].flat ? ` (max ${RATES[c].capacity} pax)` : "";
    return `<option value="${c}" ${c===selected?"selected":""}>${c}${cap}</option>`;
  }).join("");
}
function numberOptions(max, selected){
  let out = "";
  for(let i=0;i<=max;i++){ out += `<option value="${i}" ${i===selected?"selected":""}>${i}</option>`; }
  return out;
}
// Same as numberOptions but with a configurable lower bound — used for
// Adults, which should offer 1–4 rather than starting at 0.
function numberOptionsRange(min, max, selected){
  let out = "";
  for(let i=min;i<=max;i++){ out += `<option value="${i}" ${i===selected?"selected":""}>${i}</option>`; }
  return out;
}

/* ================================================================
   TENT CATEGORY LINES
   ================================================================ */
function addLine(category){
  const idx = lineCounter++;
  const container = $("linesContainer");
  const div = document.createElement("div");
  div.className = "tent-line";
  div.dataset.lineIndex = idx;
  div.innerHTML = `
    <div class="line-index-tag">Tent Category ${qsa('.tent-line').length + 1}</div>
    <div class="tent-line-head">
      <div class="field">
        <label for="lineCategory-${idx}">Select Tent</label>
        <select id="lineCategory-${idx}" class="line-category" data-idx="${idx}">${categoryOptions(category)}</select>
      </div>
      <div class="field">
        <label for="lineQty-${idx}">No. of Tents</label>
        <select id="lineQty-${idx}" class="line-qty" data-idx="${idx}">
          <option value="">Select</option>
          ${numberOptions(20,1).replace('<option value="0">0</option>','')}
        </select>
      </div>
      <button class="btn-remove" type="button" data-remove-idx="${idx}" aria-label="Remove this tent category">✕ Remove</button>
    </div>
    <div class="row2">
      <div class="field">
        <label for="lineSingleOcc-${idx}">Single Occupancy</label>
        <select id="lineSingleOcc-${idx}" class="line-singleocc">
          <option value="no">No</option>
          <option value="yes">Yes (75% of double rate)</option>
        </select>
      </div>
      <div class="field">
        <label for="lineMattress-${idx}">Extra Mattress (qty) <span class="mattress-max-tag label-hint"></span></label>
        <input id="lineMattress-${idx}" class="line-mattress" type="number" min="0" max="20" value="0" inputmode="numeric">
      </div>
    </div>
    <div class="tent-instances" data-line-index="${idx}"></div>
    <div class="banner warn-box line-capacity-warn" role="alert"></div>
  `;
  container.appendChild(div);

  // Wire up events for this line. Category/qty changes reshape the tent
  // instance blocks and re-check capacity; mattress/single-occupancy only
  // affect pricing, but still need a listener so live-refresh (see
  // maybeLiveUpdate) picks up the change immediately instead of waiting
  // for the next unrelated field to fire an event.
  div.querySelector(".line-category").addEventListener("change", () => onLineChange(idx));
  div.querySelector(".line-qty").addEventListener("change", () => onLineChange(idx));
  div.querySelector(".line-mattress").addEventListener("input", () => { clampMattressInput(idx); maybeLiveUpdate(); });
  div.querySelector(".line-singleocc").addEventListener("change", maybeLiveUpdate);
  div.querySelector(`[data-remove-idx="${idx}"]`).addEventListener("click", () => { removeLine(idx); maybeLiveUpdate(); });

  // Initialize mattress max/tag and capacity messaging for the new line
  // right away, rather than waiting for the user's first interaction.
  onLineChange(idx);
}

function onLineChange(idx){
  const line = document.querySelector(`.tent-line[data-line-index="${idx}"]`);
  if(!line) return;
  const qty = parseInt(line.querySelector(".line-qty").value || "0", 10);
  clampMattressInput(idx);
  renderTentInstances(idx, qty);
  checkLineCapacity(idx);
}

/* Keeps the Extra Mattress field's max (and its "max N per tent" hint)
   in sync with the selected category, and clamps any value that's now
   too high. Called on category change and on every mattress keystroke. */
function clampMattressInput(idx){
  const line = document.querySelector(`.tent-line[data-line-index="${idx}"]`);
  if(!line) return;
  const category = line.querySelector(".line-category").value;
  const rate = RATES[category];
  const mattressInput = line.querySelector(".line-mattress");
  const mattressTag = line.querySelector(".mattress-max-tag");
  mattressInput.max = rate.maxMattress;
  mattressTag.textContent = `— max ${rate.maxMattress} per tent`;
  if(parseInt(mattressInput.value || 0, 10) > rate.maxMattress) mattressInput.value = rate.maxMattress;
}

function renderTentInstances(idx, qty){
  const line = document.querySelector(`.tent-line[data-line-index="${idx}"]`);
  const holder = line.querySelector(`.tent-instances[data-line-index="${idx}"]`);
  holder.innerHTML = "";
  for(let n=1; n<=qty; n++){
    const block = document.createElement("div");
    block.className = "tent-instance";
    block.innerHTML = `
      <div class="ti-title">Tent ${n}</div>
      <div class="row3">
        <div class="field">
          <label for="tiAdults-${idx}-${n}">Adults (6–60+)</label>
          <select id="tiAdults-${idx}-${n}" class="ti-adults" aria-label="Tent ${n} adults, ages 6 and up">${numberOptionsRange(1,4,2)}</select>
        </div>
        <div class="field">
          <label for="tiChild6-${idx}-${n}">Children (6+)</label>
          <select id="tiChild6-${idx}-${n}" class="ti-child6" aria-label="Tent ${n} children aged 6 and up">${numberOptions(6,0)}</select>
        </div>
        <div class="field">
          <label for="tiChildFree-${idx}-${n}">Children (below 6)</label>
          <select id="tiChildFree-${idx}-${n}" class="ti-childfree" aria-label="Tent ${n} children below 6">${numberOptions(6,0)}</select>
        </div>
      </div>
    `;
    holder.appendChild(block);
    block.querySelector(".ti-adults").addEventListener("change", () => { checkLineCapacity(idx); maybeLiveUpdate(); });
    block.querySelector(".ti-child6").addEventListener("change", () => { checkLineCapacity(idx); maybeLiveUpdate(); });
    block.querySelector(".ti-childfree").addEventListener("change", () => { checkLineCapacity(idx); maybeLiveUpdate(); });
  }
}

function removeLine(idx){
  const line = document.querySelector(`.tent-line[data-line-index="${idx}"]`);
  if(line) line.remove();
  qsa(".tent-line").forEach((el,i)=>{
    el.querySelector(".line-index-tag").textContent = `Tent Category ${i+1}`;
  });
}

function checkLineCapacity(idx){
  const line = document.querySelector(`.tent-line[data-line-index="${idx}"]`);
  const category = line.querySelector(".line-category").value;
  const rate = RATES[category];
  const warnBox = line.querySelector(".line-capacity-warn");
  warnBox.classList.remove("show");
  warnBox.textContent = "";

  const base = rate.flat ? rate.capacity : rate.baseCapacity;
  const maxWithMattress = base + rate.maxMattress;
  const tents = line.querySelectorAll(".tent-instance");
  let overBase = false, overMax = false;
  tents.forEach(t=>{
    const a = parseInt(t.querySelector(".ti-adults").value || 0, 10);
    const c = parseInt(t.querySelector(".ti-child6").value || 0, 10);
    const total = a + c;
    if(total > base && total <= maxWithMattress) overBase = true;
    if(total > maxWithMattress) overMax = true;
  });
  if(overMax){
    warnBox.textContent = `${category} allows up to ${base} guests per tent, plus ${rate.maxMattress} extra mattress(es) (max ${maxWithMattress} total). Please split guests across another tent.`;
    warnBox.classList.add("show");
  } else if(overBase){
    warnBox.textContent = `${category} is priced for ${base} guests per tent — add an extra mattress above to cover the additional guest(s) (max ${rate.maxMattress} per tent).`;
    warnBox.classList.add("show");
  }
}

/* ================================================================
   CHECK-OUT DATE + PEAK BANNER
   ================================================================ */
function updateCheckoutAndBanner(){
  const checkin = $("checkinDate").value;
  const nights = parseInt($("nights").value, 10);
  const checkoutField = $("checkoutDate");
  const banner = $("peakBanner");
  const dateWarn = $("dateWarn");
  banner.classList.remove("show","tier2"); banner.textContent = "";
  dateWarn.classList.remove("show"); dateWarn.textContent = "";

  if(checkin){
    const d = new Date(checkin);
    d.setDate(d.getDate() + nights);
    checkoutField.value = fmtDate(d.toISOString().slice(0,10));

    if(checkin < SEASON_START || checkin > SEASON_END){
      dateWarn.textContent = "Selected date is outside the current season (1 Nov 2026 – 7 Mar 2027). Please choose a date within this range.";
      dateWarn.classList.add("show");
    } else if(d.toISOString().slice(0,10) > SEASON_END){
      dateWarn.textContent = "This stay extends beyond the season end (7 Mar 2027). Please adjust the check-in date or package length.";
      dateWarn.classList.add("show");
    }
  } else {
    checkoutField.value = "";
  }

  const override = $("peakOverride").value;
  const tier = override === "auto" ? detectPeakTier(checkin, nights) : override;

  if(tier === "tier1"){
    banner.textContent = "Peak date detected — Standard Peak (Tier 1) additional charge applies.";
    banner.classList.add("show");
  } else if(tier === "tier2"){
    banner.textContent = "Peak date detected — Christmas / High Peak (Tier 2) additional charge applies.";
    banner.classList.add("show","tier2");
  }
  return tier;
}

/* ================================================================
   QUOTATION GENERATION (pricing math unchanged)
   ================================================================ */
function generateQuote(opts){
  const silent = !!(opts && opts.silent);
  // In live-update mode we never interrupt the user: validation failures
  // simply skip the refresh (the previously generated quote stays on
  // screen) instead of popping a warning or stealing focus mid-typing.
  const fail = (msg, focusId) => {
    if(!silent){
      setStatus(msg, "warn");
      if(focusId) $(focusId).focus();
    }
    return;
  };

  const name = $("guestName").value.trim();
  const checkin = $("checkinDate").value;
  const nights = parseInt($("nights").value, 10);

  if(!name){ return fail("Please enter the guest name.", "guestName"); }
  if(!checkin){ return fail("Please select a check-in date.", "checkinDate"); }
  if(checkin < SEASON_START || checkin > SEASON_END){ return fail("Check-in date must fall within 1 Nov 2026 – 7 Mar 2027."); }

  const tier = updateCheckoutAndBanner();
  const lineEls = qsa(".tent-line");
  if(lineEls.length === 0){ return fail("Please add at least one tent category."); }

  let totalTentRate = 0, totalAdditional = 0, totalGuestsBillable = 0, totalChildFree = 0;
  const categoryLines = [];

  for(const line of lineEls){
    const category = line.querySelector(".line-category").value;
    const qty = parseInt(line.querySelector(".line-qty").value || 0, 10);
    if(qty <= 0){ return fail("Please select the number of tents for each category."); }
    const rate = RATES[category];
    const singleOcc = line.querySelector(".line-singleocc").value === "yes";
    const mattressQty = parseInt(line.querySelector(".line-mattress").value || 0, 10);

    const tentEls = line.querySelectorAll(".tent-instance");
    let lineGuests = 0, lineChildFree = 0;
    tentEls.forEach(t=>{
      const a = parseInt(t.querySelector(".ti-adults").value || 0, 10);
      const c6 = parseInt(t.querySelector(".ti-child6").value || 0, 10);
      const cf = parseInt(t.querySelector(".ti-childfree").value || 0, 10);
      lineGuests += (a + c6);
      lineChildFree += cf;
    });
    if(lineGuests <= 0){ return fail(`Please enter guest counts for ${category}.`); }

    let lineTentRate;
    if(rate.flat){
      lineTentRate = rate[nights] * qty;
    } else {
      let perPerson = rate[nights];
      if(singleOcc) perPerson = perPerson * 0.75;
      lineTentRate = perPerson * lineGuests;
    }

    // Peak surcharge (if any) stays folded into the "Tent Rate" figure —
    // only the extra-mattress cost is broken out as its own line, per
    // the requested Tent Rate / Extra Mattress split.
    let linePeakSurcharge = 0;
    if(!rate.flat && (tier === "tier1" || tier === "tier2")){
      linePeakSurcharge += ADDITIONAL[tier][nights] * lineGuests;
    }
    let lineMattressCost = 0;
    if(mattressQty > 0){
      const mRate = (tier === "tier1" || tier === "tier2") ? rate.mattressPeak : rate.mattress;
      lineMattressCost = mRate * nights * mattressQty;
    }
    const lineAdditional = linePeakSurcharge + lineMattressCost;
    const lineTentRateDisplay = lineTentRate + linePeakSurcharge;

    totalTentRate += lineTentRate;
    totalAdditional += lineAdditional;
    totalGuestsBillable += lineGuests;
    totalChildFree += lineChildFree;

    // `guests` (adults + children 6+) is what pricing is based on and
    // must not change. `displayGuests` adds the extra mattress count on
    // top purely for what's shown to the guest — mattresses add people
    // to the tent even though they're priced as a flat add-on, not a
    // per-person rate.
    // `tentRateAmount` + `mattressAmount` together equal `amount`
    // (the total charged for the category) — the split is display-only.
    categoryLines.push({
      category, qty,
      guests: lineGuests,
      displayGuests: lineGuests + mattressQty,
      mattressQty,
      tentRateAmount: lineTentRateDisplay,
      mattressAmount: lineMattressCost,
      amount: lineTentRateDisplay + lineMattressCost
    });
  }

  const subtotal = totalTentRate + totalAdditional;
  const gst = subtotal * 0.18;
  const net = subtotal + gst;

  const checkoutDate = new Date(checkin);
  checkoutDate.setDate(checkoutDate.getDate() + nights);

  lastQuote = {
    name, checkin, nights,
    checkout: checkoutDate.toISOString().slice(0,10),
    guests: totalGuestsBillable, childFree: totalChildFree,
    tentRate: totalTentRate, additional: totalAdditional, gst, net,
    categoryLines
  };

  renderQuoteCard(lastQuote);
  setStatus(silent ? "Quotation updated." : "Quotation generated.", "ok");
}

/* ================================================================
   LIVE UPDATE
   Once a quotation has been generated at least once (lastQuote is
   set), any further change anywhere in the form should refresh it
   automatically — no "Generate" click required. This is wired as a
   single delegated listener on the form (see init()), so it covers
   every current and future field, including ones inside dynamically
   added tent-category lines, without needing per-field wiring.
   ================================================================ */
function maybeLiveUpdate(){
  if(!lastQuote) return;
  generateQuote({ silent: true });
}

function renderQuoteCard(q){
  $("emptyNote").style.display = "none";
  $("quoteContent").style.display = "block";
  $("actionRow").style.display = "grid";

  $("qcPackage").textContent = `Package: ${q.nights} Night${q.nights > 1 ? "s" : ""}`;
  $("rName").textContent = q.name;
  $("rCheckin").textContent = fmtDate(q.checkin);
  $("rCheckout").textContent = fmtDate(q.checkout);

  const catHolder = $("rCategoryLines");
  catHolder.innerHTML = q.categoryLines.map(l => {
    let rows =
      `<div class="qrow"><span class="k">Tent Category</span><span class="v">${l.category}</span></div>
       <div class="qrow"><span class="k">No. of Tents</span><span class="v">${l.qty}</span></div>
       <div class="qrow"><span class="k">No. of Guests</span><span class="v">${l.displayGuests} Pax</span></div>
       <div class="qrow"><span class="k">Tent Rate</span><span class="v">${fmtINR(l.tentRateAmount)}</span></div>`;
    if(l.mattressQty > 0){
      rows += `<div class="qrow"><span class="k">Extra Mattress (${l.mattressQty})</span><span class="v">${fmtINR(l.mattressAmount)}</span></div>`;
    }
    return rows;
  }).join('<hr class="divider" style="margin:12px 0;">');

  $("rGST").textContent = fmtINR(q.gst);
  $("rNet").textContent = fmtINR(q.net);
}

/* ================================================================
   COPY FOR WHATSAPP (text format unchanged)
   ================================================================ */
function copyForWhatsApp(){
  if(!lastQuote){ setStatus("Generate a quotation first.", "warn"); return; }
  const q = lastQuote;

  // One blank line between every field. Each tent category is its own
  // block (Tent Category / No. of Tents / No. of Guests / Tent Rate /
  // Extra Mattress if any); multiple categories are shown one after
  // another, each fully labelled — no emojis or decorative symbols.
  const catBlocks = q.categoryLines.map(l => {
    const lines = [
      `Tent Category - ${l.category}`,
      `No. of Tents - ${l.qty}`,
      `No. of Guests - ${l.displayGuests} Pax`,
      `Tent Rate - ${fmtINRPlain(l.tentRateAmount)}`,
    ];
    if(l.mattressQty > 0){
      lines.push(`Extra Mattress (${l.mattressQty}) - ${fmtINRPlain(l.mattressAmount)}`);
    }
    return lines.join("\n\n");
  }).join("\n\n\n");

  const text =
`Rann Utsav Tent City

Package ${q.nights} Night${q.nights > 1 ? "s" : ""}

Check in Date - ${fmtDate(q.checkin)}

Check out Date - ${fmtDate(q.checkout)}

${catBlocks}

GST 18% - ${fmtINRPlain(q.gst)}

Net Payable - ${fmtINRPlain(q.net)}

Thank you for choosing Rann Utsav Tent City.
We look forward to welcoming you for a memorable experience.`;

  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text)
      .then(() => setStatus("Quotation copied — ready to paste into WhatsApp.", "ok"))
      .catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text){
  try{
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    if(ok){
      setStatus("Quotation copied — ready to paste into WhatsApp.", "ok");
    } else {
      throw new Error("copy failed");
    }
  } catch(err){
    setStatus("Could not copy automatically — please select and copy the text manually.", "warn");
  }
}

/* ================================================================
   PDF — direct vector download (jsPDF, no html2canvas)
   Builds the quotation as native PDF text/vector drawing commands —
   not a screenshot — so it renders identically and crisply on
   Android Chrome, Samsung Internet, iOS Safari, and desktop, at a
   fixed A4 portrait size, with no cropping and no blurry/missing
   glyphs. The file downloads immediately; no print dialog involved.
   Amounts are written as "INR" rather than the ₹ glyph inside the
   PDF only, because jsPDF's built-in fonts don't include the Rupee
   sign — the ₹ symbol is kept everywhere else (on-screen, WhatsApp
   copy).
   ================================================================ */
const PDF_COLORS = {
  maroon:   [196, 20, 95],
  maroon2:  [143, 14, 70],
  gold:     [232, 162, 59],
  goldSoft: [243, 200, 120],
  ink:      [43, 33, 28],
  inkSoft:  [90, 76, 64],
  line:     [231, 216, 194],
  white:    [255, 255, 255],
};

const fmtINRForPdf = fmtINRPlain;

function buildQuotePdf(doc, q){
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 56;
  const contentW = pageW - margin * 2;
  const bottomLimit = pageH - 60;
  let y;

  const setColor = (fn, rgb) => doc[fn](rgb[0], rgb[1], rgb[2]);

  function ensureSpace(need){
    if(y + need > bottomLimit){
      doc.addPage();
      y = 60;
    }
  }

  function divider(){
    ensureSpace(20);
    setColor("setDrawColor", PDF_COLORS.line);
    doc.setLineWidth(0.75);
    doc.line(margin, y, pageW - margin, y);
    y += 20;
  }

  function labelValueRow(label, value, bold){
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    setColor("setTextColor", PDF_COLORS.inkSoft);
    const valueLines = doc.splitTextToSize(String(value), contentW * 0.6);
    ensureSpace(16 * valueLines.length + 7);
    doc.text(label.toUpperCase(), margin, y);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(11.5);
    setColor("setTextColor", PDF_COLORS.ink);
    doc.text(valueLines, pageW - margin, y, { align: "right" });
    y += 16 * valueLines.length + 7;
  }

  // ---- Header band ----
  // Deep maroon band with the property name and package. Toll-free
  // number appears once, in the footer, to avoid repeating it. No
  // GSTIN is shown, per the requested layout.
  const headerH = 96;
  setColor("setFillColor", PDF_COLORS.maroon2);
  doc.rect(0, 0, pageW, headerH, "F");
  setColor("setFillColor", PDF_COLORS.gold);
  doc.rect(0, headerH, pageW, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  setColor("setTextColor", PDF_COLORS.white);
  doc.text("RANN UTSAV TENT CITY", pageW / 2, 46, { align: "center" });

  doc.setFont("helvetica", "italic");
  doc.setFontSize(12);
  setColor("setTextColor", PDF_COLORS.goldSoft);
  doc.text(`Package: ${q.nights} Night${q.nights > 1 ? "s" : ""}`, pageW / 2, 70, { align: "center" });

  y = headerH + 3 + 34;

  // ---- Guest & stay details ----
  labelValueRow("Guest Name", q.name, true);
  labelValueRow("Check-in Date", fmtDate(q.checkin));
  labelValueRow("Check-out Date", fmtDate(q.checkout));
  divider();

  // ---- Category lines ----
  q.categoryLines.forEach((l, i) => {
    ensureSpace(110);
    labelValueRow("Tent Category", l.category, true);
    labelValueRow("No. of Tents", String(l.qty));
    labelValueRow("No. of Guests", `${l.displayGuests} Pax`);
    labelValueRow("Tent Rate", fmtINRForPdf(l.tentRateAmount), true);
    if(l.mattressQty > 0){
      labelValueRow(`Extra Mattress (${l.mattressQty})`, fmtINRForPdf(l.mattressAmount), true);
    }
    if(i < q.categoryLines.length - 1) divider();
  });
  divider();

  // ---- Price summary ----
  ensureSpace(70);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  setColor("setTextColor", PDF_COLORS.ink);
  doc.text("GST (18%)", margin, y);
  doc.setFont("helvetica", "bold");
  doc.text(fmtINRForPdf(q.gst), pageW - margin, y, { align: "right" });
  y += 22;

  setColor("setDrawColor", PDF_COLORS.line);
  doc.setLineWidth(0.75);
  doc.line(margin, y, pageW - margin, y);
  y += 22;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  setColor("setTextColor", PDF_COLORS.maroon);
  doc.text("Net Payable", margin, y);
  doc.text(fmtINRForPdf(q.net), pageW - margin, y, { align: "right" });
  y += 40;

  // ---- Footer ----
  divider();
  ensureSpace(70);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  setColor("setTextColor", PDF_COLORS.maroon);
  doc.text("RANN UTSAV TENT CITY", pageW / 2, y, { align: "center" });
  y += 17;

  doc.setFont("helvetica", "italic");
  doc.setFontSize(10.5);
  setColor("setTextColor", PDF_COLORS.inkSoft);
  const footerLines = doc.splitTextToSize(
    "Thank you for choosing Rann Utsav Tent City. We look forward to welcoming you for a memorable experience.",
    contentW
  );
  doc.text(footerLines, pageW / 2, y, { align: "center" });
  y += 15 * footerLines.length + 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  setColor("setTextColor", PDF_COLORS.gold);
  doc.text("Toll Free: 1800 233 9008", pageW / 2, y, { align: "center" });
}

function downloadPDF(){
  if(!lastQuote){ setStatus("Generate a quotation first.", "warn"); return; }
  if(!window.jspdf || !window.jspdf.jsPDF){
    setStatus("The PDF library could not be loaded — check your internet connection and try again.", "warn");
    return;
  }
  const btn = $("pdfBtn");
  const originalLabel = btn.textContent;
  btn.disabled = true;
  btn.textContent = "Preparing PDF…";
  setStatus("Preparing your PDF…", "ok");

  window.setTimeout(() => {
    try{
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });
      buildQuotePdf(doc, lastQuote);
      const fname = "RannUtsav_Quote_" + (lastQuote.name || "Guest").trim().replace(/\s+/g, "_") + ".pdf";
      doc.save(fname);
      setStatus("PDF downloaded.", "ok");
    } catch(err){
      setStatus("Could not generate the PDF — please try again.", "warn");
    } finally {
      btn.disabled = false;
      btn.textContent = originalLabel;
    }
  }, 30);
}

/* ================================================================
   INIT — event wiring + default demo state
   ================================================================ */
function init(){
  $("addLineBtn").addEventListener("click", () => { addLine(); maybeLiveUpdate(); });
  $("copyBtn").addEventListener("click", copyForWhatsApp);
  $("pdfBtn").addEventListener("click", downloadPDF);

  $("quoteForm").addEventListener("submit", (e) => {
    e.preventDefault();
    generateQuote();
  });

  ["checkinDate","nights","peakOverride"].forEach(id=>{
    $(id).addEventListener("change", updateCheckoutAndBanner);
  });

  // Live-refresh: once a quote exists, any change anywhere in the form
  // (guest name, package, dates, tent categories/qty, guest counts,
  // mattress, single occupancy — including fields inside dynamically
  // added tent-category lines) re-runs the quote silently. Delegated
  // on the form so it needs no per-field wiring as new lines are added.
  $("quoteForm").addEventListener("input", maybeLiveUpdate);
  $("quoteForm").addEventListener("change", maybeLiveUpdate);

  // Seed the form with a representative default, matching the
  // original tool's starting state.
  const d = new Date("2026-11-15");
  $("checkinDate").value = d.toISOString().slice(0,10);
  addLine("Non-AC Swiss Cottage");
  const firstIdx = 0;
  document.querySelector(`.tent-line[data-line-index="${firstIdx}"] .line-qty`).value = "2";
  onLineChange(firstIdx);
  updateCheckoutAndBanner();
}

if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
</script>
</body>
</html>
