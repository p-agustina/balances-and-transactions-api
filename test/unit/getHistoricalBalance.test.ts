import { getHistoricalBalances } from "../../src/services/getHistoricalBalances";

describe("getHistoricalBalance", () => {
  it("should return the boilerplate object", () => {
    const transactionsData = [
      { 
          "amount": -765, 
          "currency": "EUR", 
          "date": "2022-06-30T09:57:27.235Z", 
          "status": "BOOKED" 
      }, 
      { 
        "amount": 78, 
        "currency": "EUR", 
        "date": "2022-06-28T09:57:27.235Z", 
        "status": "BOOKED" 
    }, 
    { 
      "amount": -765, 
      "currency": "EUR", 
      "date": "2022-05-28T09:57:27.235Z", 
      "status": "BOOKED" 
  }, 
  ];

  const balanceData = { 
    "amount": 10000, 
    "currency": "EUR", 
    "date": "2022-06-30T23:59:59.577Z" 
};
 
  const sort = "desc";
  const to = "2022-05-30";

    const res = getHistoricalBalances(transactionsData, balanceData, to, sort);
    expect(res).toEqual( [ 
      { 
          "date": "05/01/2022", 
          "amount": 12345, 
          "currency": "EUR" 
      }, 
      { 
          "date": "04/01/2022", 
          "amount": 12345, 
          "currency": "EUR" 
      }, 
      { 
          "date": "03/01/2022", 
          "amount": 12345, 
          "currency": "EUR" 
      }
  ]  );
  });
});
