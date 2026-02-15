export default async function handler(req, res) {
  const { ids, vs_currencies, include_24hr_change } = req.query;

  if (!ids || !vs_currencies) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs_currencies}&include_24hr_change=${include_24hr_change || "false"}`;

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }

    const data = await response.json();

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
    res.status(200).json(data);
  } catch (error) {
    console.error("CoinGecko API Error:", error);
    res.status(500).json({ error: "Failed to fetch cryptocurrency data" });
  }
}
