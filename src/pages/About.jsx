import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
    
    <div className='text-center text-2xl pt-10 text-gray-500'>
    <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-12'>
      <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>Welcome to MedslotifyNow — Your Trusted Healthcare Companion. MedslotifyNow is designed to simplify the way you access healthcare. We provide a seamless platform for booking doctor appointments, managing schedules, and connecting patients with trusted medical professionals — all in one place.</p>
        <p>We understand the challenges of finding the right doctor at the right time. That’s why our platform focuses on convenience, efficiency, and reliability, ensuring a smooth healthcare experience for every user.</p>
        <p>By integrating modern technology with patient-centered care, MedslotifyNow empowers you to take control of your health journey with confidence.</p>
        <b className='text-gray-800'>OUR VISION</b>
        <p>To revolutionize healthcare accessibility through smart, user-friendly technology. Our vision is to bridge the gap between patients and healthcare providers by creating a unified digital platform that makes healthcare more accessible, transparent, and efficient for everyone.</p>
      </div>
    </div>

    <div className='text-xl my-4'>
      <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
    </div>

    <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>EFFICIENCY</b>
        <p>Streamlined appointment booking that saves time and eliminates long waiting queues.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>CONVENIENCE</b>
        <p>Easily find and connect with trusted doctors anytime, anywhere.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>PERSONALIZATION</b>
        <p>Smart recommendations and reminders tailored to your healthcare needs.</p>
      </div>
    </div>

    </div>
  )
}

export default About