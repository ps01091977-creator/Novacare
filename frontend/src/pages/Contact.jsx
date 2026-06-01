import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="pb-16">

      {/* Hero Section */}
      <div className='relative rounded-3xl bg-gradient-to-r from-primary to-primary-dark overflow-hidden my-10 shadow-2xl'>
        <div className='absolute inset-0 bg-white/10 backdrop-blur-sm'></div>
        <div className='relative z-10 py-16 text-center text-white'>
          <h1 className='text-4xl md:text-5xl font-bold tracking-wide mb-4'>CONTACT <span className='text-teal-100 font-extrabold'>US</span></h1>
          <p className='text-teal-50 text-sm md:text-base max-w-2xl mx-auto px-4'>We're here to help. Reach out to our dedicated support team or explore amazing career opportunities with us.</p>
        </div>
      </div>

      <div className='my-16 flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100'>
        <div className="w-full md:w-1/2 relative group">
           <div className='absolute -inset-4 bg-gradient-to-r from-teal-300 to-primary-dark rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000'></div>
           <img className='relative w-full rounded-3xl shadow-lg object-cover' src={assets.contact_image} alt="" />
        </div>
        
        <div className='flex flex-col justify-center items-start gap-8 md:w-1/2 md:pl-8'>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <p className='font-bold text-xl text-gray-800 tracking-wide'>OUR OFFICE</p>
            </div>
            <p className='text-gray-500 text-base ml-13 leading-relaxed'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
            <div className="ml-13 p-4 bg-gray-50 rounded-xl border border-gray-100 inline-block">
              <p className='text-gray-600 mb-1'><span className="font-semibold text-gray-800">Tel:</span> (415) 555-0132</p>
              <p className='text-gray-600'><span className="font-semibold text-gray-800">Email:</span> customersupport@Novacare.in</p>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 my-2"></div>

          <div className="space-y-4 w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <p className='font-bold text-xl text-gray-800 tracking-wide'>CAREERS AT NOVACARE</p>
            </div>
            <p className='text-gray-500 text-base ml-13'>Learn more about our teams and discover amazing job openings.</p>
            <button className='ml-13 mt-2 bg-white border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>Explore Jobs</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact
