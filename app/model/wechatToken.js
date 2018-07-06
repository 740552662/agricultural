module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const WechatTokenSchema = new Schema({
    accessToken: { type: String, default: '' },
    upDateAt: { type: Date, default: Date.now },
  });

  return mongoose.model('WechatToken', WechatTokenSchema, 'WechatToken');
}
