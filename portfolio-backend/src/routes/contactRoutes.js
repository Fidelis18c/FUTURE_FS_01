const express = require('express');
const router = express.Router();
const { submitContact, getAllContacts } = require('../controllers/contactController');
const { validateContact } = require('../middlewares/validation');
const { contactRateLimiter } = require('../middlewares/rateLimit');

// POST /api/contact - Create a new message
router.post('/contact', contactRateLimiter,validateContact, submitContact);

// GET /api/contact - Fetch all messages (for admin/testing)
router.get('/contact', getAllContacts);

module.exports = router;
