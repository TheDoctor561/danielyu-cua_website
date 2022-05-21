import { Link, NavLink } from 'react-router-dom'
import './index.scss'
// Change the Logo design to a D in photoshop or something else
import LogoD from '../../assets/images/logo-d.png'
// Font in photoshop is Myriad Pro bold 12pt font
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faChartSimple, faWrench} from '@fortawesome/free-solid-svg-icons'

// Dev Notes <NavLink> Controls the individual links that go to various pages
// copy for more sections as they become available to you.
//
//
//
// ============================================================================
// |                                                                          |
// |    Middle section covers the nav make sure to establish back links to    |
// |    the necessary pages in order to have a smooth experience              |
// |                                                                          |
// ============================================================================
//
//
//
// <ul> list records the socials for the yourself with 
// linkndin 
// github
// youtube
// & Skype in that order 
// Suggestion to remove skye and replace with studio 218 follow basic svg protocols
// for the replacement of such the faIcon 


const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoD} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="daniel.y" />
      </Link>
      <nav>
        <NavLink exact="true" 
          activeclassname="active" 
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active" 
          className="about-link" 
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active" 
          className="contact-link" 
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <NavLink 
          activeclassname="active" 
          className="analytics-link" 
          to="/analytics"
        >
          <FontAwesomeIcon icon={faChartSimple} color="#4d4d4e" />
        </NavLink>

        <NavLink 
          activeclassname="active" 
          className="projects-link" 
          to="/projects"
        >
          <FontAwesomeIcon icon={faWrench} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/daniel-yu-cua/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/TheDoctor561"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        
        {/*
        <li>
          <a
            href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>

        <li>
          !! Remove for now and replace with studio218 Honestly anything is better!! 

          <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li>
        */}
      </ul>
    </div>
  )
}

export default Sidebar
