import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import { getTransactions } from "../../src/services/getTransactions";


const mock = new MockAdapter(axios);

describe ("getTransactions", () => {
    it("should connect to the API, retrieve data, and return filtered data", async() => {
        //ARRANGE
        const from = "2022-06-28";
        const to = "2022-06-30";
        const apiKey = process.env.apiKey;
        const apiURL = "https://uh4goxppjc7stkg24d6fdma4t40wxtly.lambda-url.eu-central-1.on.aws/transactions";

        const mockResponse = {
            transactions: [
                { 
                    "amount": -765, 
                    "currency": "EUR", 
                    "date": "2022-02-07T09:57:27.235Z", 
                    "status": "BOOKED" 
                }, 
                { 
                    "amount": -911, 
                    "currency": "EUR", 
                    "date": "2022-01-03T22:00:09.002Z", 
                    "status": "PROCESSED" 
                },
                { 
                    "amount": -765, 
                    "currency": "EUR", 
                    "date": "2022-06-28T09:57:27.235Z", 
                    "status": "BOOKED" 
                },
            ]
        }

        mock
        .onGet(`${apiURL}`, {
            headers: {
              'x-api-key': apiKey,
            }})
        .reply(200, mockResponse);
        
        const res = await getTransactions(from, to);

        const expectedFilteredTransactions = [
            { 
                "amount": -765, 
                "currency": "EUR", 
                "date": "2022-06-28T09:57:27.235Z", 
                "status": "BOOKED" 
            }, 
        ]

        expect(res).toEqual(expectedFilteredTransactions);
    });
});