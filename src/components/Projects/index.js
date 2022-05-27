import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import studio218 from '../../assets/images/218_screen.png'
import  pukalani from '../../assets/images/pukalani_1.jpg'
import './index.scss'


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
                Pukalani Villas {' '}
              </a>
            </h3>
            Pukalani Villas is a housing projects located in the hills of Oahu, Hawaii. 
            The project consists of a 6-house villa with each ranging in price of 
            2 - 2.8 million dollars. 
          </p>

          <p align="LEFT">
            <h3>
              {' '}
              <a
                href="https://www.218studio.com/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                218 Studio {' '}
              </a>
            </h3>
            218 Studio is a full stack website that allows users to upload songs
            and visualize music through the use of a vaporwave inspired visualizer. 
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
