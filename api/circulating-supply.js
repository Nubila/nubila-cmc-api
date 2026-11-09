// Nubila Network (NB) — Circulating Supply API for CoinMarketCap
// Returns: Plain numerical value (no decimals, no JSON wrapping)
// Value: 533,500,000 NB (53.35% of total supply)

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 'public, max-age=300');

  const CIRCULATING_SUPPLY = 533500000;

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(String(CIRCULATING_SUPPLY));
}
