import { Component, Fragment} from 'react';
import './App.css';
import UserCard from './Components/UserCard'; 

const currentUser1 = {
  fullName: 'John Fox',
  email: 'john@mail.com',
  tel: '+5-123-12345-34',
  imgSrc: 'https://img.freepik.com/free-vector/man-developer-reports-about-new-startup-project_82574-8385.jpg?w=2000'
}

const currentUser2 = {
  fullName: 'SDADAD',
  email: 'asascom',
  tel: '+5-',
  imgSrc: 'https://img.freepik.com/free-vector/man-developer-reports-about-new-startup-project_82574-8385.jpg?w=2000'
}

const currentUser3 = {
  fullName: 'zxczzv',
  email: 'gdfgdfg',
  tel: '-34',
  imgSrc: 'https://img.freepik.com/free-vector/man-developer-reports-about-new-startup-project_82574-8385.jpg?w=2000'
}

export default class App extends Component{
  constructor(props){
    super(props);
    }
  
  render(){
    return(
      <>
      <UserCard user={currentUser1} />
      <UserCard user={currentUser2} />
      <UserCard user={currentUser3} />
      </>
    )
  }
}
