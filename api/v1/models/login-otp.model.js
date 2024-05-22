const mongoose = require("mongoose");

const loginOTPSchema = new mongoose.Schema(
    {
        phoneNumber: {
            type: String,
            required: true
        },
        otp: {
            type: String,
            required: true
        },
        otpExpiration:
        {
            type: Date,
            default: Date.now,
            get: (otpExpiration) => otpExpiration.getTime(),
            set: (otpExpiration) => new Date(otpExpiration)
        },
        // expireAt: { type: Date, expires: 0 },
    },
    // {
    //     timestamps: true,
    // }
);

const LoginOTP = mongoose.model("LoginOTP", loginOTPSchema, "login-otp");

module.exports = LoginOTP;