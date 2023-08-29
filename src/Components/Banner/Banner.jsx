import React, { useEffect, useState } from 'react'
import {API_KEY,imgUrl} from'../../Constants/Constant'
import './Banner.css'
import { FaPlay,FaPlus } from "react-icons/fa";
import axios from '../../Axios';

function Banner() {
  const[movie,setMovie]= useState([])
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[1])
      setMovie(response.data.results[1])
    })

  }, [])
  return (
    <div style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path :""})`   }}
     className='banner' >
        <div className="content">
            <h1 className="title">{movie ? movie.title : ""}</h1>
            <div>
                <button className="btn btn-play"><FaPlay/> Play</button>
                <button className="btn btn-list"><FaPlus/> My List</button>
            </div>
            <div className="description">
                <h3 className="move-part">Part-3 New Series</h3>
                <p>{movie ? movie.overview : ""}</p>

            </div>
            <div className="fade">
                
            </div>
        </div>
      
    </div>
  )
}

export default Banner
