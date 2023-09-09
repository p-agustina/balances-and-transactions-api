// This is just an example, it is not expected from you to keep this function
// signature or even the file name. Feel free to change whatever you like.
// import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();

import axios from "axios";

const apiURL = "https://uh4goxppjc7stkg24d6fdma4t40wxtly.lambda-url.eu-central-1.on.aws/transactions";




export function getHistoricalBalance() {
  return axios.get(apiURL, {
    headers: {
      'x-api-key': `${apiKey}`, 
    }
    // console.log("ACA ESTA LA KEYYYYYYYYYYYYYYYYYYYYY", apiKey)
  })
  .then((response) => {
    const data = response.data;
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  });
}
