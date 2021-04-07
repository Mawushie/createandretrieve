import React from 'react';

class UserForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username : "",
            email : "",
            country : "",
            password : ""
        };
    }
    //set the value of what is typed by user into the state
    handleOnChange = (event) => {
        this.setState(
           { [event.target.name] : event.target.value} //gets the value for whatever was typed and puts it in the respective inputs
        )
    }

    handleSubmit = () => {
        this.props.addUser(this.state);
    }

    render(){
        return (
            <div>
                <form>
                    <h2>SignUp Form</h2>
                    <label>Username</label> <br></br>
                    <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleOnChange}></input> <br></br>

                    <label>Email</label> <br></br>
                    <input type = "text" name = "email" value = {this.state.email} onChange = {this.handleOnChange}></input> <br></br>

                    <label>Country</label> <br></br>
                    <input type = "text" name = "country" value = {this.state.country} onChange = {this.handleOnChange}></input> <br></br>

                    <label>Password</label> <br></br>
                    <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleOnChange}></input> <br></br>

                    <br></br>
                    
                    <button type="button" onClick = {this.handleSubmit}>Create User</button>
                </form>
            </div>
        )
    }
}

export default UserForm;