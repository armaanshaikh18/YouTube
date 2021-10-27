import React from "react";
import Items from "./items";
const Lists = (props)=> {

    return(
        props.videolist.map((item)=> <Items videoItem={item} key={item.id.videoId} video={props.videoData} />)
    )
};
export default Lists;