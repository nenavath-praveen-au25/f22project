const detail = require("../model/detail");
const user = require("../model/user");
const router = require('express').Router()
const {
    verifyTokenAndAuthorization,
    verifyTokenAndCompany,
} = require("./token");

var nodeMailer = require('nodemailer')
    //CREAT
router.post("/submitAttendence", async(req, res) => {
    const newDetail = new detail(req.body);

    try {
        const saveDetail = await newDetail.save();
        res.status(200).json(savedDetail);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.post("userRegister", async(req, res) => {
    const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        companyName: req.body.companyname,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.secret
        ).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.render('index')
    } catch (err) {
        res.status(500).json(err);
    }
});
router.post("/mail", async(req, res) => {
    try {
        const user = await findOne({ userName: req.body.username })

        var transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: "praveen@gmail.com",
                pass: `${process.env.password}`,
            }
        })
        var mailOptions = {
            from: 'praveen@gmail.com',
            to: `${user.email}`,
            subject: `${req.body.subject}`,
            text: `${req.body.text}`
        }
        transporter.sendMail(mailOptions, function(error, info) {
            if (err) {
                res.send(error)
            } else {
                res.send("email send successfully")
            }
        })
    } catch (err) {
        res.send(err)
    }
})