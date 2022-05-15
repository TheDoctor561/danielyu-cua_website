import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoD from '../../../assets/images/logo-d.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
 
    gsap
      .timeline().to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })

      // Drawing animation currently broken trying to fix for future reference 
      //.from(outlineLogoRef.current, {drawSVG: 0,duration: 20,})


     
      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 3,
          duration: 2,
        }
      )
   
  }, [])
  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoD}
        alt="JavaScript,  Developer"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="700"
        height="820"
        viewBox="0 0 700 820"
      >
        <g 
        className="svg-container"
        fill="none"
        >
          <path
            ref={outlineLogoRef}
            id="Color_Fill_1"
            data-name="Color Fill 1"
            d="M46,807V75l69-62H328c36.2,0,79.514-4.54,111,3,38.975,9.333,71.941,21.161,99,42,98.565,75.907,149.76,286.006,99,456-29.535,98.911-61.707,145.68-136,200l-17,20c-19.237,19.267-41.418,38.354-68,50C330.612,821.41,166.543,807.142,46,807ZM118,17V741c127.194,0.451,309.369,16.331,387-33,139.2-88.452,187.73-358.615,105-546-14.539-32.93-34.525-67.854-61-89-25.768-20.581-52.935-37.218-89-48-35.913-10.737-84.933-8-131-8H118Zm-5,3L50,78V798l64-58Q113.5,380.036,113,20Zm124,91c173.261-1.277,233.966,7.954,275,143,39.651,130.494,3.734,324.174-84,372-25.464,13.881-54.5,11.466-90,17-18.539,2.891-88.376,5.716-103-1V152C235,139.281,232.835,120.3,237,111Zm2,4v56c52.673-.5,101.465,5.771,132,28,101.75,74.072,108.546,301.12,47,425,25.879-5.713,43.055-30.584,56-50,42.325-63.484,64.361-196.82,39-298C476.009,128.422,420.909,114.264,239,115Zm0,60V640c44.917,0.274,96.255,3.836,134-3l39-9,17-37c8.9-22.61,13.877-48.553,19-74,24.476-121.568-11.9-271.9-83-317C334.466,180.63,288.626,174.74,239,175ZM489,720c-22.222,21.135-84.321,25-129,25H115L52,803c111.984,0.518,257.981,11.5,345-16,27.949-8.832,53.781-26.759,73-45C473.549,738.631,491.291,720.7,489,720Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
