mergeInto(LibraryManager.library, {

AuthenticateWithNearWallet: async function (appKey, contractName) 
{  
    var config = {
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org'
    };

    var nearConnection = await nearApi.connect(config);
    
    var walletConnection = new nearApi.WalletConnection(nearConnection, UTF8ToString(appKey));
    
    walletConnection.requestSignIn({
        contractId: "",
        methodNames: [], // optional
        //successUrl: "REPLACE_ME://.com/success", // optional redirect URL on success
        //failureUrl: "REPLACE_ME://.com/failure" // optional redirect URL on failure
    }); 
},

});

