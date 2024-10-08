const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    refreshToken: { type: String, default: null },
    role: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;
