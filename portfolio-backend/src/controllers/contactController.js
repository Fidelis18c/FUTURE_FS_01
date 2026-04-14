const prisma = require('../config/db');
const { sendContactNotification } = require('../utils/emailService');

/**
 * Handle contact form submission
 */
const submitContact = async (req, res) => {
  
  const { name, email, message } = req.body;

  try {
    const contact = await prisma.contact.create({
      data: { name, email, message },
    });

    // Send email notification (must await for serverless environments)
    try {
      await sendContactNotification({ name, email, message });
    } catch (err) {
      // We log the error but still return success for the DB part
      // Alternatively, you could return an error if email is critical
      console.error('Failed to send contact notification email:', err);
    }

    return res.status(201).json({
      status: 'success',
      message: 'Thank you! Your message has been sent successfully.',
      data: { id: contact.id },
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Something went wrong. Please try again later.',
    });
  }
};

/**
 * Fetch all contact messages
 */
const getAllContacts = async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return res.status(200).json({
      status: 'success',
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve messages.',
    });
  }
};

module.exports = {
  submitContact,
  getAllContacts,
};
