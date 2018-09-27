const Web3 = require('web3')
var Tx = require('ethereumjs-tx')
var $ = require('jquery')
const web3 = new Web3('https://ropsten.infura.io/v3/fa3532e0ec244f1d961e4d20aa6afcd5')

const account1 = '' 
const account2 = '' 

const privateKey1 = Buffer.from('', 'hex')
const privateKey2 = Buffer.from('', 'hex')

// Read the deployed contract - get the addresss from Etherscan
const contractAddress = '0x78f7d4f850d21258a0a6ed5a280ab6d60ef904f2'
const contractABI = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "Token de prueba de consultoresemkt" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x06fdde03" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x095ea7b3" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "1000" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x18160ddd" }, { "constant": false, "inputs": [ { "name": "_amount", "type": "uint256" } ], "name": "sellToken", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function", "signature": "0x2397e4d7" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x23b872dd" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balances", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x27e235e3" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x313ce567" }, { "constant": true, "inputs": [], "name": "version", "outputs": [ { "name": "", "type": "string", "value": "1.0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x54fd4d50" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address" } ], "name": "allowed", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x5c658165" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x70a08231" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "EMKT" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x95d89b41" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xa9059cbb" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_extraData", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xcae9ca51" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "remaining", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xdd62ed3e" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor", "signature": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "TransferEvent", "type": "event", "signature": "0xeaf1c4b3ce0f4f62a2bae7eb3e68225c75f7e6ff4422073b7437b9a78d25f170" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "tokenOwner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "ApprovalEvent", "type": "event", "signature": "0x08245b82180b1f5e514e503c113ab0197093b2cb542145037c0a31b54b1d998e" } ];

const contract = new web3.eth.Contract(contractABI, contractAddress)

const contractSubastaAddress = '0x23b1a8d90bd4a7e86ebe0f684810956ead1689a5'
const contractSubastaABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "addSubasta",
		"outputs": [
			{
				"name": "subastaID",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "balance",
				"type": "uint256"
			}
		],
		"name": "Balance",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "closeAllSubastas",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "closeSubasta",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "closeSubastaBySubastaOwner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "editSubasta",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getAllTokens",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getLastIndex",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getSubasta",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "sellToken",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "sendToken",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "subastaID",
				"type": "uint256"
			}
		],
		"name": "Subastas",
		"type": "event"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTotalTokens",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "getTotalTokensOfAccount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "subastas",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "status",
				"type": "bool"
			},
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "ownerTemporal",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
const contractSubasta = new web3.eth.Contract(contractSubastaABI, contractSubastaAddress)
var subastas = [];

console.log('subastas', contractSubasta);
var subastas = [];
var subastas_last_index = 0;
getPoolView();
function getPoolView() {
	subastas = [];
	contractSubasta.methods.getLastIndex().call((err, balance) => {}).then(function(result){
		subastas_last_index = result;
		getSubasta(0);
	})
}

function getSubasta(index) {
	if(index < subastas_last_index) {
		contractSubasta.methods.getSubasta(index).call((err, balance) => {}).then(function(result){
			subastas.push(result);
			index++;
			getSubasta(index);
		})
	} else {
		var buffer = "";
		for(var i=0; i < subastas.length; i++){ 
			var item = subastas[i]; 
			buffer+="<tr>";
			console.log(item);
			for(var j=0; j < 5; j++) {
				buffer+= "<td style='width:10%;padding:5px'>"+item[j]+"</td>"; 
			}
			buffer+= "<td style='width:10%;padding:5px'><input type='text' id='subasta_"+i+"'></td>"; 
			buffer+= '<td style="width:10%;padding:5px"><button id="subasta-btn" onclick="send('+i+')">Enter</button></td>'; 
		  	buffer += "</tr>";
		} 
		$('#table-body').html(buffer);
		var creadentials = JSON.parse(localStorage.getItem('creadentials'));
		var balance = 0;
		web3.eth.getBalance(creadentials.account,function(e,r){
			balance = r;
			console.log(web3.utils.fromWei(balance));
			document.getElementById('account').innerHTML = creadentials.account;
			document.getElementById('eth').innerHTML = "ETH:"+web3.utils.fromWei(balance);
			getBalanceSubasta(creadentials.account);
		});
	}
}

function send(i) {
	console.log('smart contract ::', contractSubasta);
	console.log($('#subasta_'+i).val());
	console.log(i)
	var creadentials = JSON.parse(localStorage.getItem('creadentials'));
	const privateKey1 = Buffer.from(creadentials.key, 'hex')
	web3.eth.getTransactionCount(creadentials.account, (err, txCount) => {

		const txObject = {
		  nonce:    web3.utils.toHex(txCount),
		  gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
		  gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
		  to: contractSubastaAddress,
		  data: contractSubasta.methods.sendToken($('#subasta_'+i).val(), i).encodeABI()
		}
	  
		const tx = new Tx(txObject)
		tx.sign(privateKey1)
	  
		const serializedTx = tx.serialize()
		const raw = '0x' + serializedTx.toString('hex')
	  
		web3.eth.sendSignedTransaction(raw, (err, txHash) => {
		  console.log('err:', err, 'txHash:', txHash)
			getPoolView();
		})
	  })
}


getBuyCoinsView();

function getBuyCoinsView() {
	let account_first = "0x61b69860C334579Fc61903766bC79e7BD584bE51";
	contract.methods.balanceOf(account_first).call((err, balance) => {}).then(function(result){
		document.getElementById('current_tokens').innerHTML = result;
		console.log('ny ::',result)
	})
}
$('#buy-tokens').click(function(){
	console.log('asdsd')
	var creadentials = JSON.parse(localStorage.getItem('creadentials'));
	const privateKey1 = Buffer.from(creadentials.key, 'hex')
	web3.eth.getTransactionCount(creadentials.account, (err, txCount) => {

		const txObject = {
		  nonce:    web3.utils.toHex(txCount),
		  gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
		  gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
		  to: contractSubastaAddress,
		  value: $('#buy-amount').val(),
		  data: contractSubasta.methods.sellToken($('#buy-amount').val()).encodeABI()
		}
	  
		const tx = new Tx(txObject)
		tx.sign(privateKey1)
	  
		const serializedTx = tx.serialize()
		const raw = '0x' + serializedTx.toString('hex')
	  
		web3.eth.sendSignedTransaction(raw, (err, txHash) => {
		  console.log('err:', err, 'txHash:', txHash)
		  web3.eth.getTransactionCount(creadentials.account, (err, txCount) => {

			const txObject = {
			  nonce:    web3.utils.toHex(txCount),
			  gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
			  gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
			  to: contractAddress,
			  data: contract.methods.transferFrom("0x61b69860C334579Fc61903766bC79e7BD584bE51",creadentials.account,$('#buy-amount').val()).encodeABI()
			}
		  
			const tx = new Tx(txObject)
			tx.sign(privateKey1)
		  
			const serializedTx = tx.serialize()
			const raw = '0x' + serializedTx.toString('hex')
		  
			web3.eth.sendSignedTransaction(raw, (err, txHash) => {
			  console.log('err:', err, 'txHash:', txHash)
				getBuyCoinsView()
			})
		  })
		})
	  })
});

window.send = send;
/*// Transfer some tokens
web3.eth.getTransactionCount(account1, (err, txCount) => {

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    to: contractAddress,
    data: contract.methods.approve(account2, 1000).encodeABI()
  }

  const tx = new Tx(txObject)
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('err:', err, 'txHash:', txHash)
    // Use this txHash to find the contract on Etherscan!
  })
})*/
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function getBalance(account) {
  let _balance;
  contract.methods.balanceOf(account).call((err, balance) => {}).then(function(result){
    determinateViewByBalance(result);
  })
  return _balance;
}

function getBalanceSubasta(account) {
	let _balance;
	contract.methods.balanceOf(account).call((err, balance) => {}).then(function(result){
	  document.getElementById('tokens').innerHTML ="EMKT:"+result;
	  console.log(result);
	})
	return _balance;
  }


$('#button-login').click(function(){
  let credentials = {
    account : $('#account').val(),
    key : $('#key').val()
  };
  localStorage.setItem('creadentials',JSON.stringify(credentials));
  getBalance(credentials.account);
})

function determinateViewByBalance(result) {
  if(result > 0) {
    window.location.href = 'subastas-pool.html'
  } else {
    window.location.href = 'buy-coins.html'
  }
}


