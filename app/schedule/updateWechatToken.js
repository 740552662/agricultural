module.exports = {
    schedule: {
        interval: '60m',
        type: 'worker',
        immediate: true, // 程序启动立即更新
    },
    async task(ctx) {
        // // 获取 token
        // const res = await ctx.curl('http://www.api.com/cache', {
        //     dataType: 'json',
        // });
        // // 更新token
        // await ctx.model.WechatToken.update({}, {});
    },
};