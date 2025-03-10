"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Portfolio from "@/components/Portfolio";
import TransactionHistory from "@/components/TransactionHistory";
import {ChatWindow} from "@/components/ChatWindow";
import TransactionList from "@/components/Transaction";
import CryptoTradingBot from "@/components/CryptoTradingBot";

interface Transaction {
  token: string;
  price: string;
  transactionId: string;
}


export default function Page() {

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto Trading Dashboard 🚀</h1>
      <ChatWindow
        endpoint="api/hello"
        emoji="🤖"
        titleText="BlockBuddy"
        placeholder="I'm your friendly Aptos agent! Ask me anything..."
      />
	  <CryptoTradingBot />
     
    </div>
  );
}