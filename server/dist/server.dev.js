"use strict";

var express = require("express");

var nodemailer = require("nodemailer");

var cors = require("cors");

require("dotenv").config();

var app = express();
app.use(express.json()); // To parse incoming JSON request bodies

app.use(cors());
app.post("/send", function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      subject = _req$body.subject,
      message = _req$body.message;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Please fill out all fields."
    });
  } // Configure Nodemailer


  var transporter = nodemailer.createTransport({
    service: "gmail",
    // or any other service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  var mailOptions = {
    from: email,
    to: "ahiraniket22@gmail.com",
    // Your email address
    subject: "Reachout from ".concat(name, " \uD83D\uDCEC [Portfolio Contact]"),
    html: "\n      <div style=\"font-family: 'Montserrat', sans-serif; max-width: 700px; margin: auto; background: linear-gradient(135deg, rgba(100, 200, 200, 0.1) 0%, rgba(0, 0, 100, 0.1) 100%); padding: 20px; border-radius: 10px; backdrop-filter: blur(20px); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);\">\n        <!-- Header -->\n        <div style=\"background: linear-gradient(135deg, #1f1f30, #24243e); padding: 25px; border-radius: 10px 10px 0 0; text-align: center; color: white;\">\n          <h1 style=\"font-size: 26px; margin: 0; letter-spacing: 1px; color: #f1f1f1;\">".concat(subject, "</h1>\n          <p style=\"font-size: 16px; margin: 5px 0; color: #b0d3e8;\" >").concat(name, "</p>\n        </div>\n  \n        <!-- Content -->\n        <div style=\"background-color: rgba(30, 144, 255, 0.1); padding: 20px; backdrop-filter: blur(20px); box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);\">\n          <h2 style=\"color: #2c3e50; font-size: 20px; border-bottom: 2px solid #00bfff; padding-bottom: 10px; margin-bottom: 20px; letter-spacing: 0.5px;\">Details</h2>\n  \n          <div style=\"font-size: 16px; line-height: 1.6; color: #2c3e50;  padding: 20px; border-radius: 15px;\">\n            <p style=\"font-size: 14px; line-height: 1.1; color: #2c3e50; background: rgba(30, 144, 255, 0.2); padding: 15px; border-radius: 10px;\">Email: <strong>").concat(email, "</strong></p>\n            \n            <div style=\"margin-top: 10px; padding: 15px; background: rgba(255, 255, 255, 0.7); border-radius: 10px; text-align: left; color: #d0e2ff; backdrop-filter: blur(10px); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\">\n              <pre style=\"font-size: 16px; font-family: 'Montserrat', sans-serif; line-height: 1.6; margin: 0; white-space: pre-wrap; color: #2c3e50;\">").concat(message, "</pre>\n            </div>\n          </div>\n          \n          <div style=\"margin-top: 15px; text-align: center;;\">\n              <a href=\"mailto:").concat(email, "\" style=\"display: inline-block; background: linear-gradient(45deg, #2196f3, #21cbf3); color: white; padding: 12px 24px; text-decoration: none; border-radius: 10px; font-weight: bold; box-shadow: 0 6px 20px rgba(33, 203, 243, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.5);\">Reply to ").concat(name, "</a>\n            </div>\n  \n          <!-- Cool Divider -->\n          <hr style=\"margin: 30px 0; border: 0; border-top: 1px solid rgba(255, 255, 255, 0.7);\">\n  \n          <!-- Footer -->\n          <div style=\"text-align: center; margin-top: 20px;\">\n            <p style=\"color: #2c3e50; font-size: 14px; margin-top: 10px;\">This message was sent via your portfolio\u2019s contact form.</p>\n  \n          </div>\n        </div>\n  \n        <!-- Footer Section -->\n        <div style=\"background: linear-gradient(135deg, #1e1e2d, #1f1f30); padding: 15px; border-radius: 0 0 10px 10px; text-align: center; color: #b0d3e8; font-size: 12px;\">\n          <p>\xA9 2024 Aniket Ahir Portfolio. All rights reserved.</p>\n        </div>\n      </div>\n    ")
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
      return res.status(500).json({
        error: "Failed to send email."
      });
    }

    res.status(200).json({
      success: "Email sent successfully!"
    });
  });
});
app.listen(5000, function () {
  console.log("Server running on port 5000");
});