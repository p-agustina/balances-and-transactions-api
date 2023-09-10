import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { getTransactions } from "./services/getTransactions";
import { getBalance } from "./services/getBalance";
import { getHistoricalBalances } from "./services/getHistoricalBalances";


const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/historical-balances", async (req, res) => {
  console.log("LLLLLLLLLLLLL")

  const currentDate = '2022-06-30T23:59:59.577Z'

  const { from, to } = req.query as { from: string; to: string};

  const fromISO = (new Date(from)).toISOString();
  const toISO = (new Date(to)).toISOString();

  try {
    const transactionsData = await getTransactions(fromISO, toISO); 
    // console.log(transactionsData)
    
    const balanceData = await getBalance();
    // console.log(balanceData)

    const historicalBalances = getHistoricalBalances(transactionsData, balanceData, toISO)
    
    return res.json(historicalBalances);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
});


export default app;
