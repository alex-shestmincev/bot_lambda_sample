const { TELEGRAM_TOKEN } = require('./config');
const request = require('request-promise');

async function sendToChat(chat_id, text) { //throw new Error('1')
  const options = {
    method: 'GET',
    uri: `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
    qs: {
      chat_id,
      text
    }
  };

  return request(options);
}

module.exports = {
  sendToChat,
};
