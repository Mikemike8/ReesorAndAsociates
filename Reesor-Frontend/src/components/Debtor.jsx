import React, { useState } from 'react';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [documentUrl, setDocumentUrl] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
  });
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log('Selected file:', file);
    setUploadStatus(file ? 'File selected, ready to upload.' : 'No file selected.');
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadStatus('Preparing to upload...');

    if (!selectedFile) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    if (!formData.fullName || !formData.companyName) {
      setUploadStatus('Please fill in all required fields (Full Name and Company Name).');
      return;
    }

    const cloudName = 'dpttzjwpr'; // Your Cloudinary cloud name
    const uploadPreset = 'PDFDATA'; // Your unsigned upload preset

    const formDataToUpload = new FormData();
    formDataToUpload.append('file', selectedFile);
    formDataToUpload.append('upload_preset', uploadPreset);

    // Use context to send fullName and companyName
    const context = `fullName=${encodeURIComponent(formData.fullName.trim())}|companyName=${encodeURIComponent(formData.companyName.trim())}`;
    formDataToUpload.append('context', context);

    console.log('FormData contents:');
    for (let [key, value] of formDataToUpload.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      setUploadStatus('Uploading...');
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
        method: 'POST',
        body: formDataToUpload,
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Cloudinary response:', data);

      if (response.ok && data.secure_url) {
        setDocumentUrl(data.secure_url);
        setUploadStatus('File uploaded successfully!');
      } else {
        setUploadStatus(`Upload failed: ${data.error?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus(`An error occurred while uploading: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="text-center pt-20 m-0 bg-gray-100">
          <h1 className="text-[60px] font-oswald mb-6 text-slate-800 tracking-wide">
            Submit a Debtor
          </h1>
          <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto">
            Help us keep the industry informed. Use the form below to report companies or individuals who owe you money.
            Your contribution strengthens the network and promotes accountability across the board.
          </p>
        </section>

        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-[1500px]">
          <h1 className="text-5xl font-oswald text-[#222222] mb-6 border-b-2 border-[#222222] pb-4">
            Freight Claim Recovery Submission
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name*
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name*
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Documentation*
              </label>
              <div className="mt-1">
                <input
                  type="file"
                  name="documentFile"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                />
                <p className="text-xs mt-1 text-gray-600">
                  Required: Bill of Lading, Rate Confirmation, Invoice (PDF/JPEG/PNG)
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1a1a1a] text-white py-4 px-6 rounded-lg shadow-lg hover:bg-[#333333] transition-all duration-300 font-semibold text-lg flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Initiate Recovery Process
            </button>
          </form>

          {uploadStatus && (
            <div className="mt-4">
              <p className={`text-${uploadStatus.includes('success') ? 'green' : 'red'}-600`}>
                {uploadStatus}
              </p>
            </div>
          )}

          {documentUrl && (
            <div className="mt-4">
              <p className="text-green-600">Uploaded Document URL:</p>
              <a href={documentUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {documentUrl}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;