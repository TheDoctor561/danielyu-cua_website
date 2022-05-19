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
            Hi, my name is Daniel Yu-cua, I'm a full stack engineer with a
            knowledge base in IT solutions, Data Analytics, and Web Development.
            I graduated from the University of Maryland College Park with a B.S.
            in Computer Science and am pursuing a M.S. at the University of
            Maryland Global Campus and am scheduled to graduate in December of
            2023.
          </p>
          <p align="LEFT">
            I code my websites using cutting edge frameworks like react and host
            them using AWS. I've spent so much time using AWS services that I
            became a certified AWS Cloud Practitioner. I also care greatly about
            data and its ability to provide actionable metrics that lead to
            meaningful solutions.
          </p>
          <p>
            I am consistently improving my skills, and work hard to keep myself
            updated on the latest technologies. I've spent the past 5 years of
            my college and professional career developing high value skills that
            will help me develop all-encompassing solutions to real world
            problems.
          </p>

          {/*<Link to="/files/myfile.pdf" target="_blank" download>Download</Link>*/}
          <Link to="/files/resume.pdf" target="_blank" className="flat-button">
            {' '}
            DOWNLOAD RESUME
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
