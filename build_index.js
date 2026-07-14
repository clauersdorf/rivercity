const fs = require('fs');
const path = require('path');

const APP_NAME = 'River City: Focus';
// ---- When your App Store page is live, paste its URL here and re-run this script ----
const APP_STORE_URL = ''; // e.g. 'https://apps.apple.com/app/idXXXXXXXXX'

const lockup = fs.readFileSync('/tmp/rc_lockup_web.png').toString('base64');

const appStoreCta = APP_STORE_URL
  ? `<a class="btn btn-primary" href="${APP_STORE_URL}">Download on the App&nbsp;Store</a>`
  : `<span class="btn btn-primary disabled">Coming to the App&nbsp;Store</span>`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${APP_NAME} — Tap in. Go dark. Lock in.</title>
<meta name="description" content="River City blocks distracting social media apps the moment you tap an NFC station. One station, one tap. Show up. Lock in.">
<meta property="og:title" content="${APP_NAME}">
<meta property="og:description" content="Tap the station. Go dark. Social media discipline for people who show up.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Barlow+Condensed:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#0a0a0a; --card:#141414; --border:#2a2a2a; --cream:#F0EDE6;
    --gold:#C9A84C; --scarlet:#B22234; --gray:#9a9690;
    --heading:'Black Ops One',cursive; --body:'Barlow Condensed',sans-serif;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  body{background:var(--bg); color:var(--cream); font-family:var(--body);
    -webkit-font-smoothing:antialiased; overflow-x:hidden;}
  .hero{min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center;
    text-align:center; padding:64px 20px 72px; position:relative;
    background:radial-gradient(ellipse 75% 28% at 50% -6%, rgba(178,34,52,0.16) 0%, rgba(178,34,52,0) 55%), var(--bg);}
  .logo{width:min(440px,80vw); height:auto; mix-blend-mode:screen; margin-bottom:8px;}
  .tagline{font-family:var(--heading); color:var(--scarlet); font-size:clamp(24px,5vw,40px);
    letter-spacing:6px; margin-top:4px;}
  .lede{font-family:var(--body); color:#d7d3cb; font-size:clamp(18px,2.6vw,23px); line-height:1.5;
    max-width:620px; margin:28px auto 0;}
  .cta{display:flex; gap:16px; flex-wrap:wrap; justify-content:center; margin-top:40px;}
  .btn{display:inline-block; font-family:var(--heading); font-size:15px; letter-spacing:2px;
    padding:18px 32px; text-decoration:none; border:1px solid transparent;}
  .btn-primary{background:var(--scarlet); color:var(--cream);}
  .btn-primary:hover{filter:brightness(1.12);}
  .btn-primary.disabled{opacity:0.7; cursor:default;}
  .btn-ghost{background:transparent; color:var(--cream); border-color:var(--border);}
  .btn-ghost:hover{border-color:var(--gold); color:var(--gold);}
  .scrollhint{position:absolute; bottom:26px; left:50%; transform:translateX(-50%);
    color:var(--gray); font-size:12px; letter-spacing:4px; text-transform:uppercase;}

  .section{max-width:900px; margin:0 auto; padding:80px 24px;}
  .section h2{font-family:var(--heading); font-size:clamp(26px,4vw,36px); text-align:center; margin-bottom:12px;}
  .accent{width:64px; height:3px; background:var(--scarlet); margin:0 auto 52px;}
  .steps{display:grid; grid-template-columns:repeat(3,1fr); gap:22px;}
  @media(max-width:680px){.steps{grid-template-columns:1fr;}}
  .step{background:var(--card); border:1px solid var(--border); padding:30px 26px;}
  .step .num{font-family:var(--heading); color:var(--scarlet); font-size:34px; margin-bottom:14px;}
  .step h3{font-family:var(--body); font-weight:700; color:var(--gold); font-size:20px;
    letter-spacing:1px; text-transform:uppercase; margin-bottom:8px;}
  .step p{color:#c7c3bb; font-size:16px; line-height:1.5;}

  .feature{max-width:720px; margin:0 auto; text-align:center;}
  .feature ul{list-style:none; margin-top:8px; text-align:left; display:inline-block;}
  .feature li{color:#d7d3cb; font-size:18px; padding:10px 0 10px 26px; position:relative;}
  .feature li::before{content:''; position:absolute; left:0; top:18px; width:9px; height:9px; background:var(--gold);}

  footer{border-top:1px solid var(--border); text-align:center; padding:40px 20px; color:var(--gray); font-size:14px;}
  footer a{color:var(--gold); text-decoration:none; margin:0 10px; letter-spacing:1px;}
  footer a:hover{color:var(--cream);}
  .foot-tag{font-family:var(--heading); color:var(--gray); letter-spacing:3px; font-size:13px; margin-top:14px;}
</style>
</head>
<body>
  <section class="hero">
    <img class="logo" src="data:image/png;base64,${lockup}" alt="River City — Lock In">
    <div class="tagline">SHOW UP. LOCK IN.</div>
    <p class="lede">River City blocks the social media apps that pull your focus — the moment you tap your unit's NFC station. Tap in, go dark. Tap out, come back up.</p>
    <div class="cta">
      ${appStoreCta}
      <a class="btn btn-ghost" href="support.html">Support</a>
      <a class="btn btn-ghost" href="privacy.html">Privacy</a>
    </div>
    <div class="scrollhint">HOW IT WORKS ↓</div>
  </section>

  <section class="section">
    <h2>One Station. One Tap.</h2>
    <div class="accent"></div>
    <div class="steps">
      <div class="step"><div class="num">1</div><h3>Tap In</h3><p>Hit GO DARK and hold your phone to the station on your way into the office.</p></div>
      <div class="step"><div class="num">2</div><h3>Go Dark</h3><p>Instagram, TikTok, Facebook, X, Snapchat, and YouTube gray out and won't open.</p></div>
      <div class="step"><div class="num">3</div><h3>Come Back Up</h3><p>Tap the same station on your way out. Your apps return. Nothing else touched.</p></div>
    </div>
  </section>

  <section class="section feature">
    <h2>Built For Discipline</h2>
    <div class="accent"></div>
    <ul>
      <li>Real blocking with Apple Screen Time — not just a reminder</li>
      <li>One NFC station handles both lock and release</li>
      <li>Calls, texts, maps, and mission apps stay untouched</li>
      <li>Set up once — grant one permission, pick your apps, done</li>
      <li>Fully on-device. No account, no tracking, no data collected</li>
    </ul>
  </section>

  <footer>
    <div>
      <a href="support.html">Support</a>
      <a href="privacy.html">Privacy Policy</a>
      <a href="mailto:clauersdorf@gmail.com">Contact</a>
    </div>
    <div class="foot-tag">RIVER CITY &middot; LOCK IN</div>
    <div style="margin-top:14px">&copy; 2026 River City. All rights reserved.</div>
  </footer>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log('wrote index.html');
