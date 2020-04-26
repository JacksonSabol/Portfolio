// Dependencies
const express = require("express");
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


// Define port depending on environment
const PORT = process.env.PORT || 3001;

// Set up the Express App
const app = express();

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets (in production)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Import routes
// require("./mail-routes")(app);
// Post route to contact me
// validations
// app.post('/mail/contactme', async (req, res, next) => {
//     try {
//         // const errors = validationResult(req);
//         // if (!errors.isEmpty()) {
//         //     return res.status(422).send(errors.array());
//         // }
//         const emailTo = `${process.env.EMAIL_TO}`;
//         const { name, email, subject, message } = req.body;
//         // Set up connection to mailer account
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: `${process.env.EMAIL_ADDRESS}`,
//                 pass: `${process.env.EMAIL_PASSWORD}`,
//             },
//         });
//         // Define message for nodemailer
//         const mailOptions = {
//             from: 'Portfolio Mail - jacksonsaboldesign@gmail.com',
//             to: `${emailTo}`,
//             subject: 'New Portfolio Mail',
//             text: `New message from: ${name}\r\nReturn email: ${email}\r\nSubject: ${subject}\r\nMessage:\r\n${message}`
//         };
//         console.log(mailOptions);
//         // Send mail to client
//         const emailRes = await transporter.sendMail(mailOptions);
//         console.log(emailRes);
//         return res.status(200).json('Email sent');
//     } catch (err) {
//         console.error(err);
//         return res.status(422).send(err);
//     }
// })
// Controls
// Send every GET request to the React app
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// Send an error for every other POST request that's not mail related
app.post("*", (req, res) => {
    res.status(404).send('Resource Not Found');
});
// Send an error for every PUT request
app.put("*", (req, res) => {
    res.status(404).send('Resource Not Found');
});
// Send an error for every DELETE request
app.delete("*", (req, res) => {
    res.status(404).send('Resource Not Found');
});

// Start server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});