import React from "react";

class UserItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "row text-center">
            <div className = "col-md-3">
                <h4>Username</h4>
                {this.props.user.username}
            </div>

            <div className = "col-md-4">
                <h4>Email</h4>
                {this.props.user.email}
            </div>

            <div className = "col-md-2">
               <h4>Country</h4>
                {this.props.user.country}
            </div>

            <div>
                <h4>Action</h4>
                <button className = "btn btn-success">Edit</button>
                <button className = "btn btn-danger">Delete</button>
            </div>

        </div>
        )
    }
}

export default UserItem;