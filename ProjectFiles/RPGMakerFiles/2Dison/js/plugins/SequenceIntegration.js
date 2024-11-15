/*:
 * @author Khayeel
 * @plugindesc Web3 Integration for RPGMakerMV using Sequence Wallet API.
 * 
 * @param Sequence Project Key
 * @type text
 * @text Sequence Project Key
 * @default
 * 
 * @param Sequence WaaS Config Key
 * @type text
 * @text WaaS Configuration Key
 * @default
 * 
 * @param Network
 * @type select
 * @option POLYGON_AMOY
 * @option POLYGON
 * @default POLYGON
 * @text THIS-OPTION-IS-NOT-BEING-USED
 * 
 * @param ProjectID
 * @type text
 * @default
 * 
 * @help
 * I NEED AN ADULT!
*/

var { SequenceKit, createConfig } = require('@0xsequence/kit');

var result = function App(projectKey,waasKey,projectID) {
    const projectAccessKey = projectKey;
    const waasConfigKey = waasKey;
    const isDev = false; // change to your preference
    const enableConfirmationModal = true; // change to your preference
    const walletConnectProjectId = projectID;
    
    const config = createConfig('waas', {
      projectAccessKey,
      position: "center",
      defaultTheme: "dark",
      signIn: {
        projectName: "2Dison",
      },
      defaultChainId: 800002,
      chainIds: [80002],
      appName: "2Dison",
      waasConfigKey,
      google: false,
      apple: false,
      walletConnect: { 
        projectId: walletConnectProjectId 
      },
      coinbase: false,
      wagmiConfig: {
        multiInjectedProviderDiscovery: true,
      },
      isDev,
      enableConfirmationModal
    });

    return '<SequenceKit config={config}><MyPage /></SequenceKit>'
};

module.exports.App = result;

(function() {
    var params = PluginManager.parameters("SequenceIntegration");
    var seqProjectKey = params["Sequence Project Key"];
    var seqWaaSKey = params["Sequence WaaS Config Key"];
    var seqProjectID = params["ProjectID"];

    Game_Interpreter.prototype.authenticate_user = function() {
        App(seqProjectKey,seqWaaSKey,seqProjectID);
    };
})();