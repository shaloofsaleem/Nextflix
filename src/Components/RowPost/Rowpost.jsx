import React, {useState,useEffect} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../Axios'
import { imgUrl,API_KEY } from '../../Constants/Constant'
function Rowpost(props) {
  const [movie,setMovies] = useState([])
  const [urlId,setUrlId] =useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>(
      console.log(response.data),
      setMovies(response.data.results)
      
    )).catch(err=>{

    })

  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }
  const handelMovie =  (id)=>{
    console.log(id)
    axios.get( `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if (response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("ArrayEmpty")
      }

    })
    

  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="poster">
        {movie.map((obj)=>
           <img onClick={() => handelMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster-img'} src={`${imgUrl+obj.backdrop_path}`} alt="poster" />  
        )}
       
      </div>
      {   urlId &&<Youtube opts={opts} videoId= {urlId.key}/>}
    </div>
  )
}

export default Rowpost
