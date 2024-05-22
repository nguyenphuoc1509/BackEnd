const User = require("../../models/users.model");
const loginOtpModel = require("../../models/login-otp.model");
const otpGenerator = require('otp-generator');
const admin = require('firebase-admin');
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const twilioClient = new twilio(accountSid, authToken);
// const twilioClient = require('twilio')(accountSid, authToken);

// [POST] /api/v1/users/login
module.exports.loginWithPhoneOtp = async (req, res) => {
    try {

        const { phoneNumber } = req.body;

        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });

        const cDate = new Date();

        await loginOtpModel.findOneAndUpdate(
            { phoneNumber },
            { otp, otpExpiration: new Date(cDate.getTime()) },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        console.log(otp);

        await twilioClient.messages.create({
            body: `Your OTP is: ${otp}`,
            to: phoneNumber,
            from: process.env.TWILIO_PHONE_NUMBER,
        });


        // const objectLoginOtp = {
        //     phoneNumber: phoneNumber,
        //     otp: otp,
        //     expireAt: Date.now() + 60*1000
        // }

        // const loginOtp = new loginOtpModel(objectLoginOtp);
        // await loginOtp.save();

        return res.status(200).json({
            code: 200,
            msg: "OTP sent successfully"
        });

    } catch (error) {
        return res.status(400).json({
            code: 400,
            msg: error.message
        });
    }
};
