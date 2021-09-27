const baseUrl = "https://api.coinranking.com/v2/coins";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiKey = "coinranking14378675bb7d51f3f806e64d4dde51dfeda2dbc323d33e13";

fetch(`${proxyUrl}${baseUrl}`, {
  method: "GET",
  headers: {
    "Content-Type": 'application/json',
    "x-access-token": `${apiKey}`,
    "Access-Control-Allow-Origin": '*'
  }
}).then((response) => {
  if(response.ok) {
    response.json().then((json) => {
      console.log(json)

      let coinsData = json.data.coins

      if (coinsData.length >0 ) {
        var cryptoCoins = ""
      }

      coinsData.forEach((coins) => {
        cryptoCoins += "<tr>";
        cryptoCoins += `<td> ${coin.uuid} </td>`;
      })
    })
  }
}).catch((error) => {
  console.log(error);
});

