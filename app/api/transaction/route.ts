import { NextResponse } from "next/server";
import { connectToDatabase }from "@/lib/mongodb";
import Transaction from "@/models/Transaction";

// Define TypeScript interface for Transaction Data
interface TransactionType {
  type: string;
  coin: string;
  amount: number;
  price: number;
  date: Date;
}

export async function GET() {
  try {
    await connectToDatabase();

    const transactions: TransactionType[] = await Transaction.find({});
    
    return NextResponse.json({ transactions }, { status: 200 }); // ✅ Fixed "transactions" key
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
