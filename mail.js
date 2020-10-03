const nodemailer = require('nodemailer');

// object by providing the details
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'uremail@gmail.com',
        pass: 'xxxxxxxxxx'
    }
});



// Receiver
let mailContent={
    from: '"Sender name 👻" uremail@gmail.com', // sender address
    to: "senderemail@gmail.com",
    subject: 'First Node.js email',
    text: 'Hi,This is a test mail sent using Nodemailer',
    html: '<h1>You can send html formatted content using Nodemailer with attachments</h1>',
    attachments: [
        {
            filename: 'pp.png',
            path: __dirname + '/pp.png'
        }
    ]
};


transporter.sendMail(mailContent, function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log('Email send successfully');
    }
});