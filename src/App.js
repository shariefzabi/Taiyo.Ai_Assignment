import logo from './logo.svg';
import './App.css';
import  axios from 'axios';

import {useQuery,useMutation} from "@tanstack/react-query"

function App() {

 const  postQuery = useQuery({
    queryKey:["posts"],
   queryFn:()=>axios.get("https://disease.sh/v3/covid-19/all")
  })
  if(postQuery.isLoading)return <h1>Loading...</h1>
  if(postQuery.isError) return <h1>{JSON.stringify(postQuery.error)}</h1>
  console.log("helo",postQuery.data.data)
  return (

<div>
  <p className=''>this tailwiond</p>
</div>

 
  )}

  function wait(duration){
    return new Promise(resolve=>setTimeout(resolve,duration))
  }

export default App;
