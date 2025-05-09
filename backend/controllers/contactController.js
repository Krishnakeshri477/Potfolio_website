const { validationResult } = require('express-validator');
const Message = require('../models/Message');

const contactFormHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }

  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(200).json({ message: 'Message received successfully!' });
  } catch (error) {
    console.error('Error saving message:', error.message);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

module.exports = { contactFormHandler };
