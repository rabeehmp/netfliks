import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./RowPost.css";
import { imageUrl, API_KEY } from "../../constants/constants";
import axios from "../../axios";

function RowPostMovie(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState(null);
  const [videoStarted, setVideoStarted] = useState(false);


  console.log(urlId,"urlId")

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, []);
  

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      modestbranding: 1,
      autoplay: 1,
      showinfo: 0,
      controls: 1,
      disablekb: 0,
    },
  };
  const handleTV = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        if (response?.data?.results?.length > 0) {
          setUrlId(response?.data?.results[0]);
        }
        console.log("Triler not available");
      });
  };

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.mute(); // Mute the video (optional)
    event.target.playVideo(); // Auto-play the video
  };

  const onStateChange = (event) => {
    // Hiding elements after video starts playing (state 1)
    if (event.data === 1 && !videoStarted) {
      setVideoStarted(true);
      event.target.setOption('modestbranding', 1);
      event.target.setOption('showinfo', 0);
      event.target.setOption('controls', 0);
      event.target.setOption('disablekb', 1);
    }
  };

  return (
    <div
      className="row"
      style={{
        backgroundColor: "#111",
        width:"100vw",  
        color: "#fff",
      }}
    >
      <h2
        id="title"
        style={{
            
          paddingInline: "20px",
        }}
      >
        {props.title}
      </h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleTV(Number(obj.id))}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.poster_path}`}
          />
        ))}
      </div>
      {urlId && <YouTube videoId={urlId?.key} opts={opts}  onReady={onReady}
          onStateChange={onStateChange}/>}
    </div>
  );
}

export default RowPostMovie;
