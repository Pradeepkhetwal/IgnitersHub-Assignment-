const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs')


const emailService = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

const imagePath = path.resolve(__dirname,'image', 'picture.jpeg');

const allowedExtensions = ['.png', '.jpg', '.jpeg'];
const fileExtension = path.extname(imagePath).toLowerCase();

if (!allowedExtensions.includes(fileExtension)) {
  console.log("Invalid file type , only png,jpg or jpeg are allowed ");
}
else {

  const messageDetails = {
    from: '',
    to: '',
    subject: 'Completion of Challenge 3',
    text: `Hello,

My name is Pradeep Singh Khetwal ,
My Branch is  Computer Science and Engineering program.
I am in 8th semester currently
My roll number is 210180101043.

I have completed Challenge 3 and attached the required file.

Best regards,
[Your Full Name]`,
    attachments: [
      {
        filename: 'attachmentImage' + fileExtension,
        path: imagePath,
        cid: 'image001'
      }
    ]
  
  };

  emailService.sendMail(messageDetails, (error, result) => {
    if (error) {
      return console.log(`Failed to send email `, error);
    }
    console.log('Email sent successfully: ', result.response);
  });
}