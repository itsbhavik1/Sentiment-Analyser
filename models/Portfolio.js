import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  coin: { type: String, required: true },
  amount: { type: Number, required: true },
  avgPrice: { type: Number, required: true },
});

export default mongoose.models.Portfolio || mongoose.model("Portfolio", PortfolioSchema);
