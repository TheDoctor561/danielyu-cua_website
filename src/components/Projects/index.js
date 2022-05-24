import { useEffect, useState } from 'react'
import {
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import studio218 from '../../assets/images/218_screen.png'
import  pukalani from '../../assets/images/pukalani_1.jpg'
import './index.scss'
import {
  faArrowAltCircleRight,
  faClone
} from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 4000)
    return () => {
      clearTimeout(timer1)
    }
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P','r','o','j','e','c','t','s']}
              idx={15}
            />
          </h1>

          <p>
            <h3>
              {' '}
              <a
                href="https://www.pukalanivillas.com/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Pukalani Villas <FontAwesomeIcon icon={faClone} />{' '}
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </a>
            </h3>
            Hi, my name is Daniel Yu-cua, I'm a full stack engineer with a
            knowledge base in IT solutions, Data Analytics, and Web Development.
            I graduated from the University of Maryland College Park with a B.S.
            in Computer Science and am pursuing a M.S. in Data Analytics at the
            University of Maryland Global Campus and am scheduled to graduate in
            December of 2023.
          </p>

          <p align="LEFT">
            <h3>
              {' '}
              <a
                href="https://218studio.com/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                218 Studio <FontAwesomeIcon icon={faTwitter} />{' '}
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </a>
            </h3>
            I code my websites using cutting edge frameworks like react and host
            them using AWS. I've spent so much time using AWS services that I
            became a certified AWS Cloud Practitioner. I also care greatly about
            data and its ability to provide actionable metrics that lead to
            meaningful solutions.
          </p>

         

          {/*<Link to="/files/resume.pdf" target="_blank" className="flat-button">
            {' '}
            DOWNLOAD RESUME
          </Link>*/}
        </div>

        <div className="image-div">
          <div className = "parent">
            <img className = "image1" src={pukalani} alt="pukalani" />
            <img className = "image2" src={studio218} alt="studio218" />
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Projects
