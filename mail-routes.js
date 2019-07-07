module.exports = app => {
    // Import dependencies
    require('dotenv').config();
    const nodemailer = require('nodemailer');

    // Set up connection to mailer account
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${process.env.EMAIL_ADDRESS}`,
            pass: `${process.env.EMAIL_PASSWORD}`,
        },
    });
    const emailTo = `${process.env.emailTo}`;
    // Post route to contact me
    app.post('/mail/contactme', (req, res, next) => {
        // Define varables to be used in the automated message
        const reqName = req.body.name;
        const reqEmail = req.body.email;
        const subject = req.body.subject;
        const message = req.body.message;

        // Define message for nodemailer
        const mailOptions = {
            from: {
                name: reqName,
                address: reqEmail
            },
            to: `${emailTo}`,
            subject: `Portfolio Mail - ${subject}`,
            text: message
        };
        console.log(mailOptions);
        // Send mail to client
        transporter.sendMail(mailOptions, function (err, response) {
            if (err) {
                console.error('there was an error: ', err);
            } else {
                console.log('here is the res: ', response);
                res.status(200).json('Email sent');
            }
        });
    })
};
