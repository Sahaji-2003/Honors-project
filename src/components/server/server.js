const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors module

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sahajichau99@gmail.com', // replace with your email
    pass: 'vnbv xxkh auhz gihc' // replace with your email password or app-specific password
  }
});

app.post('/send-email', (req, res) => {
  const { name,emailid, subject, text } = req.body;
      
  const mailOptions = {
    from: 'sahajichau99@gmail.com', // replace with your email
    to: 'sheikhms_3@rknec.edu',
    subject: subject,
    text: `Name: ${name}\nEmail: ${emailid}\n\n${text}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send(error.toString());
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
