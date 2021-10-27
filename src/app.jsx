import React, { Component } from "react";
import axios from "axios";
import Lists from "./list";
import Searchfiled from "./component/searchfiled";
import VideoDetails from "./component/videodetails";

class App extends Component {
  constructor() {
    super();
    this.state = {
      video: [],
      selectedVideo: "",
    };
  }
  componentDidMount() {
    this.fetchSearchInputdata("Dil Bechara");
  }

  fetchSearchInputdata = async (data) => {
    let response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: data,
          part: "snippet",
          type: "video",
          maxResult: "10",
          key: "AIzaSyA5o6dZDgpGJvzgVpokiaLRfB-Fvl9pZ7k",
        },
      }
    );

    this.setState({ video: response.data.items });
    this.setState({selectedVideo: response.data.items[0]});
  };
  selectedVideoDta = (data) => {
    console.log(data);
    this.setState({ selectedVideo: data });
    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Searchfiled inputdata={this.fetchSearchInputdata}/>
              </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <VideoDetails selectedVideo={this.state.selectedVideo}/>
              </div>

            <div className="col-md-4">
              <Lists
                videolist={this.state.video}
                videoData={this.selectedVideoDta}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
