import { Component, Fragment} from 'react';
import './App.css';
import Card from './Components/Card';
import User from './Components/User';

export default class App extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     user: {
  //       name: "Jeka",
  //       email: "3@#",
  //       imgSrc: '#',
  //     }
  //   }  
  // };
  
  render(){
    return(
      <>
        <User />
      </>
    )
  }
}
