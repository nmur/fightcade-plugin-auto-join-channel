# fightcade-plugin-auto-join-channel
Plugin to automatically join the first or specified game channel. 

## Installation

If you have not done so already, download and install the [fightcade-plugin-manager](https://github.com/nmur/fightcade-plugin-manager).

Download `autoJoinChannel.js` from the latest [release](https://github.com/nmur/fightcade-plugin-auto-join-channel/releases) and place it in your `Fightcade\fc2-electron\resources\app\inject\plugins` directory.

## Configuration
By default, the plugin will select the first channel, but you can specify a certain game's channel by providing its full name.   
  
To get the full name, you can go to your Fightcade profile page and click on a game's screenshot to navigate to it's Fightcade page ([example](https://www.fightcade.com/game/sfiii3nr1)).

Add the following to the `plugins\config.json`:
```json
{
    "channel": {
        "id" : "Street Fighter III 3rd Strike: Fight for the Future (Japan 990512, NO CD)",
    }
}
```
