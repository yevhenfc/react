import React, { Component} from 'react';
// import User  from './Components/User';
// import Counter from './Components/Counter';
import UserList from './Components/UserList';

export default function App() {
  return (
    <UserList/>
  )
}


// export default class App extends Component{
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        name: 'Tom',
//        surname: 'Fox',
//        age: 20,
//        isSelected: false,
//     }
//   }
  
//   selectHandler = () => {
//     const {isSelected} = this.state;
//     this.setState ({isSelected: !isSelected});
//   }

//   render() {
//     const {name, surname, age, isSelected} = this.state;
//     return (
//       <>
//       <Counter step={1} />
//       <User 
//         name       = {name}
//         surname    = {surname}
//         age        = {age}
//         isSelected = {isSelected}
//         selectHandler = {this.selectHandler}
//       />
//       </>
//     )
//   }
// }