import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-d.png'
import pdf from '../../assets/files/resume.pdf'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const alohaArray = ['A', 'l', 'o', 'h', 'a', ',']
  const nameArray = ['a', 'n', 'i', 'e', 'l', ' ', 'Y', 'u', '-', 'c', 'u', 'a']
  //const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']
  useEffect(
    () => {
      let timer1 = setTimeout(() => setLetterClass('text-animate-hover'),  4000);
      return () => {
        clearTimeout(timer1);
      };
    },[]
  );

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <AnimatedLetters
            letterClass={letterClass}
            strArray={alohaArray}
            idx={8}
          />
          <span className={`${letterClass} _12`}>&#127802;</span>
          <br /> 
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          
        </h1>
        <h2> FullStack Engineer / Data Analyst / IT Solutions / Designer </h2>
        <a href= {pdf} target="_blank" rel="noreferrer">
          resume
        </a>
        <Link to= {pdf} target="_blank" className="flat-button">
            {' '}
            VIEW RESUME
          </Link>
      </div>
      <Logo />
    </div>
    <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Home
