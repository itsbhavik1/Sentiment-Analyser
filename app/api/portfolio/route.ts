import { connectToDatabase } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";
import { getCryptoPrice } from "@/lib/cryptoApi";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();

  const portfolio = await Portfolio.find();

  // Fetch live prices and calculate total value
  const updatedPortfolio = await Promise.all(
    portfolio.map(async (item) => ({
      ...item.toObject(),
      currentPrice: await getCryptoPrice(item.coin),
    }))
  );

  const portfolioValue = updatedPortfolio.reduce(
    (acc, item) => acc + item.amount * item.currentPrice,
    0
  );

  return NextResponse.json({ portfolio: updatedPortfolio, portfolioValue });
}
