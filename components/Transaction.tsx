interface Transaction {
  token: string;
  price: string;
  transactionId: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="p-4 bg-[#25252d] rounded w-full max-h-[50%] overflow-auto text-black">
      <h2 className="text-xl mb-2">Transaction History</h2>
      <ul className="text-l">
        {transactions.map((tx, index) => (
          <li key={index} className="mb-2">
            🏷️ <strong>{tx.token}</strong> | 💰 {tx.price} | 📄 {tx.transactionId}
          </li>
        ))}
      </ul>
    </div>
  );
}
