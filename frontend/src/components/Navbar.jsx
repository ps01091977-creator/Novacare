import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)
  const aToken = localStorage.getItem('aToken')

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 transition-all'>
      <div className="w-20 h-20 md:w-28 md:h-28 overflow-hidden">
        <img
          onClick={() => navigate('/')}
          src={assets.logo || '/fallback-logo.png'}
          alt="Logo"
          className="w-full h-full object-cover object-center cursor-pointer"
        />
      </div>

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <li className='pb-0.5'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold transition-colors' : 'text-gray-600 hover:text-primary transition-colors'}>HOME</NavLink>
        </li>
        <li className='pb-0.5'>
          <NavLink to='/doctors' className={({ isActive }) => isActive ? 'text-primary font-bold transition-colors' : 'text-gray-600 hover:text-primary transition-colors'}>ALL DOCTORS</NavLink>
        </li>
        <li className='pb-0.5'>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-primary font-bold transition-colors' : 'text-gray-600 hover:text-primary transition-colors'}>ABOUT</NavLink>
        </li>
        <li className='pb-0.5'>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-primary font-bold transition-colors' : 'text-gray-600 hover:text-primary transition-colors'}>CONTACT</NavLink>
        </li>
      </ul>

      <div className='flex items-center gap-4'>

        {/* ✅ Admin Panel Button - show only on home page  */}
        {location.pathname === '/' && (
          <a
            href={import.meta.env.VITE_ADMIN_URL || 'http://localhost:5174'}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-gradient-to-r from-primary to-primary-dark text-white text-xs px-4 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all hidden md:block font-medium'
          >
            Admin Panel
          </a>
        )}


        {token && userData ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-12 rounded-full' src={userData.image || '/fallback-user.png'} alt="profile" />
            <img className='w-2.5' src={assets.dropdown_icon || '/fallback-icon.png'} alt="dropdown" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-2.5 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all hidden md:block'
          >
            Create Account
          </button>
        )}

        <div onClick={() => setShowMenu(true)} className='md:hidden p-2 -mr-2 flex items-center justify-center cursor-pointer'>
          <img className='w-6' src={assets.menu_icon} alt="" />
        </div>

        {/* ---- Mobile Menu ---- */}
        <div onClick={() => setShowMenu(false)} className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}></div>
        <div className={`md:hidden fixed right-0 top-0 bottom-0 z-50 w-[80vw] max-w-sm bg-white transition-transform transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'} shadow-2xl`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={assets.logo} className='w-24' alt="" />
            <div onClick={() => setShowMenu(false)} className='w-12 h-12 flex items-center justify-center cursor-pointer active:scale-95'>
              <img src={assets.cross_icon} className='w-7' alt="" />
            </div>
          </div>
          {token && userData && (
            <div className='flex items-center gap-3 px-5 py-4 bg-gray-50 border-b border-gray-100 mb-2'>
              <img className='w-12 h-12 rounded-full object-cover' src={userData.image || '/fallback-user.png'} alt="profile" />
              <div>
                <p className='font-medium text-gray-800'>{userData.name}</p>
                <p className='text-xs text-gray-500'>Logged in</p>
              </div>
            </div>
          )}
          <ul className='flex flex-col gap-2 mt-5 px-5 text-base font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/' className={({isActive}) => `px-6 py-3 min-h-[48px] rounded-xl flex items-center transition-all ${isActive ? 'bg-primary text-white shadow-md' : 'hover:bg-gray-50 text-gray-700'}`}>HOME</NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' className={({isActive}) => `px-6 py-3 min-h-[48px] rounded-xl flex items-center transition-all ${isActive ? 'bg-primary text-white shadow-md' : 'hover:bg-gray-50 text-gray-700'}`}>ALL DOCTORS</NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' className={({isActive}) => `px-6 py-3 min-h-[48px] rounded-xl flex items-center transition-all ${isActive ? 'bg-primary text-white shadow-md' : 'hover:bg-gray-50 text-gray-700'}`}>ABOUT</NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' className={({isActive}) => `px-6 py-3 min-h-[48px] rounded-xl flex items-center transition-all ${isActive ? 'bg-primary text-white shadow-md' : 'hover:bg-gray-50 text-gray-700'}`}>CONTACT</NavLink>
            
            <hr className='w-full border-gray-100 my-4' />

            {token && userData ? (
                <>
                  <NavLink onClick={() => setShowMenu(false)} to='/my-profile' className={({isActive}) => `px-6 py-3 min-h-[48px] rounded-xl flex items-center transition-all ${isActive ? 'bg-primary text-white shadow-md' : 'hover:bg-gray-50 text-gray-700'}`}>MY PROFILE</NavLink>
                  <NavLink onClick={() => setShowMenu(false)} to='/my-appointments' className={({isActive}) => `px-6 py-3 min-h-[48px] rounded-xl flex items-center transition-all ${isActive ? 'bg-primary text-white shadow-md' : 'hover:bg-gray-50 text-gray-700'}`}>MY APPOINTMENTS</NavLink>
                  <button onClick={() => { logout(); setShowMenu(false); }} className='px-6 py-3 min-h-[48px] flex items-center rounded-xl text-red-500 hover:bg-red-50 active:scale-95 text-left w-full transition-all'>LOGOUT</button>
                </>
            ) : (
                <button onClick={() => { navigate('/login'); setShowMenu(false); }} className='mt-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all w-full min-h-[48px] active:scale-95'>
                  Create Account / Login
                </button>
            )}

            {location.pathname === '/' && (
              <a href={import.meta.env.VITE_ADMIN_URL || 'http://localhost:5174'} target="_blank" rel="noopener noreferrer" className='mt-3 border border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all w-full min-h-[48px] active:scale-95 text-center flex items-center justify-center'>
                Admin Panel
              </a>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
