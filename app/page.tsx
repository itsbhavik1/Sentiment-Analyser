// Import the types we need
// Removed duplicate Transaction import to avoid conflict
import type { PortfolioItem } from "@/components/Portfolio"

// Define the correct Transaction type
interface Transaction {
  id: string;
  type: "buy" | "sell";
  coin: string;
  price: number;
  amount: number;
  timestamp: Date;
}

// Import the components
import TransactionList from "@/components/TransactionList"
import Portfolio from "@/components/Portfolio"

// Add this function to generate sample data
function getSampleData() {
  const sampleTransactions: Transaction[] = [
    {
      id: "1234abcd",
      type: "buy",
      coin: "BTC",
      price: 65000,
      amount: 0.5,
      timestamp: new Date(Date.now() - 3600000 * 24 * 3), // 3 days ago
    },
    {
      id: "5678efgh",
      type: "buy",
      coin: "ETH",
      price: 3500,
      amount: 2.5,
      timestamp: new Date(Date.now() - 3600000 * 24 * 2), // 2 days ago
    },
  ]

  const samplePortfolio: PortfolioItem[] = [
    {
      coin: "BTC",
      amount: 0.5,
      averagePrice: 65000,
      currentPrice: 67500,
    },
    {
      coin: "ETH",
      amount: 2.5,
      averagePrice: 3500,
      currentPrice: 3750,
    },
  ]

  return { sampleTransactions, samplePortfolio }
}

// Home component to display portfolio and transactions
export default function Home() {
  const { sampleTransactions, samplePortfolio } = getSampleData()

  const totalValue = samplePortfolio.reduce((sum, item) => sum + item.amount * item.currentPrice, 0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-2xl font-bold">Crypto Trading Bot 📈</h1>
        <Portfolio
          items={samplePortfolio.map(item => ({
            ...item,
            averagePrice: parseFloat((Number(item.averagePrice) || 0).toFixed(2)),
            currentPrice: parseFloat((Number(item.currentPrice) || 0).toFixed(2))
          }))}
          totalValue={parseFloat((Number(totalValue) || 0).toFixed(2))}
        />
        <TransactionList
          transactions={sampleTransactions.map(tx => ({
            ...tx,
            price: parseFloat((Number(tx.price) || 0).toFixed(2)),
            amount: tx.amount ?? 0
          }))}
        />
      </div>
    </main>
  )
}

// Now, your code will handle unexpected price values and avoid the toFixed error! 🚀
