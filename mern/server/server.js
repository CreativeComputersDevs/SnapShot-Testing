// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import records from "./routes/record.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5050;
const URI = process.env.ATLAS_URI;

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB with Mongoose
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Mongoose connected to MongoDB"))
  .catch((err) => console.error("❌ Mongoose connection error:", err));

// Routes
app.get("/", (req, res) => res.send("API is running..."));
app.use("/record", records);
app.use("/api/cart", cartRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
