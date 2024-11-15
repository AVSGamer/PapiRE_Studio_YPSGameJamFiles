/*:
 * @author Khayeel
 * @plugindesc Web3 Integration for RPGMakerMV.
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
(function() {
    var params = PluginManager.parameters("SequenceIntegration");
    var web3SecrettKey = params["Secrett Key"];
    var web3ClientID = params["ClientID"];

    Game_Interpreter.prototype.authenticate_user = function() {
        
    };
})();