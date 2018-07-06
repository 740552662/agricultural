module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    openid: { type: String, default: '' }, // openid
    unionid: { type: String, default: '' }, // unionid
    name: { type: String, default: '', default: '' }, // 微信名称
    image: { type: String }, // 微信头像
    money: { type: Number, default: 0 }, // 余额
    deposit: { type: Number, default: 0 }, // 押金
    point: { type: [Number], index: '2d' }, // 地理位置
    fromId: { type: Array, default: [] } // 推送id
  });

  return mongoose.model('User', UserSchema);
}