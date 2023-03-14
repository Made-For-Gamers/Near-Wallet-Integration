using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Post_ViewAccount 
{
    public string jsonrpc = "2.0";
    public string id = "mfg.testnet";
    public string method = "query";
    public Param @params = new Param();



    public class Param
    {
        public string request_type = "view_account";
        public string finality = "final";
        public string account_id = "mfg.testnet";
    }
}
