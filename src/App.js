import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserForm from './components/UserForm';
import UserItem from './components/UserItem';
import UserList from './components/UserList';
import EditUserForm from './components/EditUserForm';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users : [] //setting up an empty array here so that the users can be updated here

    }
  }

  //a function that will take the list of users' Information
  
  addUser = (user) => {
    user.id = 100 * Math.random() * 100000;
    this.setState({
      users :[...this.state.users, user] //copying each user into the array
    })
    // console.log({user});
  }

  deleteUser = (id) =>{
   this.setState({
     users : this.state.users.filter(user => user.id !==id) //show the state of the users to display all the others except 
     //the one that matches the ID i want to delete

   })
  }

  //goes through the users array and finds the one with the ID we wanna delete
  //and returns the new information entered by the user
  
  updateUser = (id,updatedUserInfo) =>{
     let newUsers= this.state.users.map((user) => {
      if(user.id === id){
        return updatedUserInfo;
      }
      return user;
    })
    this.setState({
      users: newUsers
    })
  }

  render(){
    return (
      <div className="row">
        <div className = "col-md-6 userinput">

          <UserForm addUser = {this.addUser} /> 
        </div>
        
        <div className = "col-md-6 userlist">
          <UserList 
          users = {this.state.users} 
          deleteUser = {this.deleteUser} 
          updateUser = {this.updateUser}/>   
        </div>
        
      </div>
  
    );
  }
  //we want the UserForm component to be able to access the users array so we pass it as a prop
  //We also want the UserList to have access to the users so we also pass it as a prop
  //but remember that in UserList component, we are returning the UserItem component.
  //So we have to give the user as a prop to the userItem....
  //for the delete too, you give it as props to the userList
}

export default App;
