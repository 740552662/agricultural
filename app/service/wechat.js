'use strict';

const Service = require('egg').Service;

class weChatService extends Service {
  async getAccessToken() {
    const { appId, appSecret } = this.config.wechat;
    const { data:{access_token} } = await this.ctx.curl(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`, {
      dataType: 'json',
    });
    return access_token;
  }
}

module.exports = weChatService;
