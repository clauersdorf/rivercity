const fs = require('fs');
const path = require('path');

// ---- EDIT THIS if you want a different public support email ----
const SUPPORT_EMAIL = 'clauersdorf@gmail.com';
const APP_NAME = 'River City: Focus';
const EFFECTIVE_DATE = 'July 14, 2026';

const emblem = fs.readFileSync('/tmp/rc_emblem_sm.png').toString('base64');

const head = (title) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} — ${APP_NAME}</title>
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
  body{background:
      radial-gradient(ellipse 80% 40% at 50% 0%, rgba(178,34,52,0.14) 0%, rgba(178,34,52,0) 60%),
      var(--bg);
    color:var(--cream); font-family:var(--body); line-height:1.5;
    min-height:100vh; padding:56px 20px 80px; -webkit-font-smoothing:antialiased;}
  .wrap{max-width:720px; margin:0 auto;}
  header{text-align:center; margin-bottom:48px;}
  header img{width:110px; height:110px; margin:0 auto 18px; display:block;}
  h1.brand{font-family:var(--heading); font-size:38px; letter-spacing:1px;}
  .kicker{font-family:var(--body); font-weight:600; color:var(--gold);
    letter-spacing:6px; font-size:13px; margin-top:8px; text-transform:uppercase;}
  .divider{width:64px; height:2px; background:rgba(201,168,76,0.4); margin:22px auto 0;}
  h2.page{font-family:var(--heading); font-size:26px; margin:0 0 6px; color:var(--cream);}
  .updated{color:var(--gray); font-size:15px; letter-spacing:1px; text-transform:uppercase; margin-bottom:32px;}
  section{background:var(--card); border:1px solid var(--border); padding:24px 26px; margin-bottom:16px;}
  h3{font-family:var(--body); font-weight:700; color:var(--gold); font-size:20px;
    letter-spacing:2px; text-transform:uppercase; margin-bottom:10px;}
  p{color:#d7d3cb; font-size:17px; margin-bottom:12px;}
  p:last-child{margin-bottom:0;}
  ul{list-style:none; margin:6px 0 0;}
  li{color:#d7d3cb; font-size:17px; padding:7px 0 7px 22px; position:relative;}
  li::before{content:''; position:absolute; left:0; top:15px; width:8px; height:8px; background:var(--scarlet);}
  a{color:var(--gold); text-decoration:none; border-bottom:1px solid rgba(201,168,76,0.4);}
  a:hover{color:var(--cream);}
  strong{color:var(--cream);}
  .btn{display:inline-block; background:var(--scarlet); color:var(--cream); font-family:var(--heading);
    font-size:16px; letter-spacing:2px; padding:16px 34px; margin-top:8px; border:none;}
  .btn:hover{filter:brightness(1.12);}
  footer{text-align:center; color:var(--gray); font-size:14px; margin-top:40px; letter-spacing:1px;}
  footer a{font-size:14px;}
</style>
</head>
<body>
<div class="wrap">
<header>
  <img src="data:image/png;base64,${emblem}" alt="River City shield">
  <h1 class="brand">RIVER CITY</h1>
  <div class="kicker">Lock In</div>
  <div class="divider"></div>
</header>`;

const foot = (otherLabel, otherHref) => `
<footer>
  &copy; 2026 River City &middot; <a href="${otherHref}">${otherLabel}</a>
</footer>
</div>
</body>
</html>`;

// ---------------- SUPPORT ----------------
const support = head('Support') + `
<h2 class="page">Support</h2>
<div class="updated">We're here to help</div>

<section>
  <h3>Get Help</h3>
  <p>Questions, bug reports, or feedback about ${APP_NAME}? Email us and we'll get back to you as soon as we can.</p>
  <p><a class="btn" href="mailto:${SUPPORT_EMAIL}?subject=River%20City%20Support">Email Support</a></p>
  <p style="margin-top:16px">Or reach us directly at <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>.</p>
</section>

<section>
  <h3>How River City Works</h3>
  <p>River City blocks distracting social media apps on your own device using Apple Screen Time. You tap an NFC station in your unit office to "go dark," and tap the same station again to "come back up." One station, one tag, toggles on each tap.</p>
  <ul>
    <li><strong>Set up once:</strong> grant Screen Time permission, pick which apps to block, and pair your station tag.</li>
    <li><strong>Go dark:</strong> tap GO DARK, then hold your phone to the station. Your selected apps are blocked instantly.</li>
    <li><strong>Come back up:</strong> tap COMMS UP and tap the station again. Your apps return.</li>
  </ul>
</section>

<section>
  <h3>Troubleshooting</h3>
  <p><strong>The station tag won't scan.</strong> Hold the top edge of your iPhone to the tag and keep it still for a second. Make sure the tag is a supported NFC tag and isn't covered by thick metal.</p>
  <p><strong>Apps aren't being blocked.</strong> Open the app, tap the gear icon, and choose "Change Blocked Apps" to confirm your selection. Make sure you allowed Screen Time access during setup.</p>
  <p><strong>I need to re-grant Screen Time.</strong> In iOS Settings &rarr; Screen Time, confirm access is enabled, then reopen River City.</p>
  <p><strong>I got a new phone or tag.</strong> Reopen the app, tap the gear icon, and use "Pair Station Tag" to pair the station again.</p>
</section>

<section>
  <h3>Privacy</h3>
  <p>River City collects no personal data and works entirely on your device. Read the full <a href="privacy.html">Privacy Policy</a>.</p>
</section>
` + foot('Privacy Policy', 'privacy.html');

// ---------------- PRIVACY ----------------
const privacy = head('Privacy Policy') + `
<h2 class="page">Privacy Policy</h2>
<div class="updated">Effective ${EFFECTIVE_DATE}</div>

<section>
  <h3>The Short Version</h3>
  <p>${APP_NAME} does not collect, store, transmit, or share any personal data. There are no accounts, no analytics, no advertising, and no third-party trackers. Everything the app does happens entirely on your device.</p>
</section>

<section>
  <h3>Information We Collect</h3>
  <p><strong>None.</strong> River City does not collect any personal information. We do not ask you to create an account, and the app does not send any data to us or to anyone else.</p>
</section>

<section>
  <h3>Information Stored On Your Device</h3>
  <p>To function, the app saves a small amount of information locally on your iPhone. This never leaves your device and is not accessible to us:</p>
  <ul>
    <li>Your list of apps to block, chosen through Apple's Screen Time system picker.</li>
    <li>Whether you are currently "locked in," so the state survives restarting the app.</li>
    <li>The identifier of the NFC station tag you paired, so the app recognizes your station.</li>
  </ul>
  <p>Deleting the app removes all of this information.</p>
</section>

<section>
  <h3>Screen Time &amp; Family Controls</h3>
  <p>River City uses Apple's Screen Time (Family Controls and Managed Settings) to block the apps you select, with your permission and for your own device only. Your app selections are handled by iOS and are stored on-device. Apple does not share this information with us, and we never see which apps you choose.</p>
</section>

<section>
  <h3>NFC</h3>
  <p>The app reads a nearby NFC tag only while you are actively using the app to go dark, come back up, or pair a station. It reads the tag's identifier to confirm it matches your station. NFC data is used on-device and is never transmitted.</p>
</section>

<section>
  <h3>Third Parties</h3>
  <p>River City includes no third-party analytics, advertising, or tracking software. Because the app makes no network requests of its own, no data is shared with any third party.</p>
</section>

<section>
  <h3>Children's Privacy</h3>
  <p>River City does not collect personal information from anyone, including children under 13.</p>
</section>

<section>
  <h3>Changes To This Policy</h3>
  <p>If this policy changes, we will update this page and revise the effective date above.</p>
</section>

<section>
  <h3>Contact</h3>
  <p>Questions about privacy? Email <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>.</p>
</section>
` + foot('Support', 'support.html');

fs.writeFileSync(path.join(__dirname, 'support.html'), support);
fs.writeFileSync(path.join(__dirname, 'privacy.html'), privacy);
console.log('wrote support.html and privacy.html');
