import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { getHistoricalBalance } from "./services/getHistoricalBalances";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/historical-balances", async (req, res) => {
  try {
    const historicalBalance = await getHistoricalBalance(); 
    return res.json(historicalBalance);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
});


export default app;
