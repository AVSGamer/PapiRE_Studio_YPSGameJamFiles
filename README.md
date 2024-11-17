# 2Dison Project

## Project Name
2Dison

## Team Name
PapiRE Studio

## Team Members (Discord)
- PapiRE (papi_re_ldm)
- ShylenKnight (shylenknigh)

## Description
A 2D Online Event Hosting Game Platform where Event Organizers can create or host Rooms that attendees from home or anywhere with an internet connection and the app can gather to socialize, play mini-games to compete in the leaderboards for possible rewards, and watch the event's YouTube Livestream. All within 2Dison. Any event organizer can create or host a room anytime as long as the server is up for connection. It doesn't matter if someone else is hosting a room as well, as the events are hosted in separate "Rooms".

## Introduction
As our team's first-ever participation in a Game Development hackathon lasting about two weeks, we wanted to create a game that is as functional, engaging, or useful for the community as possible. The current title of our proposal project is 2Dison. It is supposedly a 2D version or imitation attempt of the popular 3D version that is a Hit Social Gaming Event Platform called Edison[^1].

## Project Objectives
Using our current knowledge of tools that we are already somewhat familiar with, we aim to:
- Create a Lightweight Event Hosting Multiplayer Game where attendees can play Mini-Games for fun or rewards through a Leaderboards feature.
- Allow attendees to watch a YouTube Livestream of the event while chatting with other players in the game.
- Expand our knowledge into blockchain technology development.

## Technical Specifications
The Game Engine we used is **RPG Maker MV**[^2] along with some community-made open-source plugins and one premium plugin that our core developer previously purchased for future projects like this one.

### RPG Maker MV Tech Stack:
- **HTML5**: The game's interface is built using HTML5, which allows it to run in web browsers without the need for additional plugins.
- **JavaScript**: The core scripting language for RPG Maker MV, used to control game logic, events, and interactions.
- **WebGL**: Used for rendering graphics, enabling smooth animations and visual effects.
- **Web Audio API**: Handles sound and music playback within the game.
- **SQLite**: The database management system used to store game data such as maps, characters, items, and events.
- **Node.js (NW.js)**: Used for packaging the game for distribution on various platforms.

### External RPG Maker MV Plugins Used:
- **KageDesu's ALPHA NET Z**[^3]
  - Responsible for multiplayer capability:
    - In-game chatting
    - Scenes responsible for multiplayer settings
    - Server connection (Provided)
  - Free version limitations:
    - Allows only 2 players in one room at a time.
  - Full version benefits:
    - Allows any number of players in a room at any time.
    - Instructions on how to set up your own server.

- **Nebula Keyboard (InputBox)**[^4]
  - Enables text input in-game and stores value in a variable.
  - Usage:
    - Save the YouTube Livestream URL provided by the Room Host.
  - Deprecation Note:
    - Could be deprecated as the game engine has added the ability to input text in-game, which could be used in the same manner.

- **PKD_DevOptions** (bundled with KageDesu's Plugin)
  - Plugin for aiding in development:
    - Responsible for some labels showing above characters or objects in-game, specifically above "event" objects.

- **Yanfly Plugins**[^5]
  - **YEP_CoreEngine**:
    - Modifications to the default core game engine.
  - **YEP_MainMenuManager**:
    - Allows further customization of the in-game menu.
  - **YEP_MessageCore**:
    - Allows further customization of the in-game messaging function.

- **YTPlayer by biud436**[^6]
  - YouTube Player in-game via complete URL.

## Other Notes:
- Updated default Game Engine's core components to the latest versions: Pixi.js (Corescript) and NW.js (Node-Webkit).
- In our attempt to integrate blockchain technology into the game, we came across and used the [Fenix Engine MV Guide][^7] method of developing plugins for RPG Maker MV via Rollup.js.
- Original works include the two Mini-Games, Leaderboards functionality, and the main concept of the entire project, which is based on Edison's but in a lighter package for lower-end machine users.

## Project Use Case
You have a Public or Private event which you may want to stream on YouTube or not. Whichever is the case, you can still utilize 2Dison to host an Event Room. After the event, you can take note of the Leaderboard's results to know who would win prizes if there are any, and also use the game as an online chatroom for the event.

## Proposal for Blockchain Integration
We know it is possible but at the conclusion of this hackathon we just couldn't achieve it. Give enough time and effort I am sure we can integrate blockchain with things like SBT NFTs that proves a person was in the 2Dison Event of the Actual Event and have the option to enable rewards which would be automatically distributed at the end of the event or as confirmed by the event host. I will leave it up to investors to think of how they would want to monetize this game if they want to but right now this is already usable for free on browsers. We could also give the host an option to select a different map or different combination of mini-games once we have developed more of those.

### Roadmap
1 - Either collaborate with or recreate what FeniXEngine Developer have made to finally be able to develop the Web3 Integration Plugin for RPGMakerMV.
-- This is because at the moment of writing his work is still in development with some experimental features which doesn't have an easy TURN OFF switch. One problem I would like to resolve is how Rollup.js should be able to work with .json files as needed for creating the Web3 Integration Plugin. His work is crucial in this project because by default the typical method of importing libraries into Plugins in RPGMakerMV breaks compatibility with Browser Version Deployment. e.g. require vs import

2 - Once Blockchain Integration is succesful we can then modify the current state of the game to incorporate blockchain features.

3 - Add more mini-games and maps.

## Current Issues
1 - Teleporting bug with movement after using the follow other player feature.
2 - Mini-Game 2's Logic is erratic, not sure why I just used one generated by Window's Co-Pilot AI with little testing.
3 - ANETZ Plugin's Text Input's are bugged if you click the field twice, cannot type text further.
4 - [Mobile Operation issue] - Scrolling down to view all playable characters is down by tap-dragging on the very bottom edge of the touchscreen. Not sure if this is easily modifiable.
5 - [Mobile Operation issue] - Appraisal Dragon's usage of the TextInput Plugin may causes lockup due to the unavailable support for mobile version onscreen keyboard of the plugin. This means mobile version cannot be hosts at the moment as well.
6 - Missing Manual or Instructions for how to navigate the game on mobile, same with PC but that's usually a given for PC Users.
7 - Lastly! Almost forgot, if a player joins the room before the host can initialize the details of the YouTube Livestream Link and Event Details Section, they may not work as intended. It will not crash the game but the variable supposed to hold those values might get overwritten by other player's inputs. Need to set the event up as something that would only get triggered by the host. The plugin has options for it.

## Github Repository Link
[https://github.com/AVSGamer/PapiRE_Studio_YPSGameJamFiles][^8]

## GitBook for PapiRE Studio Projects
[https://papire-studio.gitbook.io/papire-studio-docs][^9]

## Game's Online Production Deployment (Web Version)
[https://avsgamer.github.io/PapiRE_Studio_YPSGameJamFiles/][^10]

[^1]: [https://edison.wtf/](https://edison.wtf/)
[^2]: [https://www.rpgmakerweb.com/products/rpg-maker-mv](https://www.rpgmakerweb.com/products/rpg-maker-mv)
[^3]: [https://kdworkshop.net/plugins/alpha-net-z/](https://kdworkshop.net/plugins/alpha-net-z/)
[^4]: [https://nebula-games.itch.io/keyboard-input-window](https://nebula-games.itch.io/keyboard-input-window)
[^5]: [http://www.yanfly.moe/wiki/Category:RPG_Maker_MV_Plugins](http://www.yanfly.moe/wiki/Category:RPG_Maker_MV_Plugins)
[^6]: [https://forums.rpgmakerweb.com/index.php?threads/youtube-player.64810/](https://forums.rpgmakerweb.com/index.php?threads/youtube-player.64810/)
[^7]: [https://fenixenginemv.gitlab.io/wizard/guide/](https://fenixenginemv.gitlab.io/wizard/guide/)
[^8]: [https://github.com/AVSGamer/PapiRE_Studio_YPSGameJamFiles](https://github.com/AVSGamer/PapiRE_Studio_YPSGameJamFiles)
[^9]: [https://papire-studio.gitbook.io/papire-studio-docs](https://papire-studio.gitbook.io/papire-studio-docs)
[^10]: [https://avsgamer.github.io/PapiRE_Studio_YPSGameJamFiles/](https://avsgamer.github.io/PapiRE_Studio_YPSGameJamFiles/)