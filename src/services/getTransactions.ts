import axios from "axios";

const apiURL = "https://uh4goxppjc7stkg24d6fdma4t40wxtly.lambda-url.eu-central-1.on.aws/transactions";
const apiKey = process.env.apiKey;


export function getTransactions(from: string, to: string) {

  return axios.get(apiURL, {
    headers: {
      'x-api-key': `${apiKey}`, 
    }
  })
  .then((response) => {
    let dataFromAPI = response.data.transactions;
    console.log(dataFromAPI)
    let filteredData = dataFromAPI.filter((data: object) => {
      return data.date >= from && data.status !== "CANCELLED"
    })
    console.log(filteredData)
    return filteredData;
  })
  .catch((error) => {
    throw(error)
  });
}
