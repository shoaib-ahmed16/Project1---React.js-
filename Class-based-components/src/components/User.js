import classes from './User.module.css';
import { Component } from 'react';

// class based components
class User extends Component {
  constructor(){
    super();
  }
  componentWillUnmount(){
    console.log("User will unmount!");
  }
  render(props){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

//functional component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
