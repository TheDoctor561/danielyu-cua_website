import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">Seeking to understand</span>

        <Outlet />
        <span className="tags bottom-tags">
        How to build 
          <br />
          <span className="bottom-tag-html">a brighter future</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
