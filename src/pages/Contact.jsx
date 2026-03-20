import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {



  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>

      <img className='w-full md:max-w-[460px]' src={assets.contact_image} alt="" />

      <div className='flex flex-col justify-center items-start gap-2'>
        <p> <b>Get in touch with MedslotifyNow</b> <br />

We’re here to assist you with your healthcare needs. Whether you have questions, need support, or want to connect with our team, feel free to reach out anytime.</p>
        <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
        <p className='text-gray-500'>Bhubaneswar, Odisha, India – 751007 <br />

📞 Phone: +91 8456065149 <br />
📧 Email: support@medslotifynow.com</p>
        <p className='font-semibold text-sm text-gray-600'>SUPPORT HOURS</p>
        <p className='text-gray-500'>Monday – Sunday: 9:00 AM – 7:00 PM</p>
        <p className='font-semibold text-lg text-gray-600'>CAREERS AT MEDSLOTIFYNOW</p>
        <p className='text-gray-500'>Join our mission to transform healthcare accessibility through technology.
Be a part of a growing team dedicated to innovation and patient care.</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Opportunities</button>
      </div>

      </div>
        
    </div>
  )
}

export default Contact