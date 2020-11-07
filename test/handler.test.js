const proxyquire = require('proxyquire').noCallThru();

const createBody = (text) => JSON.stringify({
  message: {
    text,
    chat: '1',
  },
}, null, '');

describe('FEATURE: bot', () => {
  let bot;
  let sendToChatSpy = jest.fn();
  beforeEach(() => {
    bot = proxyquire('../src/index.js', {
      './telegram-api': { sendToChat: sendToChatSpy },
    }).bot;
  })

  describe('GIVEN: /start route', () => {
   it(`WHEN calling /start route, than it should return all available routes`, async () => {
      const body = createBody('/start');
      const result = await bot({ body });

      console.log(sendToChatSpy.mock.calls)

      console.log('result', result)
   })
  })
});
