
import { Route, Routes } from "react-router-dom"
import "./app.css"
import Navbar from './navbar/Navbar'
import Home from "./pages/Home"
import {motion} from "framer-motion"
import { useEffect,useState } from "react"

function App() {
  // const [count, setCount] = useState(false)

  const [isloaded,setIsloaded]=useState(false);
  useEffect(()=>{
      setTimeout(() => {
          setIsloaded(true)
      },9000);
  },[])
  if(!isloaded){
     return(
      <div className='preloader bg-gray-100'>
        <motion.img 
        initial={{x:100,scale:.3,y:50,opacity:.5}}
        transition={{duration:2}}
        whileInView={{x:-10,scale:1,opacity:1}}
        src="/adele1.jpg" className="w-24 h-24 rounded-full" alt="" />
       <span className='animation1'>B</span>
        <span className='animation2'>b</span>
        <span className='animation3'> L</span>
        <span className='animation4'>e</span>
        <span className='animation5'>m</span>
        <motion.img 
        initial={{x:-100,opacity:.5,y:-50}}
        transition={{duration:2}}
        whileInView={{x:10,opacity:1}}
        src="/adele2.jpg" className="w-24 h-24 rounded-full" alt="" />
       </div>
     )
  }

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

    </>
  )
}

export default App
