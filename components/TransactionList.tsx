import React from "react";

export type Transaction = {
  id: string;
  coin: string;
  price: number;
  timestamp: Date;
};

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  if (transactions.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 border rounded-lg p-4">
      <h3 className="text-lg font-medium mb-2">Transaction History</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-2">Transaction ID</th>
              <th className="text-left py-2 px-2">Coin</th>
              <th className="text-right py-2 px-2">Price</th>
              <th className="text-right py-2 px-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b">
                <td className="py-2 px-2">{tx.id}</td>
                <td className="py-2 px-2">{tx.coin}</td>
                <td className="py-2 px-2">{tx.price}</td>
                <td className="py-2 px-2">{tx.timestamp.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
