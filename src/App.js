import React from 'react'
import loadUsersFetch from '../src/settings/api.js'
import LoadUsers from './Components/LoadUsers/index.jsx';

function App(){
  loadUsersFetch();
  //loadRandomUsersAxios(options);
  return  <LoadUsers />
}

export default App;