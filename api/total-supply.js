// Nubila Network (NB) — Total Supply API for CoinMarketCap
// Returns: Plain numerical value (no decimals, no JSON wrapping)
// Value: 1,000,000,000 NB (fixed total supply)

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 'public, max-age=300');

  const TOTAL_SUPPLY = 1000000000;

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(String(TOTAL_SUPPLY));
}
