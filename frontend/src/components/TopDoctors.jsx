import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-gray-100 shadow-sm hover:shadow-xl bg-white rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-5px] transition-all duration-300' key={index}>
            <img className='bg-gray-50/50 w-full h-64 object-cover object-top border-b border-gray-50' src={item.image} alt="" />
            <div className='p-4'>
              <div className={`flex items-center gap-2 text-sm text-center font-medium ${item.available ? 'text-emerald-500' : "text-gray-500"}`}>
                <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
              </div>
              <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
              <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-blue-50 text-gray-700 px-12 py-3 rounded-full mt-10 hover:shadow-md hover:bg-blue-100 transition-all font-medium'>more</button>
    </div>

  )
}

export default TopDoctors
