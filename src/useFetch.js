/* eslint-disable no-unused-vars */
import React from 'react'
import {useState,useEffect} from 'react'

const useFetch = ()=>{
    const [data,setdata] = useState(null);
    const [ispending,setpending] = useState(true);
    const [error,setError] = useState(false);
//fecth function

const fetchBlogs =  async(url)=>{
   try{
       const resp = await fetch(url);
       if(!resp.ok){
throw Error("cannot be able to find projects blogs");
       }
       const data = await resp.json()
       setError(false);
       setpending(false);
       setdata(data);
   }catch(err){
       setpending(false);
       setError(err.message);
   }

}


    //function to handle DELETE

useEffect(()=>{
   // fetch data 
    const dburl = "http://localhost:8000/blogs"
    fetchBlogs(dburl)
},[])

return {data,error,ispending}

}

export default useFetch;