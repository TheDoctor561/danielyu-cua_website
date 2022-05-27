import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  faPython,
  faCss3,
  faGitAlt,
  faAws,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import pdf from "../../assets/files/resume.pdf"

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 4000)
    return () => {
      clearTimeout(timer1)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I graduated from the University of Maryland College Park with a B.S.
            in Computer Science and am pursuing a M.S. in Data Analytics at the
            University of Maryland Global Campus.
          </p>
          <p align="LEFT">
            I code my websites using cutting edge frameworks like react and host
            them using AWS. I am a certified AWS Cloud Practitioner.
          </p>
          <p>
            I am consistently improving my skills, and work hard to keep myself
            updated on the latest technologies. I've spent the past 5 years of
            my college and professional career developing high value skills that
            will help me develop all-encompassing solutions to real world
            problems.
          </p>

          {/*<Link to="/files/myfile.pdf" target="_blank" download>Download</Link>*/}
          <Link to= {pdf} target="_blank" className="flat-button">
            {' '}
            VIEW RESUME
          </Link>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default About
