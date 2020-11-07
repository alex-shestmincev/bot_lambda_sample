const request = require('request-promise');

const sendToChat = require('./telegram-api').sendToChat;
console.log('sendToChat', sendToChat)
const routes = require('./routes');

async function getShortUrl(longUrl) {
    const options = {
        method: 'POST',
        uri: 'https://cleanuri.com/api/v1/shorten',
        form: {
            url: String(longUrl).trim()
        },
        json: true
    };

    return request(options);
}

module.exports.bot = async event => { console.log('event', event)
  const body = JSON.parse(event.body);

  const {chat, text} = body.message;

  try {
    const [, route, message] = text.match(/^\/(\w+)\s*(.+)*$/);

    let responseMessage;

    if (routes[route]) {
      responseMessage = await routes[route](message);
    } else {
      throw new Error(`${route} command not found`);
    }

    await sendToChat(chat.id, responseMessage);
  } catch (err) {
    await sendToChat(chat.id, `Input: ${text}, ${err}`);
  }

  return { statusCode: 200 };
};
