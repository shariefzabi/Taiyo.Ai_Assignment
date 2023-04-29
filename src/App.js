import logo from './logo.svg';
//import './App.css'
import  axios from 'axios';
import {BsArrowLeftShort} from "react-icons/bs"
import { useState } from 'react';

import {useQuery,useMutation} from "@tanstack/react-query"

function App() {
  const [open ,setOpen] = useState(true);

 /* const  postQuery = useQuery({
    queryKey:["posts"],
   queryFn:()=>axios.get("https://disease.sh/v3/covid-19/all")
  })
  if(postQuery.isLoading)return <h1>Loading...</h1>
  if(postQuery.isError) return <h1>{JSON.stringify(postQuery.error)}</h1>
  console.log("helo",postQuery.data.data) */
  

  return (

<div className='flex'>
  <div className={`bg-dark-purple h-screen p-5 pt-8  relative  ${open ? "w-72":"w-20"} duration-300 `}>
    <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180" }`} onClick={()=>{console.log("clicked");setOpen(!open)}}></BsArrowLeftShort>
  <li className='text-gray-300  h-20 text-lg flex item-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-5 '>Contact</li>
  <li className='text-gray-300  h-20  text-lg flex item-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-5 '>Charts and Maps</li>
    </div>
  <div className='p-7'><h1>Home Page</h1></div>
</div>

 
  )}

  function wait(duration){
    return new Promise(resolve=>setTimeout(resolve,duration))
  }

export default App;
