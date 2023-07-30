var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "meow0162@gmail.com",
    pass: "vcwbocnhbzrtnpyq",
  },
});

var mailOptions = {
  from: "meow0162@gmail.com",
  to: "yuzeblob@icloud.com",
  subject: "Ur mom",
  text: "Meow uwu.",
};

function sendEmail() {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

// Send the email every 5 seconds (adjust the interval as needed)
setInterval(sendEmail, 11000);
