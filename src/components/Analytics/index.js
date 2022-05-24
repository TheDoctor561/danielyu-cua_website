import { useEffect, useState } from 'react'
import { faPython, faTwitter } from '@fortawesome/free-brands-svg-icons'
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
                href="https://github.com/TheDoctor561/Hyperparameters"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Hybrid Images <FontAwesomeIcon icon={faClone} />{' '}
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </a>
            </h3>
            Creation of hybrid images using edge detection and image filtering.
            This project processes images from scratch and utilizes a custom
            made Gaussian Kernel and Convolution to blur, fade, or sharpen
            images. The edges of such images can then be extracted and laid atop
            other images to create "Hybrid images".
          </p>

          <p align="LEFT">
            <h3>
              {' '}
              <a
                href="https://github.com/TheDoctor561/twitter_scraper"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Twitter Scraper <FontAwesomeIcon icon={faTwitter} />{' '}
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </a>
            </h3>
            Utilizing the twitter API to stream and do sentiment analysis on
            globally streamed tweets using keywords, usernames, and individual
            posts. The sentiment analyzer uses Meta's machine learning model to
            predict and score individual tweets based on their wording and
            composition.
          </p>

          <p>
            <h3>
              {' '}
              <a
                href="https://github.com/TheDoctor561/danielyu-cua.github.io/blob/master/Final_Project.ipynb"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Temperature Anomalies <FontAwesomeIcon
                  icon={faTemperature4}
                />{' '}
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </a>
            </h3>
            Linear regression analysis on global temperature anomalies
            correlated with fossil fuel cosumption over the past century. Using
            said data to predict the "point of no return" where humanity must
            cease all fosil fuel consumption.
          </p>

          <p>
            <h3>
              {' '}
              <a href="/files/EarthQuakes.pdf" target="_blank" rel="noreferrer">
                {' '}
                Earthquake Prediciton{' '}
                <FontAwesomeIcon icon={faHouseChimneyCrack} />{' '}
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </a>
            </h3>
            A report on global earthquake anomalies. IBM Cognos used to filter
            and sort the earthquakes to identify regions of high risk and
            frequency. To provide suggestions to update housing policy or
            building code to mitigate damages based on these high-risk areas.
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
