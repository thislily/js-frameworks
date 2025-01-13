/**
 * @file MessageBox component
 * @name MessageBox
 * @param {string} border - The border color of the message box (color, size, and style as in css)
 * @param {string} message - The message to display in the box
 * @returns {JSX.Element} MessageBox component
 *
 */

import React from 'react';

function MessageBox({ border, message }) {
  return (
    <div
      style={{ border }} // CSS border property
      className="bg-white rounded-2xl text-black font-bold fs text-center py-12 px-8 my-8 mx-auto max-w-xl"
      role="alert"
    >
      {/* Display the message */}
      <h2>{message}</h2>
    </div>
  );
}

export default MessageBox;
