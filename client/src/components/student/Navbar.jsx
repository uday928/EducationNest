import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton,useUser } from '@clerk/clerk-react'

// Student nagivation bar

const Navbar = () => {

  const isCourseListPage=location.pathname.includes('/course-list')
  
  const {openSignIn}=useClerk() 
  // openSignIn ==>clerk gives this function in return so use the same spelling with same cammel case
  const {user}=useUser()

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white':'bg-cyan-100/70'}`}>
      <img src={assets.logo} alt="Logo" className='w-20 lg:w-32 cursor-pointer' />
      {/* Laptop view content */}
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5'>
          {user && 
          <><button>Become Educator</button>
          | <Link to="/my-enrollments">My Enrollments</Link>
          </>
          } 
        </div>
        { user
        ? <UserButton/>
        : <button onClick={()=>openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create account</button>
        }
        {/* <button onClick={()=>openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create account</button> */}
      </div>
      {/* For mobile screens */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs '>
          {user &&
            <>
              <button>Become Educator</button>
              | <Link to="/my-enrollments">My Enrollments</Link>
            </>
          }
        </div>
        {user 
        ? <UserButton/>
        : <button onClick={()=>openSignIn()}><img src={assets.user_icon} alt="" /></button>
        }
      </div>
    </div>
    
  )
}

export default Navbar