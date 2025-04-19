const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const cors = require('cors');
const multer = require('multer');
const PORT = process.env.PORT || 5000;


const Form = require('./models/PdfDetails');  // Import the Form model

const app = express();


app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',  // Local development
    'https://reesorandasociates.onrender.com'  // Deployed frontend
  ],
  credentials: true,  // Allow cookies if necessary
}));
app.use('/files', express.static('files'));


// MongoDB connection
const mongoUrl = "mongodb+srv://mike96:lilmike800@cluster0.ylle5px.mongodb.net/ReesorEmaildata?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.log("Error connecting to MongoDB:", e);
  });

// File upload configuration with Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");  // Save files in the 'files' directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);  // Unique filename with timestamp and random number
  },
});

const upload = multer({ storage: storage });

// POST endpoint to handle form submission and file upload
app.post('/submit-form', upload.single('documentFile'), async (req, res) => {
  const { fullName, companyName, phoneNumber, emailAddress, debtorInfo, additionalDetails } = req.body;
  const documentFile = req.file ? req.file.filename : null; // Assuming file upload is optional

  try {
    // Create a new form entry in the database
    const newForm = await Form.create({
      fullName,
      companyName,
      phoneNumber,
      emailAddress,
      debtorInfo,
      documentFile,  // Save the file's name or URL (path)
      additionalDetails,
    });

    res.status(200).json({ status: 'Form submitted successfully', form: newForm });
  } catch (error) {
    res.status(500).json({ status: 'Error', message: error.message });
  }
});

// GET endpoint to fetch all form submissions
app.get('/get-forms', async (req, res) => {
  try {
    const forms = await Form.find({});
    res.status(200).json({ status: 'ok', forms });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error fetching forms' });
  }
});

// Basic test endpoint
app.get('/', (req, res) => {
  res.send('Server is running!');
});





// Serve static files from React build folder
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all handler for any other routes (React Router will handle this)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Start the server
app.listen(PORT , () => {
  console.log('Server started on port 5000');
});
