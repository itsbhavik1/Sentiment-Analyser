import { NextResponse } from "next/server"

// Add this function to generate transaction responses
function generateTransactionResponse(message: string): string | null {
  const match = message.match(/buy(?:ing)?\s+([A-Za-z]+)\s+(?:at|for)\s+\$?(\d+(?:\.\d+)?)/i)

  if (match) {
    const [_, coin, priceStr] = match
    const price = Number.parseFloat(priceStr)
    const transactionId = Math.random().toString(36).substring(2, 10)

    return `Successfully bought ${coin.toUpperCase()} at $${price}.\nTransaction ID: ${transactionId}\nYour portfolio has been updated.`
  }

  return null
}

// Modify the POST function to check for transaction messages
export async function POST(req: Request) {
  const { message } = await req.json()

  // Check if it's a transaction message
  const transactionResponse = generateTransactionResponse(message)
  if (transactionResponse) {
    return NextResponse.json({
      response: transactionResponse,
    })
  }

  // Your existing code for sentiment analysis or other responses
  // ...
}

