import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import { getBalance } from "../../src/services/getBalance";

const mock = new MockAdapter(axios);

describe ("getBalance", () => {
    it("should connect to the API and retrieve data", async() => {
        const apiKey = process.env.apiKey;
        const apiURL = "https://uh4goxppjc7stkg24d6fdma4t40wxtly.lambda-url.eu-central-1.on.aws/balances";

        const mockResponse = { 
            "amount": 10000, 
            "currency": "EUR", 
            "date": "2022-06-30T23:59:59.577Z" 
        };

        mock
        .onGet(`${apiURL}`, {
            headers: {
              'x-api-key': apiKey,
            }})
        .reply(200, mockResponse);

        const res = await getBalance();

        expect(res).toEqual(mockResponse);
    })
})