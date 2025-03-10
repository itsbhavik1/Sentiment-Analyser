import React, { useEffect, useState } from "react";


interface PortfolioItem {
  coin: string;
  amount: number;
  avgPrice: number;
  currentPrice: number;
}

interface PortfolioProps {
  portfolio: PortfolioItem[];
  portfolioValue: number;
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolio, portfolioValue }) => {
    
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6 text-white">
      <h2 className="text-xl font-semibold mb-3">Portfolio</h2>
      <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="p-3">Coin</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Avg Price</th>
            <th className="p-3">Current Price</th>
          </tr>
        </thead>
        <tbody>
          {portfolio?.length > 0 ? (
            portfolio.map((item) => (
              <tr key={item.coin} className="text-center border-b border-gray-600">
                <td className="p-3">{item.coin}</td>
                <td className="p-3">{item.amount}</td>
                <td className="p-3">${item.avgPrice.toFixed(2)}</td>
                <td className="p-3">${(item.currentPrice || 0).toFixed(2)}</td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="p-3 text-center text-gray-400">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="mt-3 text-right text-lg font-semibold">
        Total Value: <span className="text-green-400">${(Number(portfolioValue) || 0).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Portfolio;
