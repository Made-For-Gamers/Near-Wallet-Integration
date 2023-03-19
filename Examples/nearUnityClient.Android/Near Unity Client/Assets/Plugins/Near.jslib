mergeInto(LibraryManager.library, {

authenticateWithNearWallet: async function (appKey, contractName, onSuccess, onFailure) 
{  
    var config = {
        networkId: 'mainnet',
        nodeUrl: 'https://rpc.mainnet.near.org',
        walletUrl: 'https://wallet.near.org'
    };

    var nearConnection = await nearApi.connect(config);
    
    var walletConnection = new nearApi.WalletConnection(nearConnection, 'Made-For-Gamers');
    
    walletConnection.requestSignIn({
        contractId: "",
        methodNames: [], // optional
        //successUrl: "REPLACE_ME://.com/success", // optional redirect URL on success
        //failureUrl: "REPLACE_ME://.com/failure" // optional redirect URL on failure
    });

 
},
 

});
