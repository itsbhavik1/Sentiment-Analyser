// TransactionHistory.tsx
import React from "react";

interface Transaction {
  id: number;
  type: string;
  coin: string;
  amount: number;
  price: number;
  date: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white">
      <h2 className="text-xl font-semibold mb-3">Transaction History</h2>
      <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="p-3">Type</th>
            <th className="p-3">Coin</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Price</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.length > 0 ? (
            transactions.map((tx) => (
              <tr key={tx.id} className="text-center border-b border-gray-600">
                <td className={`p-3 ${tx.type === 'BUY' ? 'text-green-400' : 'text-red-400'}`}>{tx.type}</td>
                <td className="p-3">{tx.coin}</td>
                <td className="p-3">{tx.amount}</td>
                <td className="p-3">${tx.price.toFixed(2)}</td>
                <td className="p-3">{tx.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="p-3 text-center text-gray-400">No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
