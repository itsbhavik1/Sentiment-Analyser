import axios from "axios";

export async function getCryptoPrice(coin) {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
    );
    return res.data[coin].usd;
  } catch (error) {
    console.error("Error fetching crypto price:", error);
    return null;
  }
}
