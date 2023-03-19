using UnityEngine;
using System.Runtime.InteropServices;
using TMPro;
using System;
using System.Web;

public class WalletAuthenticate : MonoBehaviour
{
#if UNITY_WEBGL && !UNITY_EDITOR

    [DllImport("__Internal")]
    private static extern void authenticateWithNearWallet(string appKey, string contractName, string onSuccess, string onFailure);
 
    public void AuthenticateTest()
    {
         authenticateWithNearWallet("MFG App", "test", "OnAuthenticationSuccess", "OnAuthenticationFailure");
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

    void Start()
    {
        string currentUrl = Application.absoluteURL;
        var uri = new Uri(currentUrl);
        var queryParams = HttpUtility.ParseQueryString(uri.Query);

        if(queryParams["account_id"] != null && queryParams["all_keys"] != null)
        {
            var accountId = queryParams["account_id"];
            var allKeys =queryParams["all_keys"];

            txtAccountId.text = accountId;
        } 
     
    }
 
 
}
