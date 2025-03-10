import React from "react";

export type PortfolioItem = {
  coin: string;
  amount: number;
  averagePrice: number;
  currentPrice: number;
};

interface PortfolioProps {
  items: PortfolioItem[];
  totalValue: number;
}

const Portfolio: React.FC<PortfolioProps> = ({ items, totalValue }) => {
  return (
    <div className="rounded-lg border p-4 mb-4 bg-background">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Portfolio</h2>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Total Value</p>
          <p className="text-xl font-bold">${totalValue.toFixed(2)}</p>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="text-muted-foreground">No assets yet</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Coin</th>
                <th className="text-right py-2 px-2">Amount</th>
                <th className="text-right py-2 px-2">Avg Price</th>
                <th className="text-right py-2 px-2">Current Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-2">{item.coin}</td>
                  <td className="py-2 px-2 text-right">{item.amount}</td>
                  <td className="py-2 px-2 text-right">${item.averagePrice.toFixed(2)}</td>
                  <td className="py-2 px-2 text-right">${item.currentPrice.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
