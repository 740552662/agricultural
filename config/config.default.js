'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527910857086_8253';

  // add your config here
  config.middleware = [];

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  // alinode 配置
  config.alinode = {
    appid: '40998',
    secret: 'cdfc4cc89e2ca59c6afd0537c06684ff0d447538',
    error_log: [
      '../logs/common-error.log',
      '../logs/egg-agent.log',
      '../logs/egg-schedule.log',
      '../logs/egg-web.log',
      '../logs/unknownServer-web.log',
    ],
    packages: [ '../package.json' ],
  };

  config.io = {
    init: { wsEngine: 'uws' }, // default: us
  };

  return config;
};

