const fs = require('fs');
const emblem = fs.readFileSync('/tmp/rc_emblem_sm.png').toString('base64');
const APP_STORE_URL = 'https://apps.apple.com/app/id6790643082';
const cta = `<a class="btn" href="${APP_STORE_URL}">Download on the App Store</a>`;
const html = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="apple-itunes-app" content="app-id=6790643082">
<title>Download River City</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Barlow+Condensed:wght@400;600;700&display=swap" rel="stylesheet">
<style>
:root{--bg:#0a0a0a;--cream:#F0EDE6;--gold:#C9A84C;--scarlet:#B22234;--gray:#9a9690;--heading:'Black Ops One',cursive;--body:'Barlow Condensed',sans-serif;}
*{margin:0;padding:0;box-sizing:border-box;}
body{background:radial-gradient(ellipse 80% 40% at 50% 0%,rgba(178,34,52,0.16) 0%,rgba(178,34,52,0) 60%),var(--bg);color:var(--cream);font-family:var(--body);min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:48px 22px;-webkit-font-smoothing:antialiased;}
img{width:150px;height:150px;border-radius:30px;border:1px solid rgba(201,168,76,0.18);box-shadow:0 24px 60px rgba(0,0,0,0.6);margin-bottom:22px;}
h1{font-family:var(--heading);font-size:34px;letter-spacing:1px;}
.kick{font-family:var(--body);font-weight:600;color:var(--gold);letter-spacing:6px;font-size:13px;margin-top:8px;text-transform:uppercase;}
.lede{font-family:var(--body);color:#d7d3cb;font-size:19px;line-height:1.5;max-width:420px;margin:26px auto 0;}
.btn{display:inline-block;background:var(--scarlet);color:var(--cream);font-family:var(--heading);font-size:16px;letter-spacing:2px;padding:18px 34px;text-decoration:none;margin-top:34px;}
.btn:hover{filter:brightness(1.12);}
.foot{margin-top:44px;}
.foot a{color:var(--gold);text-decoration:none;font-size:14px;margin:0 10px;}
</style></head><body>
<img src="data:image/png;base64,${emblem}" alt="River City">
<h1>RIVER CITY</h1><div class="kick">Lock In</div>
<p class="lede">You tapped a River City station. Get the app to silence the distractions and lock the F&amp;*#K in.</p>
${cta}
<div class="foot"><a href="index.html">Home</a><a href="support.html">Support</a><a href="privacy.html">Privacy</a></div>
</body></html>`;
fs.writeFileSync(__dirname + '/lock.html', html);
console.log('wrote lock.html', fs.statSync(__dirname + '/lock.html').size, 'bytes');
