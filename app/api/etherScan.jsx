var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';

const ETHERSCAN_URL = 'https://api.etherscan.io';
const TLV_ADDRESS = "0x795a9bFa0B30b92eFE663cBfbEC1656b6378748E";
var ERC20ABI = [{ "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }, { "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }];


module.exports = {
  getVoteResult: function (logoAddress) {
    //https://api.etherscan.io/api?module=proxy&action=eth_call&to=0x795a9bFa0B30b92eFE663cBfbEC1656b6378748E&data=0x70a08231000000000000000000000000f010A1CF53BEe1b1eCa44F3FB6e36f1ac633Ad19&tag=latest&apikey=YourApiKeyToken
    var requestUrl = ETHERSCAN_URL + "/api?module=proxy&action=eth_call&to=" + TLV_ADDRESS + "&data=0x70a08231000000000000000000000000" + logoAddress.replace('0x', '') + "&tag=latest&apikey=YourApiKeyToken";
    console.log(requestUrl);
    return axios.get(requestUrl).then(function (res) {
      console.log(res);
      return parseInt(res.data.result, 16);
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
