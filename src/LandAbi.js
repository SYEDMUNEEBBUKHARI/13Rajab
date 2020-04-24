import web3 from "./web3";
const address = "0x8a3a5084398E5EFeb51949615BCc95646F05da97";
const abi = [{ "constant": true, "inputs": [], "name": "viewAssets", "outputs": [{ "name": "", "type": "bytes32[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "contractCreator", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "Landid", "type": "bytes32" }, { "name": "buyer", "type": "address" }], "name": "makeApproved", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "longitude", "type": "string" }, { "name": "latitude", "type": "string" }, { "name": "city", "type": "string" }, { "name": "country", "type": "string" }], "name": "LandRegistration", "outputs": [{ "name": "", "type": "bytes32" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "bytes32" }], "name": "requestToLandOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "property", "type": "bytes32" }], "name": "makeSaleable", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "enterid", "type": "bytes32" }], "name": "landInfoOwner", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "bool" }, { "name": "res", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "bytes32" }], "name": "Landinfo", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "Landid", "type": "bytes32" }], "name": "BuyLand", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }];


export default new web3.eth.Contract(abi, address);