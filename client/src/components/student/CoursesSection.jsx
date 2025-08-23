import React from 'react'
import { Link } from 'react-router-dom'

const CoursesSection = () => {
  return (
      <div className='py-16 md:px-40 px-8'>
        <h2 className='text-3xl text-gray-800 font-medium'>Level up with world-class instructors</h2>
        <p className='text-sm md:text-base text-gray-500 mt-3'>From tech to creativity, business to wellness, our top-rated courses are designed to drive real growth.</p>



        {/* scrollTo will scroll the webpage to top */}
        <Link to={'/course-list'} onClick={()=>scrollTo(0,0)}
        className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>Show all courses</Link>
    </div>
  )
}

export default CoursesSection