import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Scroll() {
    const [visible,setVisible] = useState(false)
    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
          setVisible(true) 
        }  
        else if (scrolled <= 300){ 
          setVisible(false) 
        } 
      }; 
      
      const scrollToTop = () =>{
        alert("je t'aime bb lem mah") 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
          /* you can also use 'auto' behaviour 
             in place of 'smooth' */
        }); 
      }; 
      
      window.addEventListener('scroll', toggleVisible); 
  return (
    <div>
       <p onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className="fixed rounded-full bg-orange-500 bottom-4 md:right-6 right-4 py-2 px-3 text-white">
        Bb lem mah
        <FontAwesomeIcon icon={faHeart} className="px-2 text-2xl"/>
        </p>
    </div>
  )
}

export default Scroll