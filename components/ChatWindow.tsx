"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { v4 as uuidv4 } from "uuid"

import TransactionList, { type Transaction } from "./TransactionList"
import Portfolio, { type PortfolioItem } from "./Portfolio"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
}

type TransactionType = "buy" | "sell"

interface ChatWindowProps {
  apiEndpoint?: string
  placeholder?: string
  titleText?: string
  emoji?: string
  initialMessages?: Message[]
  initialTransactions?: Transaction[]
  initialPortfolio?: PortfolioItem[]
}

const ChatWindow: React.FC<ChatWindowProps> = (props) => {
  const [messages, setMessages] = useState<Message[]>(props.initialMessages || [])
  const [input, setInput] = useState<string>("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex flex-col h-full border rounded-lg">
      <div className="flex-1 p-4 overflow-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={msg.role === "user" ? "text-right" : "text-left"}>
            <p className="inline-block p-2 rounded-lg bg-gray-200">{msg.content}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={props.placeholder || "Type a message..."}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  )
}

export default ChatWindow
