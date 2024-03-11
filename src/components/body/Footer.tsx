import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="text-white p-4 bg-black">
        <div className='md:flex justify-between'>

        
       <div className='my-2'>
        <h2 className="text-3xl py-3 font-bold "><span className="text-orange-500">Adele</span> && <span className="text-indigo-500">Felix</span></h2>
       <p className="md:w-96">Adele originaire du Tchad,nee dans les annees 2000,en couple avec le jeune programmeur Tchadien monsieur Felix.
            Leur histoire d'amour est plutot souriant et leur coeur fondent d'amour l'un pour l'autre,de facon que ce couple
             s'aime montre dans quel univers ils ont de l'affection  l'un pour l'autre .
        </p>
       </div>
        <div className='my-2'>
  <h3 className="text-orange-500 py-3 text-2xl font-bold">Leurs historique</h3>
  <ul>
    <li>- Mot Bb lem mah</li>
    <li>- Mot Felix lem</li>
    <li>- Mot Adele lem</li>
    <li>- Cmt bb,quoi ?</li>
  </ul>
        </div>
        <div className='my-2'>
            <h3 className="text-indigo-500 py-3 text-2xl font-bold">Leurs amour</h3>
            <li>- Mot Bb lem mah</li>
    <li>- Mot Felix lem</li>
    <li>- Mot Adele lem</li>
    <li>- Cmt bb,quoi ?</li>
        </div>
        <div className='my-2'>
            <h3 className="text-2xl font-bold py-3">Leurs origine et leur rencontre</h3>
            <li>Mot Bb lem mah</li>
    <li>Mot Felix lem</li>
    <li>Mot Adele lem</li>
    <li>Cmt bb,quoi ?</li>
        </div>
      
      
    </div>
    <div className='my-4 flex justify-between items-center'>
        <h3 className='md:text-3xl text-sm font-bold'>Suivez notre couple sur :</h3>
       <div className='flex md:gap-8 gap-3'>
       <FontAwesomeIcon icon={faFacebook} className='bg-sky-600 p-2 rounded-full'/>
    <FontAwesomeIcon icon={faInstagram} className='bg-rose-400 p-2 rounded-full'/>
    <FontAwesomeIcon icon={faGithub} className='bg-gray-800 p-2 rounded-full'/>
    <FontAwesomeIcon icon={faXTwitter} className='bg-gray-800 p-2 rounded-full'/>
       </div>

      </div>
      <hr/>
      <div className='flex justify-between text-sm text-gray-400 mt-8'>
        <h2>Les Amoureux &copy;Devsoftware Adele&Felix</h2>
        <h2>Copyright only for love !</h2>
      </div>
    </div>
  )
}

export default Footer
