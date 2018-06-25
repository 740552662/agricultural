module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        openid: { type: String },
        unionid: { type: String },
        name: { type: String },
        image: { type: String },
        point: { type: String },
        fromId: { type: String },
    });

    return mongoose.model('User', UserSchema);
}