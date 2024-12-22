/**
 * @fileoverview Contact Page component that displays a form for users to submit a contact request.
 * @name ContactPage
 * @returns JSX.Element and console.logs the form data when submitted
 */

import React, { useState } from 'react';
import MessageBox from '../components/MessageBox';

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormVisible, setIsFormVisible] = useState(true); // State for controlling form visibility
  const [successMessage, setSuccessMessage] = useState(false); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters long.';
    }

    if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters long.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (formData.body.trim().length < 3) {
      newErrors.body = 'Body must be at least 3 characters long.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Data:', formData);
      setSuccessMessage(true);
      setIsFormVisible(false); // Hide the form

      // After 5 seconds, show the form again
      setTimeout(() => {
        setIsFormVisible(true);
        setSuccessMessage(false); // Hide success message after 5 seconds
        setFormData({ fullName: '', subject: '', email: '', body: '' }); // Reset form data
      }, 5000);
    } else {
      setErrors(validationErrors);
      setSuccessMessage(false); // Reset success message on error
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-4xl font-heading font-bold mb-4 text-center">Contact Page</h1>

      {successMessage && (
        <MessageBox
          border="green 4px solid"
          message="Form submitted successfully!"
        />
      )}

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block font-medium mb-1" htmlFor="fullName">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          {/* Subject */}
          <div>
            <label className="block font-medium mb-1" htmlFor="subject">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Body */}
          <div>
            <label className="block font-medium mb-1" htmlFor="body">
              Body:
            </label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            />
            {errors.body && <p className="text-red-500 text-sm">{errors.body}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-900 border-blue-900 border-2 text-white px-4 py-2 rounded hover:bg-blue-200 hover:text-blue-900 mx-auto"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactPage;
