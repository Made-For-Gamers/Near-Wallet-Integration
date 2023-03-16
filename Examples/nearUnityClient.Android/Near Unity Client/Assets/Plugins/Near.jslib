mergeInto(LibraryManager.library, 
{

 authenticateWithNearWallet: async function (appKey, contractName, onSuccess, onFailure) 
{

     // Initialize NEAR connection
        const near = await nearAPI.connect
	({
            networkId: 'default',
            nodeUrl: 'https://rpc.testnet.near.org',
            walletUrl: 'https://wallet.testnet.near.org',
            helperUrl: 'https://helper.testnet.near.org',
            explorerUrl: 'https://explorer.testnet.near.org',
     });

        // Initialize Wallet connection
        const wallet = new nearAPI.WalletConnection(near, appKey);

     // Check if the user is signed in
        if (wallet.isSignedIn()) {
            // Get account info
            const accountId = wallet.getAccountId();
            const account = await near.account(accountId);

            // Call Unity callback with account info
            mfgInstance.SendMessage('BtnLogin', onSuccess, accountId);
        } else {
            // Redirect to NEAR Wallet for authentication
            wallet.requestSignIn({ contractId: contractName });
        }
    } catch (error) {
        console.error('NEAR authentication error:', error);
        mfgInstance.SendMessage('BtnLogin', onFailure, error.toString());
    }


}

});
