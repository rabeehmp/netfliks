import React, { useEffect } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import axios from "../../axios";
import "./Banner.css";
import { useState } from "react";
import YouTube from "react-youtube";

function Banner() {

  const [movie, setMovie] = useState();

  const [isTrailerPlaying,setIsTrailerPlaying] = useState(false)

  const [isTrailerPlay,setIsTrailerPlay] = useState(false)

  useEffect(() => {
    console.log(API_KEY, "api key");
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0]);
      });
  }, []);

  const opts = {
    height: "450",
    width: "500",
    playerVars: {
      modestbranding: 1,
      autoplay: 1,
      showinfo: 1,
      controls: 1,
      disablekb: 1,
    },
  };

  const playTrailer = () => {
    setIsTrailerPlaying(true);
  };

 const playTraile = () => {
    setIsTrailerPlay(true);
  };

  return (
    <div className="banner" style={{ position: "relative" }}>
    {isTrailerPlaying ? (
      <div style={{ float: "right", marginRight: "20px" }}>
        <YouTube videoId={"uYPbbksJxIg"} opts={opts} />
      </div>
    ) : (
      <video autoPlay loop muted style={{ width: "100%", height: "100%" }}>
        <source src="ban_v.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
    <div className="content" style={{ position: "absolute", top: 200, left: 0, padding: "0px" }}>
      {/* ... (existing code) */}
      <div style={{ float: "right", marginRight: "1px" }}> 
      {/* {isTrailerPlaying && <YouTube videoId={"uYPbbksJxIg"} opts={opts}  />} */}
      {isTrailerPlay && <YouTube videoId={"GV3HUDMQ-F8"} opts={opts}  />}
      </div>
      <div className="content">
        <h1 className="title"> {movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button" onClick={()=> playTrailer()}>Play</button>
          <button className="button" onClick={()=> playTraile()}>My list</button>
        </div>
        <h1 className="discription">{movie ? movie.overview : ""}</h1>
       
      </div>
      <div className="fade_bottom"></div>
    </div>
  
      

      
     
    </div>
  );
}

export default Banner;
