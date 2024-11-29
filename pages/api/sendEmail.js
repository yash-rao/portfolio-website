import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// This function handles the contact form submission
export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { name, email, subject, message } = req.body;

  // Basic validation for form fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill out all fields." });
  }

  // Setup Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,   // Your email address from .env
      pass: process.env.EMAIL_PASS,   // Your email password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: "yashbarot770@gmail.com",
    subject: `Reachout from ${name} 📬 [Portfolio Contact]`,
    html: `<div style="font-family: 'Montserrat', sans-serif; max-width: 700px; margin: auto; background: linear-gradient(135deg, rgba(100, 200, 200, 0.1) 0%, rgba(0, 0, 100, 0.1) 100%); padding: 20px; border-radius: 10px; backdrop-filter: blur(20px); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1f1f30, #24243e); padding: 25px; border-radius: 10px 10px 0 0; text-align: center; color: white;">
          <h1 style="font-size: 26px; margin: 0; letter-spacing: 1px; color: #f1f1f1;">${subject}</h1>
          <p style="font-size: 16px; margin: 5px 0; color: #b0d3e8;" >${name}</p>
        </div>
  
        <!-- Content -->
        <div style="background-color: rgba(30, 144, 255, 0.1); padding: 20px; backdrop-filter: blur(20px); box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);">
          <h2 style="color: #2c3e50; font-size: 20px; border-bottom: 2px solid #00bfff; padding-bottom: 10px; margin-bottom: 20px; letter-spacing: 0.5px;">Details</h2>
  
          <div style="font-size: 16px; line-height: 1.6; color: #2c3e50;  padding: 20px; border-radius: 15px;">
            <p style="font-size: 14px; line-height: 1.1; color: #2c3e50; background: rgba(30, 144, 255, 0.2); padding: 15px; border-radius: 10px;">Email: <strong>${email}</strong></p>
            
            <div style="margin-top: 10px; padding: 15px; background: rgba(255, 255, 255, 0.7); border-radius: 10px; text-align: left; color: #d0e2ff; backdrop-filter: blur(10px); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);">
              <pre style="font-size: 16px; font-family: 'Montserrat', sans-serif; line-height: 1.6; margin: 0; white-space: pre-wrap; color: #2c3e50;">${message}</pre>
            </div>
          </div>
          
          <div style="margin-top: 15px; text-align: center;;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(45deg, #2196f3, #21cbf3); color: white; padding: 12px 24px; text-decoration: none; border-radius: 10px; font-weight: bold; box-shadow: 0 6px 20px rgba(33, 203, 243, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.5);">Reply to ${name}</a>
            </div>
  
          <!-- Cool Divider -->
          <hr style="margin: 30px 0; border: 0; border-top: 1px solid rgba(255, 255, 255, 0.7);">
  
          <!-- Footer -->
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #2c3e50; font-size: 14px; margin-top: 10px;">This message was sent via your portfolio’s contact form.</p>
  
          </div>
        </div>
  
        <!-- Footer Section -->
        <div style="background: linear-gradient(135deg, #1e1e2d, #1f1f30); padding: 15px; border-radius: 0 0 10px 10px; text-align: center; color: #b0d3e8; font-size: 12px;">
          <p>© 2024 Yash Barot Portfolio. All rights reserved.</p>
        </div>
      </div>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email: ", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
};
