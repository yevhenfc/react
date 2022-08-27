import config from "./config"
import queryString from 'query-string';

export function loadUsersFetch(options = {}){
    // fetch('https://randomuser.me/api/?results=10')
    // .then( (response) => response.json())
    // .then ( ({results})  => console.dir(results))
    // .catch( (error) => console.log(error))
    const defaultOptions = {
      page: 1,
      reults: 10,
      seed: config.API_KEY,
      inc: config.PROPERTIES
    };

    const opt = {
      ...defaultOptions,
      ...options,
    };
    
    const params = queryString.stringify(opt, {arrayFormat: 'comma'});
    
    (async () => { 
        const response = await 
        // fetch(`${config.BASE_URL}?results=${config.RESULTS}&seed=${config.API_KEY}&page=${config.PAGE}`)
        fetch(`${config.BASE_URL}?${params}`)
        .then( (response) => {
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
         })
        .then ( ({results})  => console.dir(results))
        .catch( (error) => console.log(error))
      }) ();
}

export default {loadUsersFetch} ;

/*
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
*/