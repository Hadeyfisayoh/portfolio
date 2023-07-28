import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['d', 'e', 'f', 'i', 's', 'a', 'y', 'o']
    const jobArray = ['s','o','f','t','w','a','r','e',' ', 'e','n','g','i','n','e','e','r','.']

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    
        return () => clearTimeout(idTimeOut);
      }, [])

    return (
      <>
        <div className="container home-page">
            <div className="text-zone">
              <h1><span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
              <img src={LogoTitle} alt="developer" />
              <AnimatedLetters letterClass={letterClass}
              strArray={nameArray}
              idx={15} />
              <br />
              <AnimatedLetters letterClass={letterClass}
              strArray={jobArray}
              idx={18} />
              </h1> 
              <h2>Fullstack Developer / Javascript Expert / Nodejs Expert</h2>
              <Link to="/contact" className='flat-button' >CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
      
      </>
    )
}


export default Home