const Message = require('../Models/Message');

// Handle new message submission
const addMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
};

module.exports = {addMessage}