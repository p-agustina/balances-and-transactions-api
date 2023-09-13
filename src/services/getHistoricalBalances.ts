type Transaction = {
  amount: number;
  currency: string;
  date: string;
  status: string;
};

type BalanceData = {
  amount: number;
  currency: string;
  date: string;
};

export function getHistoricalBalances(transactionsData: Transaction[], balanceData: BalanceData, to: string, sort: string) {
  let historicalBalances = [];

  console.log("transactionsData: ", transactionsData);

  let sortedTransactions = transactionsData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  let currentDate = new Date("2022-06-30T23:59:59.577Z");
  console.log("Here is the currentDate: ", currentDate);
  
  let dailyBalance = balanceData.amount;
  for (const transaction of sortedTransactions) {
      
    while (currentDate >= new Date(transaction.date)) {
        
        dailyBalance -= transaction.amount;

        // const formattedDate = 

        historicalBalances.push({
            date: currentDate.toISOString().substring(0, 10),
            amount: dailyBalance,
            currency: transaction.currency,
        });
        currentDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
    }
  }
  let filteredBalances = historicalBalances.filter((balance) => {
    return new Date(balance.date) <= new Date(to);
  });
  console.log("ACA ESTA EL RESULTADO DE getHistoricalBalances", filteredBalances)
  return filteredBalances;
}
