const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, number, subject, text } = req.body;
      console.log(req.body)
      console.log(process.env.GMAIL_USER)

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: "puneetkathar1@gmail.com",
        subject: 'Hi there, Contact Submission',
        text: text,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        `
      };

      await transporter.sendMail(mailOptions);

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Email has been sent" }));
    } catch (error) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Email has not been sent" }));
    }
  } else {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Method not allowed" }));
  }
}
