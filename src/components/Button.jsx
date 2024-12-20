/**
 * @file Button.jsx
 * @name Button
 * @classdesc Button component to display a button with text
 * @param {string} text - The text to display on the button
 * @param {function} onClick - The function to call when the button is clicked
 * @returns Button component
 * 
 */

import React from 'react'

function Button({text, onClick}) {
  return (
    <button onClick={onClick} className='bg-blue-900 hover:bg-blue-200 text-white hover:text-blue-900 border-2 border-blue-900 font-bold py-2 px-4 rounded mx-auto'>
        {text}
    </button>
  )
}

export default Button
