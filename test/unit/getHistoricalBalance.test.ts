import { getHistoricalBalances } from "../../src/services/getHistoricalBalances";

describe("getHistoricalBalance", () => {
  it("should return the boilerplate object", () => {
    
    const transactionsData = [
      {
        amount: -32,
        currency: "EUR",
        date: "2022-06-30T09:57:27.235Z",
        status: "BOOKED",
      },
      {
        amount: 137,
        currency: "EUR",
        date: "2022-06-29T09:57:27.235Z",
        status: "BOOKED",
      },
      {
        amount: -765,
        currency: "EUR",
        date: "2022-06-28T09:57:27.235Z",
        status: "BOOKED",
      },
    ];

    const balanceData = {
      amount: 10000,
      currency: "EUR",
      date: "2022-06-30T23:59:59.577Z",
    };

    const sort = "desc";
    const to = "2022-06-30";

    const mockResponse = [
      {
        date: "30/06/2022",
        amount: 10032,
        currency: "EUR",
      },
      {
        date: "29/06/2022",
        amount: 9895,
        currency: "EUR",
      },
      {
        date: "28/06/2022",
        amount: 10660,
        currency: "EUR",
      },
    ];

    const res = getHistoricalBalances(transactionsData, balanceData, to, sort);
    console.log("ACA ESTA EL RESSSSSSS", res)
    
    expect(res).toEqual(mockResponse);
  });
});
