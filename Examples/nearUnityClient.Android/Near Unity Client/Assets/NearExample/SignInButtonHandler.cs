using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SignInButtonHandler : MonoBehaviour
{
    public async void RequestSignIn()
    {
        await NearPersistentManager.Instance.WalletAccount.RequestSignIn(
            "nft-frontend-simple-mint.blockhead.testnet",
            "Near Unity Client",
            new Uri("nearclientunity://testnet.near.org/success"),
            new Uri("nearclientunity://testnet.near.org/fail"),
            new Uri("nearclientios://testnet.near.org")
            );
    }
}
