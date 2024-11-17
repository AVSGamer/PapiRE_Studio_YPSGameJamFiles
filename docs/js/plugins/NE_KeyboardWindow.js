//=============================================================================
// Nebula Team Plugins - Keyboard Comaptible Window for Rpg Maker MV; 
// NE_KeyboardWindow.js    VERSION 1.00
//=============================================================================

var Imported = Imported || {};
Imported.NE_KeyboardWindow = true;

var Nebula = Nebula || {};
Nebula.KeyboardWindow = Nebula.KeyboardWindow || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 This allows to create a keyboard compatible window; 
 * @author Nebula Games
 * @help
 * CHANGELOG:
 * VERSION 1.00: Plugin Released!
 *
 * GENERAL
 * Keyboard Input Window is a plugin that creates a window that allows keyboard typing and 
 * store the result inside an in-game variable.
 * 
 * This plugin can be used for different tasks and, if you have a little script knowledge, 
 * you have a ton of chances!
 * 
 * Main Features:
 * • Fast response to keyboard typing; 
 * • You can call it using a script call; 
 * • You can set the position of the window; 
 * • You can set a placeholder text; 
 * • The width of the window is automatically calculated in relation to the max characters of the string; 
 * • You can set the max characters for the text to be typed; 
 * • The opacity of the window can be set, too. 
 * • It's possible to transform the result string all to lower case; 
 *
 * PLUGIN PARAMETER: 
 * This plugin is provided by a single plugin parameter called ​Allowed Charset. ​Inside this parameter you can set which letters, 
 * symbols and such can be typed in the window. The ones that are not inserted in the parameter string will not be typed.
 * 
 * HOW TO USE:
 * This plugin is really simple to use. You have only to type in a script box of an event this script call: 
 * 
​ * this.create_key_window(); 
 * 
​ * Using the script call this way, the default configuration will be used.
 *
 * However, It's possible to use different options:
 *
 * var options = {
 * // LETTER SOUND: The cursor sound will be played 
 * // when a key is pressed. -- DEFAULT: true; 
 * 
 * letter_sound: false, 
 * 
 * // VARIABLE: The variable that will store the string typed 
 * // inside the window. -- DEFAULT: 1; 
 * 
 * variable: 10,
 * 
 * // LOWER CASE RESULT: You can choose to lower case the whole
 * // typed string. -- DEFAULT: false; 
 * 
 * lower_case_result: true,
 * 
 * // PLACEHOLDER: The string that is shown inside the window
 * // when nothing is till typed -- DEFAULT: ''; 
 * 
 * placeholder: 'A placeholder string...',
 * 
 * // MAX CHARACTERS: The max number of characters that can
 * // be typed -- DEFAULT: 24; 
 * 
 * max_characters: 32,
 * 
 * // POSITION: You can set the [x, y] position manually;
 * // DEFAULT: centered; 
 * 
 * position: [520, 154],
 * 
 * // OPACITY: You can set the opacity of the window
 * // from 0 to 255 -- DEFAULT: 255; 
 * 
 * opacity: 255,
 * 
 * }
 * 
 * this.create_key_window(options);  

 * WARNING! All the properties are CASE SENSITIVE, meaning that they needs to be correctly written.
 * 
 * PLUGIN COMPATIBILITY:
 * This plugin should not affect directly any plugin. However, I'm not responsible for plugin errors that are 
 * not directly related from my plugin itself.
 * 
 * RPG MAKER VERSION:
 * The plugin is developed on Rpg Maker MV - Version 1.6.1 and with the related PIXI.js Version 4.5.4. 
 * It should be compatible with older version of Rpg Maker MV.
 * 
 * TERMS OF USE:
 * Credits are not necessary. but highly appreciated. Credits to Nebula Games.
 * Avoid to change plugin information, filename and parameters name for the sake of integrity of the code.
 * Edits to the code are allowed.
 * The plugin can be used for both commercial and non-commercial projects.
 * You can't redistribute this plugin as it is or incorporating portion of the code inside another plugin; 
 * Thank you very much for the support!
 *
 * @param Allowed charset
 * @desc Allowed charaset for the window;
 * @type text 
 * @default abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?_=()/&%$"!@^<>.,;0123456789+-/*\
 *
 */
 //=============================================================================

 function Window_NEKeyboard() {
 	this.initialize.apply(this, arguments);
 };

(function($) {

	var Parameters = PluginManager.parameters('NE_KeyboardWindow');
	$.allowed_charset = String(Parameters['Allowed charset']).trim() + ' ';

	//###############################################################################
	//
	// GAME INTERPRETER
	//
	//###############################################################################

	Game_Interpreter.prototype.create_key_window = function(options) {
		options = options || {}; 
		var key_window = new Window_NEKeyboard(options); 
		SceneManager._scene.addChild(key_window); 
		key_window.open(); 
		var letter_sound = options.letter_sound || true;
		var container_variable = options.variable || 1; 
		var lower_case_result = options.lower_case_result || false; 
		var self = this;
		keyEvent = function(e) {
			var kk = e.key 
			if([17].contains(e.which)) {return;}
			if([37,38,39,40].contains(e.which)) {return;}
			if([8, 46].contains(e.which)) {
				SoundManager.playCancel();
				key_window._typeText = key_window._typeText.slice(0,-1);
				return key_window.refresh();			
			}
			if(e.which === 13) {
				SoundManager.playOk(); 
				key_window.close(); 
				var result = lower_case_result ? key_window._typeText.toLowerCase() : key_window._typeText;
				$gameVariables.setValue(container_variable, result);
				var wait_close = requestAnimationFrame(function exec() {
					if(key_window.openness > 0) {return requestAnimationFrame(exec);}
					key_window.parent.removeChild(key_window); 
					return cancelAnimationFrame(wait_close); 
				})
				self._isKeyboardOpen = false;
				document.body.removeEventListener('keydown', keyEvent);
				return;
			}
			if(!$.allowed_charset.contains(kk)) {return;}
			if(key_window._typeText.length >= key_window._maxChar) {return;}
			if(letter_sound) {SoundManager.playCursor();};
			key_window._typeText += kk;
			return key_window.refresh();
		}
		document.body.addEventListener('keydown', keyEvent);
		this._isKeyboardOpen = true; 
		return this.setWaitMode('keyboard_window');
	}

	$._Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
	Game_Interpreter.prototype.updateWaitMode = function() {
	    var waiting = null;
	    if(this._waitMode === 'keyboard_window') {waiting = this._isKeyboardOpen;}
	    if(waiting) {return true;} 
	    else if(waiting === false) {
	        this._waitMode = '';
	        return false;
	    }
	    return $._Game_Interpreter_updateWaitMode.apply(this, arguments);
	};

	//###############################################################################
	//
	// WINDOW NEBULA KEYBOARD
	//
	//###############################################################################

	Window_NEKeyboard.prototype = Object.create(Window_Base.prototype); 
	Window_NEKeyboard.prototype.constructor = Window_NEKeyboard; 

	Window_NEKeyboard.prototype.initialize = function(options) {
		this._typeText = ''; 
		this._placeholder = options.placeholder || ''; 
		this._maxChar = options.max_characters || 24; 
		var x = null; 
		var y = null;
		if(options.position) {
			x = options.position[0] || null; 
			y = options.position[1] || null; 			
		}
		Window_Base.prototype.initialize.call(this, 0, 0, 1, 1); 
		this.openness = 0; 
		var dummy_string = ''; 
		this.opacity = options.opacity && !isNaN(options.opacity) ? options.opacity : 255; 
		for(var i = 0; i < this._maxChar; i++) {dummy_string += 'a';}
		this.width = this.textWidth(dummy_string); 
		this.height = this.fittingHeight(1); 
		this.createContents();
		this.x = !!x ? x : Graphics.boxWidth / 2 - this.width / 2; 
		this.y = !!y ? y : Graphics.boxHeight / 2 - this.height / 2; 
		this.refresh();
	}

	Window_NEKeyboard.prototype.refresh = function() {
		this.contents.clear(); 
		if(this._typeText !== '') {
			this.drawText(this._typeText, 0,0,this.contents.width, 'left'); 
			return; 
		}
		if(this._placeholder === '') {return;}
		this.contents.paintOpacity = 192; 
		this.drawText(this._placeholder, 0,0,this.contents.width, 'left'); 
		this.contents.paintOpacity = 255; 
		return;
	}

})(Nebula.KeyboardWindow);


