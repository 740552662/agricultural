module.exports = {
  schedule: {
    interval: '60m',
    type: 'worker',
    immediate: true, // 程序启动立即更新
  },
  async task(ctx) {
    let tokenInfo = await ctx.model.WechatToken.findOne({});
    if (!tokenInfo) {
      tokenInfo = await ctx.model.WechatToken.create({});
    }
    const access_token = await ctx.service.wechat.getAccessToken();
    tokenInfo.access_token = access_token;
    tokenInfo.upDateAt = new Date();
    tokenInfo.save();
  },
};