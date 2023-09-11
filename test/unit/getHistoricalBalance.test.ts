import { getHistoricalBalances } from "../../src/services/getHistoricalBalances";

describe("getHistoricalBalance", () => {
  it("should return the boilerplate object", () => {
    const res = getHistoricalBalances();
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
