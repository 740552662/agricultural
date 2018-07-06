'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1527910857086_8253';
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
      '../logs/agricultural-web.log',
    ],
    packages: ['../package.json'],
  };

  config.wechat = {
    appId: 'wxe289f0a4e047d145',
    appSecret: 'f2b6b4a7aa57b3e3407cb43a21e3dd0d'
  };

  config.mongoose = {
    url: 'mongodb://120.79.17.235/agricultural',
    options: {},
  };

  config.io = {
    init: { wsEngine: 'uws' }, // default: us
  };

  return config;
};

