// Nubila Network (NB) — Circulating Supply API for CoinMarketCap
// Returns: Plain numerical value (no decimals, no JSON wrapping)
// Value: 338,312,500 NB (33.83% of total supply)

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 'public, max-age=300');

  const CIRCULATING_SUPPLY = 338312500;

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(String(CIRCULATING_SUPPLY));
}
