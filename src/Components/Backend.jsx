// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = 3001;

// app.use(bodyParser.json());

// // POST endpoint to handle form submissions
// app.post('/send-inquiry', async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // Create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: 'your-email@gmail.com',
//         pass: 'your-email-password'
//       }
//     });

//     // Send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: `"Your Website" <your-email@gmail.com>`,
//       to: 'admin-email@example.com', // Admin email to receive inquiries
//       subject: 'New Inquiry',
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//     });

//     console.log('Message sent: %s', info.messageId);
//     res.send('Email sent successfully!');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Failed to send email');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
