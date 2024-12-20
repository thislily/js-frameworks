import React from 'react';

function MessageBox({ border, message }) {
  return (
    <div
      style={{ border }} // Properly use the border prop in the style object
      className="bg-white rounded-2xl text-black font-bold fs text-center py-12 px-8 my-8 mx-auto max-w-xl"
      role="alert"
    >
      <h2>{message}</h2>
    </div>
  );
}

export default MessageBox;
