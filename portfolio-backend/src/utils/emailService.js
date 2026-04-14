const nodemailer = require('nodemailer');

// Defensive check for environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
  console.warn('⚠️ Email environment variables are missing. Notifications will fail.');
}

// Configure the transporter with environment variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_PORT === '465', // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Sends an email notification when a contact form is submitted.
 * @param {Object} contactData - The data from the contact form (name, email, message).
 */
const sendContactNotification = async (contactData) => {
  const { name, email, message } = contactData;

  const mailOptions = {
    from: `"Portfolio Contact Alerts" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    text: `
      You have a new message from your portfolio contact form:
      
      Name: ${name}
      Email: ${email}
      Message: ${message}
      
      ---
      Sent via Portfolio Backend
    `,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 0.8em; color: #666;">This is an automated notification from your Portfolio Backend.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error; // Rethrow to handle it in the controller
  }
};

module.exports = {
  sendContactNotification,
};
