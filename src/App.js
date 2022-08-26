/*
import React from 'react'
import {Link, Route, Routes, NavLink} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Products from './Pages/Products';
import NotFound from './Pages/NotFound';
import MainMenu from './Components/MainMenu';
import Header from './Components/Header';
import CounterFun from './Components/CounterFun';
import LoadUsers from './Components/LoadUsers';
export default function App() {
  return (
    <>
      <LoadUsers />
     <Routes>
          <Route path='/' element={<MainMenu />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products/*' element={<Products />} />
            <Route path='*' element={<NotFound />} />
          </Route>
      </Routes>
    </>
  )
}
*/

// import LoadUsers from './Components/LoadUsers';
import React  from 'react';
import axios from 'axios';

const options = {
  results: 5,
  seed: 'PD2022',
  page: 1,
}

function loadRandomUsersFetch({results, seed, page}){
  (async () => { 
    const response = fetch(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`)
    .then( (response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
     })
    .then ( ({results})  => console.dir(results))
    .catch( (error) => console.log(error))
  }) ();
}

const configAxios = {
  timeout: 2000,
  inDownloadPogress: (event) => console.log(event.loaded),
  onUploadPogress:   (event) => console.log(event.loaded)
}

function loadRandomUsersAxios({results, seed, page}){
  (async () => {
    const response = await axios
    .get(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`
      ,configAxios
      )
    .then( (response) => {
      console.log('Axios')
      console.log(response.data.results)
    })
    .catch( (error) => console.log(error))
  }) ();
}


function App(){
  loadRandomUsersFetch(options);
  //loadRandomUsersAxios(options);
  return (
    <>
      <p>Load users</p>
    </>
  );
}

export default App;