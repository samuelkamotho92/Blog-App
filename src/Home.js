/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React from 'react'

import {useState,useEffect} from 'react'

import BlogList from './blogsList';
import useFecth from "./useFetch.js"

const Home = () => {
    const title = 'SamkamDev';
   const {data:blogs,error,ispending} = useFecth("http://localhost:8000/blogs");
    return ( 
        <div className="homepage">
            <h1 style={{textAlign:"center"}}> Welcome to <span style={{color:" #f1356d"}}>{title}</span>  Projects Page</h1>
            
            {error && <div>{error}</div>}
            {ispending && <div>Loading...</div>}
            
            {/* jsx inside the js always inside a parathesis */}
   {blogs &&  <BlogList blogs={blogs} project="projects" />}
        </div>
    
 
     );
}
 
export default Home;