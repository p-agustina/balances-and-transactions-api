import axios from "axios";

const apiURL = "https://uh4goxppjc7stkg24d6fdma4t40wxtly.lambda-url.eu-central-1.on.aws/transactions";
const apiKey = process.env.apiKey;


export function getTransactions(from: string, to: string) {
  const query = `from=${from}&to=${to}`;

  return axios.get(apiURL + "?" + query, {
    headers: {
      'x-api-key': `${apiKey}`, 
    }
  })
  .then((response) => {
    let dataFromAPI = response.data.transactions;
    let filteredData = dataFromAPI.filter((data: object) => {
      return data.date >= from && data.status !== "CANCELLED"
    })
    return filteredData;
  })
  .catch((error) => {
    throw(error)
  });
}
