// What is AppContext used for?

// Global state management — instead of passing props from parent -> child -> grandchild, you create a context and put the shared data there.

// import { createContext } from "react";
import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import {dummyCourses} from '../assets/assets'
import {useNavigate} from 'react-router-dom'
import humanizeDuration from 'humanize-duration'
//added to get token
import {useAuth,useUser} from '@clerk/clerk-react';

// create context
// export const AppContext=createContext();

// provider component
export const AppContextProvider=(props)=>{
    const currency=import.meta.env.VITE_CURRENCY
    const navigate=useNavigate()

    // added to get token
    const {getToken}=useAuth()
    const {user}=useUser()

    const [allCourses,setAllCourses]=useState([])
    const [isEducator,setIsEducator]=useState(true)
    const [enrolledCourses,setEnrolledCourses]=useState([])

    // fetch all courses:
    const fetchAllCourses=async()=>{
        setAllCourses(dummyCourses)
    }
    
    // function to calculate average rating of course:
    const calculateRating=(course)=>{
        if(course.courseRatings.length===0){
            return 0;
        }
        let TotalRating=0;
        course.courseRatings.forEach(rating=>{
            TotalRating+=rating.rating
        })
        return TotalRating/course.courseRatings.length
    }
    // function to calculate chapter duration
    const courseChapterTime=(chapter)=>{
        let time=0
        chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration) 
        return humanizeDuration(time*60*1000,{units:['h','m']})
    }

    // function to calculate course duration
    const calculateCourseDuration=(course)=>{
        let time=0;
        course.courseContent.map((chapter)=>chapter.chapterContent.map(
            (lecture)=>time+=lecture.lectureDuration
        ))
        return humanizeDuration(time*60*1000,{units:['h','m']})
    }

    // function to calculate number of lectures in the course
    const calculateNoOfLectures=(course)=>{
        let totalLectures=0
        course.courseContent.forEach(chapter=>{
            if(Array.isArray(chapter.chapterContent)){
                totalLectures+=chapter.chapterContent.length
            }
        })
        return totalLectures;
    }

    // fetch user enrolled courses:
    const fetchEnrolledCourses=async()=>{
        setEnrolledCourses(dummyCourses)
    }

    useEffect(()=>{
        fetchAllCourses(),
        fetchEnrolledCourses()
    },[])

    // added to get token
    const logToken=async()=>{
        console.log(await getToken());
    }

    useEffect(()=>{
        if(user){
            logToken()
        }
    },[user])

    // to access around whole website add it in value
    const value={
        currency,
        allCourses,
        navigate,
        calculateRating,
        isEducator,
        setIsEducator,
        calculateCourseDuration,
        calculateNoOfLectures,
        courseChapterTime,
        enrolledCourses,
        fetchEnrolledCourses
    };

    return (
        <AppContext.Provider value={value}>
            {props.children} 
        </AppContext.Provider>
    );
};