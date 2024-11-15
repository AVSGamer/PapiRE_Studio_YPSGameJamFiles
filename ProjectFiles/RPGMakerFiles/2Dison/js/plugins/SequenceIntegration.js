/*:
 * @author Khayeel
 * @plugindesc Web3 Integration for RPGMakerMV using Sequence Wallet API.
 * 
 * @param Secret Key
 * @type text
 * @text Thirdweb Secret Key
 * @default
 * 
 * @param ClientID
 * @type text
 * @text Thirdweb Client ID
 * @default
 * 
 * @help
 * I NEED AN ADULT!
*/
import { createThirdwebClient } from "thirdweb";
 
(function() {
    var params = PluginManager.parameters("SequenceIntegration");
    var web3SecrettKey = params["Secrett Key"];
    var web3ClientID = params["ClientID"];

    Game_Interpreter.prototype.authenticate_user = function() {
        const client = createThirdwebClient({
          clientId: web3ClientID,
        });
    };
})();