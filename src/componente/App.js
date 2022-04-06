import React from "react";
import {getuser,deleteuser} from "./UserApi";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      user:{}
    };
  }
  
  componentDidMount ()  {
  getuser()
  .then(response =>{
    this.setState({
      users: response.data
    });
    console.log(response.data);})
  .catch( () => alert("حدث خطأ في التحميل"));
    
  }

  setview = (user) => {
    this.setState({
      user: user
    })
  }

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
        
        <h3>user view</h3>
        {
          this.state.user.id > 0 ? (
            <>
              <div>Name: {this.state.user.name}</div>
              <div>Email: {this.state.user.email}</div>
            </>
          ) : (<div>please select a view</div>)
        }
      </div>
    );
  }
}
