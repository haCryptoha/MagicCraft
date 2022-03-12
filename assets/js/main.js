var accnt = 0;
var MCRTbalancep = 0;

var stakedbalance = 0, stakeTotalBalance = 0; //added now


var tokenContract, tokenAddress; //added now

var stakingContract, stakingContractAddress;  //added now

let web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/7d9f3cd6101d4d8bb6410e50dd37b3cd");
console.log("current provider:", web3);

var chainRequired = '0x61';

async function start() {
    try {
        // check if the chain to connect to is installed
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
                chainId: chainRequired
            }], // chainId must be in hexadecimal numbers
        });
    } catch (error) {
        // This error code indicates that the chain has not been added to MetaMask
        // if it is not, then install it into the user MetaMask
        if (error.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: chainRequired,
                        rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
                    }, ],
                });
            } catch (addError) {
                console.error(addError);
            }
        }
        console.error(error);
    }

    if (window.ethereum.isConnected()) {
        ethereum
        .request({ method: 'eth_requestAccounts' })
        // .then(handleAccountsChanged)
        .catch((err) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            console.log('Please connect to MetaMask.');
          } else {
            console.error(err);
          }
        });
    }
    getAccounts(function(result) {
        console.log("wallet address:", result[0]);
        accnt = result[0];

        var res1 = accnt.substring(0, 6);
        var res2 = accnt.substring(29, 32);
        accnt1 = res1 + '' + '....' + res2;

        $('#conn').text(accnt1);
    });
}

start();

function getAccounts(callback) {
    web3.eth.getAccounts((error, result) => {
        if (error) {
            console.log(error);
        } else {
            callback(result);
        }
    });
}

getAccounts(function(result) {
    console.log("wallet address:", result[0]);
    accnt = result[0];

    var res1 = accnt.substring(0, 6);
    var res2 = accnt.substring(29, 32);
    accnt1 = res1 + '' + '....' + res2;

    $('#conn').text(accnt1);
});
window.ethereum.on('accountsChanged', function(accounts) {
    // Time to reload your interface with accounts[0]!
    start();
})
window.ethereum.on('chainChanged', (_chainId) => window.location.reload());

// added now
$.getJSON("assets/contracts/MCRTToken.json", function(json) {
    tokenAddress = json.contract;
    console.log("token address:", tokenAddress);
    tokenContract = new web3.eth.Contract(json.abi, tokenAddress); //web3.eth.contract(ABI).at(tokenAddress1);
    console.log(tokenContract);
});


//added now
$.getJSON("assets/contracts/MCRTStake.json", function(json) {
    stakingContractAddress= json.contract;
    console.log("staking address:", stakingContractAddress);
    stakingContract = new web3.eth.Contract(json.abi, stakingContractAddress);
    console.log(stakingContract);
});
