// import logo from './logo.svg';
import './App.css';
import Greeting from './Components';
const user = {
  name: 'John',
  surname: 'Fox'
};


function App() {
  return (
    <Greeting userName={user.name} userSurname={user.surname}/>
  );
}

export default App;
