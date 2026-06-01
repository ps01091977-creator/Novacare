import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <h1 className='text-3xl font-medium'>Find by Speciality</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-4'>
                {specialityData.map((item, index) => (
                    <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-full shadow-sm text-sm cursor-pointer flex-shrink-0 hover:shadow-md hover:bg-gray-50 active:scale-95 snap-center transition-all duration-300 group' key={index}>
                        <img className='w-10 sm:w-12' src={item.image} alt="" />
                        <p className='font-medium text-gray-600 group-hover:text-primary transition-colors'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu