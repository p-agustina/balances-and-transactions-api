import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { getTransactions } from "./services/getTransactions";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/historical-balances/query", async (req, res) => {
  const { from, to, sort } = req.query as { from: string; to: string; sort: string };

  try {
    const transactions = await getTransactions(from, to); 
    return res.json(transactions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
});


export default app;
