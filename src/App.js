import { Component, Fragment} from 'react';
import './App.css';
import Counter from './Components/Counter';

export default class App extends Component{
  constructor(props){
    super(props);
    };
  
  render(){
    return(
      <>
        <Counter step={1}/>
      </>
    )
  }
}
