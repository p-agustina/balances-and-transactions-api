import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { getTransactions } from "./services/getTransactions";
// import { getBalance } from "./services/getBalance";
// import { getHistoricalBalances } from "./services/getHistoricalBalances";


const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/historical-balances", async (req, res) => {
  console.log("KKKKKKmmmmmmmmmmmmmmK")
  const { from, to } = req.query as { from: string; to: string};
  const fromISO = (new Date(from)).toISOString();
  const toISO = (new Date(to)).toISOString();
  // console.log(fromISO, toISO)

  try {
    const transactionsData = await getTransactions(fromISO, toISO); 
    console.log(transactionsData)
    
    // const balanceData = await getBalance();

    // const historicalBalances = getHistoricalBalances(transactionsData, balanceData, from, to)
    
    return res.json(transactionsData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
});


export default app;
