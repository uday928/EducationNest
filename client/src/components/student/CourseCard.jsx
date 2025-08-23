import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'



const CourseStart = ({course}) => {

  const {currency}=useContext(AppContext)

  return (
    <div>
      {/* a single course card / dummy data will come from assests.js*/}
      <img src={course.courseThumbnail} alt="" />
      <div>
        <h3>{course.courseTitle}</h3>
        <p>{course.educator.name}</p>
        <div>
          {/* Manual for now will be dynamic after */}
          <p>4.5</p>
          <div>
            {[...Array[5]].map((_,i)=>(
              <img key={i} src={assets.star} alt=''/>
            ))}
          </div>
          <p>22</p>
        </div>
        {/* upto 2 decimal digits */}
        <p>{currency}{(course.coursePrice - course.discount * course.coursePrice/100).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CourseStart