import { Component, Fragment} from 'react';
import './App.css';

import Hello from './Components/Hello';
import HelloClass from './Components/HelloClass';

const user = {
  userName: 'Tom',
  userSurname: 'Fox',
  email: '12312@123'
};

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: 'unknown',
      userSurname: 'unknown',
      email: 'unknown'
    };
  }
  loadUser = () => {
    this.setState({
      userName: user.userName,
      userSurname: user.userSurname
    });
  }

  render(){

    const {userName, userSurname} = this.state;
    return(
    <>  
      <button onClick={this.loadUser}>load</button>
      <HelloClass name={userName} surname={userSurname}/>
    </>
    )
  }
}

export default App;