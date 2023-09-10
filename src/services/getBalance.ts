import axios from "axios";

const apiURL = "https://uh4goxppjc7stkg24d6fdma4t40wxtly.lambda-url.eu-central-1.on.aws/balances";



export function getBalance() {
  return axios.get(apiURL, {
    headers: {
      'x-api-key': `${apiKey}`, 
    }
  })
  .then((response) => {
    const data = response.data;
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  });
}