// Import dependencies
require('dotenv').config();
const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator');
const validations = [
    check('name')
        .trim()
        .isLength({ min: 3 })
        .escape()
        .withMessage('A name is required'),
    check('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('A valid email address is required'),
    check('subject')
        .trim()
        .isLength({ min: 3 })
        .escape()
        .withMessage('A subject is required'),
    check('message')
        .trim()
        .isLength({ min: 5 })
        .escape()
        .withMessage('A message is required'),
];

module.exports = app => {
    // Post route to contact me
    app.post('/mail/contactme', validations, async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).send(errors.array());
            }
            const emailTo = `${process.env.EMAIL_TO}`;
            const { name, email, subject, message } = req.body;
            // Set up connection to mailer account
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: `${process.env.EMAIL_ADDRESS}`,
                    pass: `${process.env.EMAIL_PASSWORD}`,
                },
            });
            // Define message for nodemailer
            const mailOptions = {
                from: 'Portfolio Mail - jacksonsaboldesign@gmail.com',
                to: `${emailTo}`,
                subject: 'New Portfolio Mail',
                text: `New message from: ${name}\r\nReturn email: ${email}\r\nSubject: ${subject}\r\nMessage:\r\n${message}`
            };
            console.log(mailOptions);
            // Send mail to client
            const emailRes = await transporter.sendMail(mailOptions);
            console.log(emailRes);
            return res.status(200).json('Email sent');
        } catch (err) {
            console.error(err);
            return res.status(422).send(err);
        }
    })
};
