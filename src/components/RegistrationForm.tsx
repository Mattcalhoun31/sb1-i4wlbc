import React, { useState } from 'react';
import axios from 'axios';

const JOTFORM_API_KEY = '2c1db4eba76f6f2d9dc37358737fafd7';
const FORM_ID = '243065819620053';

export default function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    const formData = new FormData(e.currentTarget);
    const formParams = new URLSearchParams();

    // Map form fields to JotForm field IDs
    formParams.append('submission[3_first]', formData.get('q3_firstName') as string);
    formParams.append('submission[4_last]', formData.get('q4_lastName') as string);
    formParams.append('submission[6_text]', formData.get('q6_jobTitle') as string);
    formParams.append('submission[5_email]', formData.get('q5_emailAddress') as string);
    formParams.append('submission[7_text]', formData.get('q7_companyName') as string);
    formParams.append('submission[8_phone]', formData.get('q8_phoneNumber') as string);
    formParams.append('submission[11_country]', 'United States');
    formParams.append('submission[12_textarea]', formData.get('q12_dietaryRestrictions') as string || '');

    try {
      await axios.post(
        `https://api.jotform.com/form/${FORM_ID}/submissions?apiKey=${JOTFORM_API_KEY}`,
        formParams,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      setIsSubmitted(true);
    } catch (err) {
      setError('There was an error submitting the form. Please try again.');
      console.error('Submission error:', err);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-100 rounded-lg shadow-md p-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            THANK YOU
          </h2>
          <p className="text-xl text-gray-700">
            You will receive an email with your confirmation shortly.
          </p>
          <p className="text-xl text-gray-700">
            See you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Register Now</h2>
      {error && (
        <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-md">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="input_3" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="q3_firstName"
            id="input_3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="input_4" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="q4_lastName"
            id="input_4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="input_6" className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            name="q6_jobTitle"
            id="input_6"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="input_5" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="q5_emailAddress"
            id="input_5"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="input_7" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            name="q7_companyName"
            id="input_7"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="input_8" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="q8_phoneNumber"
            id="input_8"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="input_11" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            name="q11_country"
            id="input_11"
            value="United States"
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="input_12" className="block text-sm font-medium text-gray-700">
            Dietary Restrictions
          </label>
          <textarea
            name="q12_dietaryRestrictions"
            id="input_12"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}