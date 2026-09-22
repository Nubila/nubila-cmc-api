// Landing page for Nubila CMC API
export default function handler(req, res) {
  const html = `<!DOCTYPE html>
<html>
<head>
  <title>Nubila Network — CMC Supply API</title>
  <style>
    body { font-family: -apple-system, sans-serif; max-width: 720px; margin: 40px auto; padding: 0 20px; line-height: 1.6; color: #333; }
    h1 { color: #1a73e8; }
    code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-size: 14px; }
    .endpoint { background: #f8f9fa; padding: 16px; border-radius: 8px; margin: 12px 0; border-left: 4px solid #1a73e8; }
    .endpoint a { color: #1a73e8; text-decoration: none; word-break: break-all; }
    .endpoint a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>Nubila Network (NB)</h1>
  <p>CoinMarketCap Supply Data API endpoints.</p>
  <p>Token Contract: <code>0xc2bd425a63800731e3ae42b6596bdd783299fcb1</code> (BSC)</p>

  <h2>Endpoints</h2>

  <div class="endpoint">
    <strong>Total Supply</strong><br>
    <a href="/api/total-supply">/api/total-supply</a><br>
    <small>Returns: 1,000,000,000</small>
  </div>

  <div class="endpoint">
    <strong>Circulating Supply</strong><br>
    <a href="/api/circulating-supply">/api/circulating-supply</a><br>
    <small>Returns: 338,312,500 (33.83% of total supply)</small>
  </div>

  <p style="margin-top: 40px; color: #888; font-size: 13px;">
    Maintained by Earth Labs Inc. — Nubila Network.
  </p>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
