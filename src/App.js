import React from 'react';
// import User  from './Components/User';
// import Counter from './Components/Counter';
import UserList from './Components/UserList';
import CarList from './Components/CarList';

export default function App() {
  return (
   <>
    <UserList />
    <CarList />
    </>
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