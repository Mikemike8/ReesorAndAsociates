const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // <-- NEW LINE
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // <-- ENABLE CORS
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://mike96:lilmike800@cluster0.ylle5px.mongodb.net/ReesorEmaildata?retryWrites=true&w=majority")
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ Connection error:', err);
  });

// Define schema and model
const emailSchema = new mongoose.Schema({
  Email: { type: String, required: true },
  Company: { type: String, required: true }
});

const EmailModel = mongoose.model('Email', emailSchema); // <-- renamed model

// POST endpoint to save Email & Company
app.post('/api/save', async (req, res) => {
  const { Email, Company } = req.body;

  if (!Email || !Company) {
    return res.status(400).json({ error: 'Email and Company are required' });
  }

  try {
    const newEntry = new EmailModel({ Email, Company }); // <-- use renamed model
    await newEntry.save();
    res.status(201).json({ message: '📥 Saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: '❌ Save failed', details: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
