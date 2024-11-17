import './Core'

import { createThirdwebClient } from "thirdweb";
import { rawParameters } from './Core';

var cID = rawParameters["ClientID"];

Game_Interpreter.prototype.authenticate_user = async function() {
    const client = createThirdwebClient({ clientId: cID });
    $gameMessage.add('This message is generated through Javascript Code.\nInitiated by a custom script call.\nProject ClientID: '+client.clientId);
    Game_Interpreter.prototype.setWaitMode('message');
};

Game_Interpreter.prototype.parseG2Input = async function(g2input) {
    function sha256(str) {
        const buffer = new TextEncoder().encode(str);
        return crypto.subtle.digest("SHA-256", buffer).then(hash => { return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join(''); }
    )};
    sha256(g2input).then(hash => { 
        // Convert the hex string to an integer
         const hashInt = parseInt(hash, 16); 
         // Scale the result to be between 1 and 100
         const score = (hashInt % 100) + 1;
         $gameVariables.setValue(20,score);
        });
};