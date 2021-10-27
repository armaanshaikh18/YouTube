import React,{Component} from "react";
class Searchfiled extends Component{
    constructor(){
        super();
        this.state = {
            searchvideo:''
        }
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        let {searchvideo} =this.state;
        console.log("Search Bar",searchvideo); 
        this.props.inputdata(searchvideo);
       
    }

    render(){
        let {searchvideo} =this.state;
        return(
            <div className ="container">
                <div className = "row">
                    <div className ="col-md-12">
                        <form onSubmit ={this.handleFormSubmit}>
                            <div className ="form-group">
                                <input type ="search" placeholder="search here"
                                className="form-control"
                                name="searchvideo"
                                onChange={(e)=>this.setState({searchvideo:e.target.value})}
                                value={searchvideo}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    

}
export default Searchfiled;