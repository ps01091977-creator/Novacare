import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <h1 className='text-3xl font-medium'>Find by Speciality</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className='flex gap-4 sm:justify-center pt-5 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-4 no-scrollbar'>
                {specialityData.map((item, index) => (
                    <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center gap-2 text-xs sm:text-sm cursor-pointer flex-shrink-0 active:scale-95 snap-start transition-all duration-300 group w-20 sm:w-24' key={index}>
                        <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all bg-white border border-gray-100'>
                            <img className='w-10 sm:w-12 rounded-full' src={item.image} alt="" />
                        </div>
                        <p className='font-medium text-gray-600 group-hover:text-primary transition-colors text-center leading-tight'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu