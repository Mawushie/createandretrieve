import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserForm from './components/UserForm';
import UserItem from './components/UserItem';
import UserList from './components/UserList';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users : [] //setting up an empty array here so that the users can be updated here

    }
  }

  //a function that will take the list of users
  addUser = (user) => {
    this.setState({
      users :[...this.state.users, user] //copying each user into the array
    })
  }

  render(){
    return (
      <div className="row">
        <div className = "col-md-6 userinput">
          <UserForm addUser = {this.addUser} />
        </div>
        
        <div className = "col-md-6 userlist">
          <UserList users = {this.state.users}/>   
        </div>
        
      </div>
  
    );
  }
  
}

export default App;
