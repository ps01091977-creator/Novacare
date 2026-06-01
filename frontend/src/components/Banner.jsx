import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='relative flex bg-gradient-to-r from-primary to-teal-400 rounded-3xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 shadow-2xl overflow-hidden'>
            <div className='absolute -inset-10 bg-white/10 rotate-12 transform scale-150 blur-2xl pointer-events-none'></div>

            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p>Book Appointment</p>
                    <p className='mt-4'>With 100+ Trusted Doctors</p>
                </div>
                <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='relative z-10 bg-white text-sm sm:text-base text-gray-700 font-bold px-8 py-3 rounded-full mt-6 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:text-primary transition-all duration-300'>Create account</button>
            </div>

            {/* ------- Right Side ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner