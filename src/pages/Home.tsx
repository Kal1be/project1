import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import {motion} from "framer-motion"
import First from '../components/body/First'
import Scroll from '../components/Scroll'
import Footer from '../components/body/Footer'
import Temoin from '../components/body/Temoin'
function Home() {
  return (
    <div>
        
    <div className='md:px-12 px-4 pt-32 md:flex justify-around'>
      
      <div className=' flex'>
          <motion.div
            animate={{scale:0.9,rotate:-8000000000}}
           className='w-20 h-40 rounded-full animat'></motion.div>
                <div  className='anima rounded-full w-56 h-72'>
                 <div className='flex justify-center mt-20 gap-8'>
                  <div className='w-12 h-16 mt-2 flex justify-center pt-4 anima rounded-full'>
                    <motion.span 
                    initial={{y:0}}
                    animate={{y:-14}}
                    className='p-2 rounded-full w-8 bg-gray-300 h-8 '></motion.span>
                  </div>
                  <div className='w-12 h-16 mt-2 flex justify-center pt-4 anima rounded-full'>
                    <span className='p-2 rounded-full w-8 bg-gray-300 h-8 '></span>
                  </div>
                 </div>
  
                 <div className='w-full flex justify-center'>
                  <span className='w-8 h-8 bg-slate-800 rounded-xl'></span>
                 </div>
                 <div className=' justify-center flex '>
                  <span className='w-28 rounded-full h-12 mt-2 bg-white'>
                    <p className='bg-[#00000a] w-28 h-6 rounded-full'>
                    
                    </p>
                  </span>
                 </div>
                </div>
          <motion.div 
          animate={{scale:0.9,rotate:21}}
          className='w-20 h-40 rounded-full animat'>
        </motion.div>
      </div>
      <div>
  <h2 className='md:text-4xl text-2xl py-2 font-bold text-orange-500'>
    Ma femme,ma moitie es-tu prete ?
  </h2>
  <p className='text-white md:w-[600px] text-xl'>
    Te rappelle tu de la premiere fois qu'on c'etait dis oui,
    on etait tous deux heureux vue nos difference,la vie 
    nous garde toujours des surprises et pour nous deux c'etait plus que de la magie.
    Il ya plus rien entre nous deux Bb lem,je me rappelle de ta facon de m'appeller Felix Lem mah c'etait si doux a entendre !
    Coucou matinale de ta part me fait vraiment perdre mon repere et je la recupere a chaque fois que je te vois c'etait plutot sexy pour moi !
    Je t'aime mon coeur ?
  
  </p>
  <button className='bg-indigo-500 text-black font-bold  my-4 px-4 py-2 text-xl '>Clique ici Bb lem mah</button>
  <div className='flex text-white justify-between'>
    <motion.h3
    initial={{x:-20,scale:0.4}}
    transition={{duration:.3,type:"tween"}}
    whileInView={{x:0,scale:1}}
    className='text-2xl font-bold'>Felix tu ...?</motion.h3>
  <motion.div
    initial={{y:30,scale:0.4}}
    transition={{duration:.3,type:"tween"}}
    whileInView={{y:0,scale:1}}
  className='flex md:gap-8 gap-4'>
  <FontAwesomeIcon icon={faFacebook} className='bg-sky-600 p-2 rounded-full'/>
    <FontAwesomeIcon icon={faInstagram} className='bg-rose-400 p-2 rounded-full'/>
    <FontAwesomeIcon icon={faGithub} className='bg-gray-800 p-2 rounded-full'/>
    <FontAwesomeIcon icon={faXTwitter} className='bg-gray-800 p-2 rounded-full'/>
  </motion.div>
  </div>
      </div>
      </div>
  <First/>
  <Scroll/>
  <Temoin/>
      <Footer/>
    </div>
  )
}

export default Home
