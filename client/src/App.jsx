// import React from 'react' 

import { Route, Routes } from "react-router-dom"
import Home from "./pages/student/Home"
import CoursesList from "./pages/student/CoursesList"
import CourseDetails from "./pages/student/CourseDetails"
import MyEnrollments from "./pages/student/MyEnrollments"
import Player from "./pages/student/Player"
import Loading from "./components/student/Loading"
import Educator from "./pages/educator/Educator"
import Dashboard from "./pages/educator/Dashboard"
import AddCourse from "./pages/educator/AddCourse"
import MyCourses from "./pages/educator/MyCourses"
import StudentEnrolled from "./pages/educator/StudentsEnrolled"
import Navbar from "./components/student/Navbar"


const App = () => {
  
  return (
    <div className="text-default min-h-screen bg-white">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course-list" element={<CoursesList/>} />
        <Route path="/course-list/:input" element={<CoursesList/>} />
        {/* Filtered course list */}
        <Route path="/course/:id" element={<CourseDetails/>}/>
        <Route path="/my-enrollments/:id" element={<MyEnrollments/>}/>
        <Route path="/player/:courseId" element={<Player/>}/>
        <Route path="/loading/:path" element={<Loading/>}/>
        <Route path="/educator" element={<Educator/>}>
            <Route path="educator" element={<Dashboard/>}/>
            <Route path="add-course" element={<AddCourse/>}/>
            <Route path="my-courses" element={<MyCourses/>}/>
            <Route path="student-enrolled" element={<StudentEnrolled/>}/>
        </Route>
      </Routes>
      
      {/* Debug: Adding direct text to see if App renders */}
      {/* <h1>App is working - Remove this after testing</h1> */}
    </div>
  )
}

export default App