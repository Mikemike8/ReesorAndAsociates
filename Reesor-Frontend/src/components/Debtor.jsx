mp
import React from 'react';

const  Debtor  = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    {/* Main Content Container */}
    <div className="max-w-4xl mx-auto space-y-12">
      
      {/* Debt Recovery Form Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-600 pb-4">
          Freight Claim Recovery Submission
        </h1>

        <form className="space-y-6">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Full Name*
              </label>
              <input
                id="full-name"
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name*
              </label>
              <input
                id="company-name"
                type="text"
                placeholder="Enter company name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number*
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address*
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
          </div>

          {/* Debtor Information */}
          <div>
            <label htmlFor="debtor-info" className="block text-sm font-medium text-gray-700 mb-2">
              Debtor Information*
            </label>
            <input
              id="debtor-info"
              type="text"
              placeholder="Who owes you money? (Company/Legal Name)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Document Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Documentation*
            </label>
            <div className="mt-1 flex justify-center px-6 pt-8 pb-6 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="space-y-2 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="text-sm text-gray-600">
                  <p className="font-medium">Drag files here or click to upload</p>
                  <p className="text-xs mt-1">Required: Bill of Lading, Rate Confirmation, Invoice (PDF/JPEG/PNG)</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Details
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Include any special instructions or relevant information"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          {/* Process Timeline */}
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-4">What Happens Next:</h3>
            <ol className="space-y-4 text-sm text-red-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center mr-3">1</span>
                Submission review within 24 business hours
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center mr-3">2</span>
                Case evaluation by our legal team
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center mr-3">3</span>
                Recovery process initiation with your approval
              </li>
            </ol>
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 text-white py-4 px-6 rounded-lg hover:bg-red-800 transition-colors font-semibold text-lg"
          >
            Initiate Recovery Process
          </button>
        </form>
      </div>

      {/* Broker Alerts Subscription */}
      <div className="bg-red-100 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-red-900 mb-2">
            Transportation Security Alert Service
          </h2>
          <p className="text-red-800">
            Protect your business with real-time freight industry intelligence
          </p>
        </div>
        
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full px-4 py-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500"
              name="alert-company"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500"
              required
              name="alert-email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-red-700 py-3 px-6 rounded-lg border-2 border-red-700 hover:bg-red-50 transition-colors font-medium"
          >
            Subscribe to Broker Alerts
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-red-800">
          <p>Free service • Unsubscribe anytime</p>
          <div className="mt-4 inline-flex items-center space-x-2">
            <ShieldCheckIcon className="h-5 w-5" />
            <span>Your information is 100% secure</span>
          </div>
        </div>
      </div>

      {/* Transportation Alert Banner */}
      <div className="bg-red-700 text-white p-6 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Active Non-Payment Alerts</h3>
            <p className="opacity-90">Access real-time database of high-risk brokers</p>
          </div>
          <button className="bg-white text-red-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
            View Current Alerts →
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default  Debtor ; // This is the crucial line
