import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='relative flex flex-col md:flex-row flex-wrap bg-gradient-to-br from-primary via-primary-dark to-primary rounded-[20px] sm:rounded-3xl px-5 sm:px-10 lg:px-20 shadow-[0_20px_50px_rgba(13,_148,_136,_0.2)] overflow-hidden my-4 sm:my-6 border border-teal-500/20'>
            <div className='absolute inset-0 bg-white/5 backdrop-blur-[2px] pointer-events-none'></div>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-center md:items-start justify-center gap-5 py-10 sm:py-[10vw] m-auto md:mb-[-30px] text-center md:text-left w-full'>
                <p className='text-2xl sm:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Book Appointment <br className='hidden sm:block' />  With Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light max-w-[280px] sm:max-w-none m-auto md:m-0'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
                </div>
                <a href='#speciality' className='relative z-10 flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-700 font-bold text-sm m-auto md:m-0 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:text-primary transition-all duration-300 active:scale-95'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='hidden sm:block md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header