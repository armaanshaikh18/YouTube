import React from "react";
const VideoDetails= ({selectedVideo}) => {
    if(!selectedVideo) {return <h1>LOADING...</h1>}
    let url =`https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
   return(
       <React.Fragment>
          <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <h4>
           {selectedVideo.snippet.title}
       </h4>

       </React.Fragment>
   )  

};
export default VideoDetails;