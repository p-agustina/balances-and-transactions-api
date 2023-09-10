export function getHistoricalBalances(transactionsData: Array<string>, balanceData: Array<string>, to: string) {
    // return data.date >= from && data.date <= to && data.status !== "CANCELLED"
    const currentDate = '2022-06-30T23:59:59.577Z'

    let historicalBalances = transactionsData
    .sort((a, b) => new Date(b.date) - new Date(a.date));
    // .map(transaction => {
    //     console.log(transaction)
    //     transaction.amount
    // })

    return historicalBalances
  }
  

//   { 
//     "date": "05/01/2022", 
//     "amount": 12345, 
//     "currency": "EUR" 
// }, 