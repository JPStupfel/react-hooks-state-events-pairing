import react from "react";

export default function Videocard(video){
  
  return(
      <>
        <iframe
        className="video"
        width="919"
        height="525"
        src={video.video.embedUrl}
        frameBorder="1000"
        allowFullScreen
        title={video.video.title}
      />
      <h1>{video.video.title}</h1>
      </>
    )
}