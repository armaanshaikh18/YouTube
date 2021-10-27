import React from "react";
const Items =(props) => {
    console.log(props);
    if(!props.videoItem){return <h1>loading..</h1>}
    return(
        <React.Fragment>
            <div className="card " style={{width:'400px'}}
            onClick={()=>props.video(props.videoItem)}
            >
              <img className="card-img-top" src={props.videoItem.snippet.thumbnails.high.url}
               alt={props.videoItem.snippet.thumbnails.high.title} style={{width:'100%'}} />
              <div className="card-body">
                <h4 className="card-title">{props.videoItem.snippet.title}</h4>
                <p className="card-text">{props.videoItem.snippet.description}</p>
              </div>
            </div>
        </React.Fragment>
    )
}
export default Items;
