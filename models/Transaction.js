
import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  type: { type: String, enum: ["BUY", "SELL"], required: true },
  coin: { type: String, required: true },
  amount: { type: Number, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
