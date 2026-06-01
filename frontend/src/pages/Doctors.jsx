import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'



const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }
  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex sm:flex-col gap-3 sm:gap-4 text-sm text-gray-600 w-full overflow-x-auto snap-x flex-row pb-2 scroll-smooth sm:pb-0'>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`whitespace-nowrap px-4 py-2 sm:pl-3 sm:py-1.5 sm:pr-16 border border-gray-300 rounded-full sm:rounded transition-all cursor-pointer snap-center flex-shrink-0 active:scale-95 sm:active:scale-100 ${speciality === 'General physician' ? 'bg-[#E2E5FF] text-black font-medium' : ''}`}>General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`whitespace-nowrap px-4 py-2 sm:pl-3 sm:py-1.5 sm:pr-16 border border-gray-300 rounded-full sm:rounded transition-all cursor-pointer snap-center flex-shrink-0 active:scale-95 sm:active:scale-100 ${speciality === 'Gynecologist' ? 'bg-[#E2E5FF] text-black font-medium' : ''}`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`whitespace-nowrap px-4 py-2 sm:pl-3 sm:py-1.5 sm:pr-16 border border-gray-300 rounded-full sm:rounded transition-all cursor-pointer snap-center flex-shrink-0 active:scale-95 sm:active:scale-100 ${speciality === 'Dermatologist' ? 'bg-[#E2E5FF] text-black font-medium' : ''}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`whitespace-nowrap px-4 py-2 sm:pl-3 sm:py-1.5 sm:pr-16 border border-gray-300 rounded-full sm:rounded transition-all cursor-pointer snap-center flex-shrink-0 active:scale-95 sm:active:scale-100 ${speciality === 'Pediatricians' ? 'bg-[#E2E5FF] text-black font-medium' : ''}`}>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`whitespace-nowrap px-4 py-2 sm:pl-3 sm:py-1.5 sm:pr-16 border border-gray-300 rounded-full sm:rounded transition-all cursor-pointer snap-center flex-shrink-0 active:scale-95 sm:active:scale-100 ${speciality === 'Neurologist' ? 'bg-[#E2E5FF] text-black font-medium' : ''}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`whitespace-nowrap px-4 py-2 sm:pl-3 sm:py-1.5 sm:pr-16 border border-gray-300 rounded-full sm:rounded transition-all cursor-pointer snap-center flex-shrink-0 active:scale-95 sm:active:scale-100 ${speciality === 'Gastroenterologist' ? 'bg-[#E2E5FF] text-black font-medium' : ''}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6'>
          {filterDoc && filterDoc.length > 0 ? (
            filterDoc.map((item, index) => (
              <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-gray-100 shadow-sm hover:shadow-xl bg-white rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-5px] active:scale-95 sm:active:scale-100 transition-all duration-300' key={index}>
                <img className='bg-gray-50/50 w-full h-36 sm:h-64 object-cover object-top border-b border-gray-50' src={item.image} alt="" />
                <div className='p-2 sm:p-4 flex flex-col items-center sm:items-start'>
                  <div className={`flex items-center gap-1 sm:gap-2 text-[11px] sm:text-sm font-medium ${item.available ? 'text-emerald-500' : "text-gray-500"}`}>
                    <p className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${item.available ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                  </div>
                  <p className='text-[#262626] text-sm sm:text-lg font-medium truncate w-full text-center sm:text-left mt-0.5 sm:mt-1'>{item.name}</p>
                  <p className='text-[#5C5C5C] text-[12px] sm:text-sm truncate w-full text-center sm:text-left'>{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <div className='col-span-full flex flex-col items-center justify-center py-10 text-gray-400'>
               <p className='text-sm'>Fetching doctors...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Doctors
