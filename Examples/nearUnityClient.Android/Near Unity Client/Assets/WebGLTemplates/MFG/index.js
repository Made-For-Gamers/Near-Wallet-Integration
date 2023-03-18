import * as nearAPI from "./near-api-js.min.js";

async function Login() {

    const { connect, WalletConnection } = nearAPI;

    const connectionConfig = {
        networkId: "testnet",
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
    };

    // connect to NEAR
    const nearConnection = await connect(connectionConfig);
}

Login();


