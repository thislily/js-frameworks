import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function CheckoutSuccessPage() {
  return (
    <div className='container mx-auto my-32 p-4 text-center'>
      <h1 className='font-heading text-6xl pb-12'>Thank-you for your order! 
        <br />
        <span className='font-body text-2xl text-gray-700'>
        It will be shipped soon.
        </span>
      </h1>

      <Link to='/' className='font-body text-2xl text-blue-900 border-2 border-blue-900 rounded-md py-6 px-8 bg-orange-200 hover:text-white hover:bg-blue-900'>Continue
      <FontAwesomeIcon icon='arrow-circle-right' className='ml-2' />
      </Link>
    </div>
  )
}

export default CheckoutSuccessPage
