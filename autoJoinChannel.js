const CONFIG = {
    channel: {
        id: '',
    }
};

module.exports = (FCADE) => { runPlugin(FCADE) };

const runPlugin = (FCADE) => {
    // Plugin code goes here
    connectToFirstChannelWhenAvailable(FCADE);
}

const connectToFirstChannelWhenAvailable = (FCADE) => {
    const checkInterval = setInterval(() => {
        if (FCADE.initializingApp == !1) {
            clearInterval(checkInterval);
            
            if (CONFIG.channel.id) {
                connectToChannel(FCADE, CONFIG.channel.id);
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

