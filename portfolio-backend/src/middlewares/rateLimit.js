const rateLimit = require('express-rate-limit');

const contactRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 contact submissions per window (hour)
  message: {
    status: 'error',
    message: 'Too many contact messages sent from this IP, please try again after an hour.'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

module.exports = { contactRateLimiter };
