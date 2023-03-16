using UnityEngine;
using System.Runtime.InteropServices;
using TMPro;

public class WalletAuthenticate : MonoBehaviour
{
#if UNITY_WEBGL && !UNITY_EDITOR

    [DllImport("__Internal")]
    private static extern void authenticateWithNearWallet(string appKey, string contractName, string onSuccess, string onFailure);
       

    public void AuthenticateTest()
    {
         authenticateWithNearWallet("MFG App", "", "OnAuthenticationSuccess", "OnAuthenticationFailure");
    }

#endif

    [SerializeField] private TextMeshProUGUI txtAccountId;

    public void OnAuthenticationSuccess(string accountId)
    {
        txtAccountId.text = accountId;
    }

    public void OnAuthenticationFailure(string error)
    {
        txtAccountId.text = error;
    }
}
