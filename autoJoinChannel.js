const config = require('./config.json');

module.exports = (FCADE) => { runPlugin(FCADE) };

const defaultConfig = {
    id: '',
};

const runPlugin = (FCADE) => {
// Plugin code goes here
    connectToChannelWhenAvailable(FCADE, config.autoJoinChannel);
}

const connectToChannelWhenAvailable = (FCADE, channelConfig) => {
    if (!channelConfig) {
        channelConfig = defaultConfig
    }

    const checkInterval = setInterval(() => {
        if (FCADE.initializingApp == !1) {
            clearInterval(checkInterval);
            
            if (channelConfig.id) {
                connectToChannel(FCADE, channelConfig.id);
            }
            else {
                connectToFirstChannel(FCADE);
            }
        }
    }, 300);
};

const connectToFirstChannel = (FCADE) => {
const gameChannels = FCADE.channels.filter(channel => 'gameid' in channel);

if (gameChannels.length > 0) {
    connectToChannel(FCADE, gameChannels[0].id);
}
}

function connectToChannel(FCADE, channelId) {
FCADE.selectChannel(channelId);
}

