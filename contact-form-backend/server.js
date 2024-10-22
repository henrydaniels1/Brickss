// import express from 'express';
// import nodemailer from 'nodemailer';
// import bodyParser from 'body-parser';
// import cors from 'cors';

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // Configure Nodemailer
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'henrydanielezenwa@gmail.com', // Replace with your Gmail address
//         pass: 'GmailAuth'    // Replace with your Gmail password or app-specific password
//     }
// });

// // Handle form submission
// app.post('/send-email', (req, res) => {
//     const { name, email, company, message } = req.body;

//     const mailOptions = {
//         from: email,
//         to: 'henrydanielchibuzor@gmail.com', // Replace with your destination email address
//         subject: 'Contact Us Form Submission',
//         text: `
//             Name: ${name}
//             Email: ${email}
//             Company: ${company}
//             Message: ${message}
//         `
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Error sending email:', error);
//             return res.status(500).send('Internal Server Error');
//         }
//         console.log('Email sent:', info.response); // `info` should contain details about the sent email
//         res.status(200).send('Email sent successfully');
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
