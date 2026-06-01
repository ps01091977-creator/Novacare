import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="pb-16">
      {/* Hero Section */}
      <div className='relative rounded-3xl bg-gradient-to-r from-primary to-primary-dark overflow-hidden my-10 shadow-2xl'>
        <div className='absolute inset-0 bg-white/10 backdrop-blur-sm'></div>
        <div className='relative z-10 py-16 text-center text-white'>
          <h1 className='text-4xl md:text-5xl font-bold tracking-wide mb-4'>ABOUT <span className='text-teal-100 font-extrabold'>US</span></h1>
          <p className='text-teal-50 text-sm md:text-base max-w-2xl mx-auto px-4'>Discover our mission to revolutionize healthcare accessibility and bridge the gap between patients and trusted professionals.</p>
        </div>
      </div>

      <div className='my-16 flex flex-col md:flex-row gap-12 items-center'>
        <div className='w-full md:w-1/2 relative group'>
          <div className='absolute -inset-2 bg-gradient-to-r from-teal-400 to-primary-dark rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000'></div>
          <img className='relative w-full rounded-2xl shadow-xl object-cover' src={assets.about_image} alt="" />
        </div>
        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-gray-600 leading-relaxed text-base'>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
             <p className='mb-4'>Welcome to <span className="font-semibold text-primary">Novacare</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Novacare, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
             <p>Novacare is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
             <b className='text-gray-800 text-lg block mb-2'>Our Vision</b>
             <p>Our vision at Novacare is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
        </div>
      </div>

      <div className='text-center text-3xl my-12'>
        <p className="font-light text-gray-500 tracking-wide">WHY <span className='text-gray-800 font-bold'>CHOOSE US</span></p>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 mb-20'>
        <div className='flex-1 border border-gray-100 rounded-3xl p-10 sm:p-14 flex flex-col gap-4 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark transition-all duration-500 group bg-white'>
          <b className='text-xl text-gray-800 group-hover:text-white transition-colors duration-300'>EFFICIENCY</b>
          <p className='text-gray-500 group-hover:text-teal-50 leading-relaxed transition-colors duration-300'>Streamlined appointment scheduling that fits seamlessly into your busy modern lifestyle.</p>
        </div>
        <div className='flex-1 border border-gray-100 rounded-3xl p-10 sm:p-14 flex flex-col gap-4 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark transition-all duration-500 group bg-white'>
          <b className='text-xl text-gray-800 group-hover:text-white transition-colors duration-300'>CONVENIENCE</b>
          <p className='text-gray-500 group-hover:text-teal-50 leading-relaxed transition-colors duration-300'>Instant access to a massive network of highly trusted healthcare professionals in your exact area.</p>
        </div>
        <div className='flex-1 border border-gray-100 rounded-3xl p-10 sm:p-14 flex flex-col gap-4 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark transition-all duration-500 group bg-white'>
          <b className='text-xl text-gray-800 group-hover:text-white transition-colors duration-300'>PERSONALIZATION</b>
          <p className='text-gray-500 group-hover:text-teal-50 leading-relaxed transition-colors duration-300'>Tailored medical recommendations and smart reminders to help you stay firmly on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
