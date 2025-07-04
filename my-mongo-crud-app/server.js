﻿const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const cors = require('cors'); // <-- NEW LINE
require('dotenv').config();
const Debtor = require('./models/Debtor');  // Import the Debtor model
const app = express();
const PORT = 5010;
app.use(cors({
  origin: [
    'http://localhost:5173',  // Local development
    'https://reesorandasociates.onrender.com',
    'https://jressor.onrender.com', // Deployed frontend
  ],
  credentials: true,  // Allow cookies if necessary
}));



// <-- ENABLE CORS
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




// POST endpoint to save a new debtor and rank them
app.post('/api/debtor', async (req, res) => {
  const { FirstName, LastName, AmountOwed } = req.body;

  if (!FirstName || !LastName || !AmountOwed) {
    return res.status(400).json({ error: 'All fields (FirstName, LastName, AmountOwed) are required.' });
  }

  try {
    // Step 1: Create a new debtor entry
    const newDebtor = new Debtor({ FirstName, LastName, AmountOwed });

    // Step 2: Save the new debtor
    await newDebtor.save();

    // Step 3: Rank all debtors by AmountOwed in descending order
    const allDebtors = await Debtor.find().sort({ AmountOwed: -1 });

    // Step 4: Update the rank field for each debtor
    for (let i = 0; i < allDebtors.length; i++) {
      allDebtors[i].Rank = i + 1;  // Assign rank starting from 1
      await allDebtors[i].save();  // Save the updated debtor record
    }

    // Return success message
    res.status(201).json({ message: 'Debtor added and ranked successfully!' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to save debtor and rank.' });
  }
});








// GET endpoint to fetch all debtors and their rank
app.get('/api/debtors', async (req, res) => {
  try {
    const debtors = await Debtor.find().sort({ Rank: 1 });  // Sorted by Rank, lowest to highest
    res.status(200).json(debtors);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch debtors.' });
  }
});





// // Serve static files from React build folder
// const buildPath = path.join(__dirname, '../Reesor-Frontend/build');
// app.use(express.static(buildPath));

// // Catch-all handler for any other routes (React Router will handle this)
// // Update wildcard route to use a regular expression
// app.get(/.*/, (req, res) => {
//   res.sendFile(path.join(buildPath, 'index.html'));
// });




// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
