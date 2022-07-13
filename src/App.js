import { Component, Fragment} from 'react';
import './App.css';

import Hello from './Components/Hello';
import HelloClass from './Components/HelloClass';

function App(){
  return (
    <>
      <Hello usName={'Vasya'} usSurname={'Pupkin'}/>
      <Hello usName={'Vasya'} usSurname={'Pupkin'}/>
      <Hello usName={'Vasya'} usSurname={'Pupkin'}/>
      <HelloClass usName={'Peter'} usSurname={"o'Kin"}/>
    </>
  );
}
export default App;