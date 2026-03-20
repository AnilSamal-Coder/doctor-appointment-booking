import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ---Left side--- */}
            <div>
                <img className='w-32 mb-5' src={assets.medslotifynow} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>MedslotifyNow is a smart healthcare platform that helps patients find trusted doctors and book appointments quickly and easily. Our system connects patients with experienced medical professionals across various specialties, making healthcare more accessible and convenient. We aim to provide a seamless, secure, and reliable experience for better healthcare management.</p>
            </div>
            {/* ---Center--- */}
            <div>
                <p className='text-xl font-medium mb-5'>PLATFORM</p>
                <ul className='flex flex-col gap-2 text-gray-600 '>
                  <li>Home</li>
                  <li>Find Doctors</li>
                  <li>Book Appointment</li>
                  <li>Contact Us</li>
                </ul>
            </div>
            {/* ---Right side--- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                  <li>+91 8456065149</li>
                  <li>support@medslotifynow.com</li>
                  <li>Bhubaneswar, Odisha, India</li>
                  <li>Mon-Sat : 9:00 AM - 7-00 PM</li>
                </ul>
            </div>
        </div>
        {/* ---Copyright--- */}
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>copyright 2026@ Medslotifynow - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer