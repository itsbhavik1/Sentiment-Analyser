import React, { useEffect, useState } from "react";
import axios from "axios";
import Portfolio from "../components/Portfolio";
import TransactionHistory from "../components/TransactionHistory";





const CryptoTradingBot: React.FC = () => {
  const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
  const [portfolio, setPortfolio] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [portfolioValue, setTotalValue] = useState<number>(0);

    useEffect(() => {
    async function fetchPortfolio() {
      try {
      const res = await fetch("/api/portfolio");
      const data = await res.json();
      setPortfolio(data.portfolio);
      setTotalValue(data.portfolioValue);
      } catch (error) {
      console.error("Error fetching portfolio:", error);
      }
    }
  
    fetchPortfolio();
    }, []);
    useEffect(() => {
      async function fetchTransactions() {
        try {
          setLoading(true); // Show loading state
          setError(null); // Clear any previous errors
    
          const res = await fetch("/api/transaction");
    
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
    
          const text = await res.text();
          if (!text) {
            throw new Error("Empty response from API");
          }
    
          const data = JSON.parse(text);
          if (data.success && data.transactions) {
            setTransactions(data.transactions);
          } else {
            throw new Error(data.error || "Failed to load transactions");
          }
        } catch (err: any) {
          setError(err.message);
          console.error("Error fetching transactions:", err);
        } finally {
          setLoading(false); // Hide loading state
        }
      }
    
      fetchTransactions();
    }, []);
    
  


  


  return (
    <div className="p-6 w-[90%] mx-auto bg-gray-900 shadow-lg rounded-lg text-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Crypto Trading Bot 📈</h1>
      <Portfolio portfolio={portfolio} portfolioValue={portfolioValue} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default CryptoTradingBot;
