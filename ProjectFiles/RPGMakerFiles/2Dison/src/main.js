import './Core'



(function() {
    var params = PluginManager.parameters("SequenceIntegration");
    var web3SecrettKey = params["Secrett Key"];
    var web3ClientID = params["ClientID"];

    Game_Interpreter.prototype.authenticate_user = function() {
        
    };
})();

/* export default function () {
    return {
      async bundle (options) {
        try {
            // Options from `FeniXWizard` will be available here
           /**
            * target - The target directory, where the plugin files are contained
            * destination - The destination directory where the plugin will be written too
            * filename - The filename of the plugin
            * and more......
            *
            
        } catch (error) {
          throw error
        }
      }
    }
  }
  */