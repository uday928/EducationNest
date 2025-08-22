import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

// Student nagivation bar

const navbar = () => {

  const isCourseListPage=location.pathname.includes('/course-list')
  


  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white':'bg-cyan-100/70'}`}>
      <img src={assets.logo} alt="Logo" className='w-20 lg:w-32 cursor-pointer' />
      {/* Laptop view content */}
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div>
          <button>Become Educator</button>
          <Link to="/my-enrollments">My Enrollments</Link>
        </div>
        <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create account</button>
      </div>
      <div>

      </div>
    </div>
    
  )
}

export default navbar