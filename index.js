var nodemailer = require('nodemailer');

var gm_sender = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'write your email here',
        pass: 'write your password here'
    }
});

const mailOptions = {
  from: 'example@address.com', // sender address
  to: 'example@address.com', // list of receivers
  subject: 'Write Subject Here', // Subject line
  html: '<p>Write Text Here</p>'// plain text body
};

gm_sender.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});