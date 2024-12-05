import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
function Buy() {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-teal-600">Purchase Successful!</h1>
        <p className="mt-4 text-lg text-gray-600">Thank you for your purchase. Your order is being processed.</p>
        <div className="mt-8">
          <img
            src="https://uploads-ssl.webflow.com/5ef0df6b9272f7410180a013/60c0e28575cd7c21701806fd_q1cunpuhbdreMPFRSFLyfUXNzpqv_I5fz_plwv6gV3sMNXwUSPrq88pC2iJijEV7wERnKXtdTA0eE4HvdnntGo9AHAWn-IcMPKV-rZw1v75vlTEoLF4OdNqsRb7C6r7Mvzrm7fe4.png" // Placeholder for success image or use your own
            alt="Success"
            className="mx-auto mb-22 "
          />
        </div>
        
        <div className="mt-8">
          <Link to="/" className="px-6 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Buy