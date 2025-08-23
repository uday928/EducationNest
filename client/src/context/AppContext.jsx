// What is AppContext used for?

// Global state management — instead of passing props from parent -> child -> grandchild, you create a context and put the shared data there.

// import { createContext } from "react";
import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import {dummyCourses} from '../assets/assets'
import {useNavigate} from 'react-router-dom'

// create context
// export const AppContext=createContext();

// provider component
export const AppContextProvider=(props)=>{
    const currency=import.meta.env.VITE_CURRENCY
    const navigate=useNavigate()
    const [allCourses,setAllCourses]=useState([])
    const [isEducator,setIsEducator]=useState(true)

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

    useEffect(()=>{
        fetchAllCourses()
    },[])

    // to access around whole website add it in value
    const value={
        currency,
        allCourses,
        navigate,
        calculateRating,
        isEducator,
        setIsEducator
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};