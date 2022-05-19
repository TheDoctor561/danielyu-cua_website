import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

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
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Analytics
