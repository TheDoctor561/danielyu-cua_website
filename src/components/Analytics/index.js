import { useEffect, useState } from 'react'
import {
  faPython,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
  faBarsProgress,
  faChartColumn,
  faDiagramProject,
  faChartLine,
  faTable,
  faArrowAltCircleRight,
  faClone,
  faHouseChimneyCrack,
  faTemperature4,
} from '@fortawesome/free-solid-svg-icons'

const Analytics = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 4000)
    return () => {
      clearTimeout(timer1)
    }
  }, [])

  return (
    <>
      <div className="container analytics-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'n', 'a', 'l', 'y', 't', 'i', 'c', 's']}
              idx={15}
            />
          </h1>

          <p>
            <h3>
              {' '}
              <a
                href="https://www.w3schools.com/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Hybrid Images <FontAwesomeIcon icon={faClone} />{' '}
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
                href="https://www.w3schools.com/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Twitter Scraper <FontAwesomeIcon icon={faTwitter} />{' '}
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </a>
            </h3>
            I code my websites using cutting edge frameworks like react and host
            them using AWS. I've spent so much time using AWS services that I
            became a certified AWS Cloud Practitioner. I also care greatly about
            data and its ability to provide actionable metrics that lead to
            meaningful solutions.
          </p>

          <p>
            <h3>
              {' '}
              <a
                href="https://www.w3schools.com/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Temperature Anomalies <FontAwesomeIcon icon={faTemperature4} />{' '}
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </a>
            </h3>
            I am consistently improving my skills, and work hard to keep myself
            updated on the latest technologies. I've spent the past 5 years of
            my college and professional career developing high value skills that
            will help me develop all-encompassing solutions to real world
            problems.
          </p>

          <p>
            <h3>
              {' '}
              <a
                href="https://www.w3schools.com/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Earthquake Prediciton <FontAwesomeIcon icon={faHouseChimneyCrack}/> {' '} 
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </a>
            </h3>
            I am consistently improving my skills, and work hard to keep myself
            updated on the latest technologies. I've spent the past 5 years of
            my college and professional career developing high value skills that
            will help me develop all-encompassing solutions to real world
            problems.
          </p>

          {/*<Link to="/files/resume.pdf" target="_blank" className="flat-button">
            {' '}
            DOWNLOAD RESUME
          </Link>*/}
        </div>

        <div className="image-div">
          <div className="image-container">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#ffe330" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faChartColumn} color="#ffb056" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faBarsProgress} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faDiagramProject} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faChartLine} color="#ff5353" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faTable} color="#00ce1f" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Analytics
