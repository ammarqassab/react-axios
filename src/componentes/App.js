import React from "react";
import Editview from "./Editview";
import {getuser,deleteuser,updateuser} from "./UserApi";
import Userview from "./Userview";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      user:{}
    };
  }
  //get user
  componentDidMount ()  {
  getuser()
  .then(response =>{
    this.setState({
      users: response.data
    });
    console.log(response.data);})
  .catch( () => alert("حدث خطأ في التحميل"));
    
  }
  // set user
  setview = (user) => {
    this.setState({
      user: user
    })
  }
  // delete user
  deleteuser = (user) => {
    deleteuser(user.id)
    .then( () => {
      let users = this.state.users;
      const index = users.indexOf(user);
      users.splice(index, 1);
      this.setState({users});
      console.log(users);
    })
    .catch( () => alert("حدث خطأ في الحذف"))
  }
  //Change state user
  handleChange = (event) => {
    if(event.target.type === 'email') {
      this.setState({user:{
        ...this.state.user,
        email: event.target.value
      }
      });
    }
    if(event.target.type === 'text') {
      this.setState({user:{
        ...this.state.user,
        name: event.target.value
      }
      });
    }

  }
  //edit user
  edituserSubmit = (event) => {
    const id = this.state.user.id;
    const values = this.state.user;
    let users = this.state.users;

    updateuser(id, values)
    .then( (responsee) => {
      users.splice(id - 1, 1, responsee.data);
      console.log(responsee.data);
      this.setState({
        users:users
      });
    })
    .catch( () => alert("حدث خطأ في التحديث"));

    event.preventDefault();
  }


  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user =>
          <li key={user.id}>
            {user.name} {" "}
          <button onClick={() => this.setview(user)}>view</button> {" "}
          <button onClick={() => this.deleteuser(user)}>delete user</button>
          </li>
          )}
        </ul>
        
        <Userview value={this.state.user}/>

        <Editview value={this.state.user} handleChange={this.handleChange} edituserSubmit={this.edituserSubmit} />

      </div>
    );
  }
}
