import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

  const { doctors , aToken , getAllDoctors, changeAvailability, removeDoctor} = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
        getAllDoctors()
    }
}, [aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {doctors.map((item, index) => (
          <div className='border border-gray-100 shadow-sm hover:shadow-xl bg-white rounded-xl max-w-56 overflow-hidden cursor-pointer group hover:translate-y-[-5px] transition-all duration-300' key={index}>
            <img className='bg-gray-50/50 group-hover:bg-primary transition-all duration-500 w-full h-64 object-cover object-top border-b border-gray-50' src={item.image} alt="" />
            <div className='p-4'>
              <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
              <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              <div className='mt-3 flex items-center justify-between gap-1 text-sm'>
                <div className='flex items-center gap-1'>
                  <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
                  <p className="text-gray-600">Available</p>
                </div>
                <button onClick={() => removeDoctor(item._id)} className='text-red-500 hover:text-white border border-red-500 hover:bg-red-500 px-3 py-1 rounded transition-all text-xs font-medium'>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList