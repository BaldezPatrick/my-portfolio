import React from 'react'
import './navBar.css'
import data from './data'
import { useModalContext } from '../../context/modalContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const { showModalHandler } = useModalContext();
  return (
    <nav>
      <div className="container nav-container">
        <a href="index.html" className="nav-logo">
          PB
        </a>
        <ul className="nav-menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme-icon" onClick={showModalHandler}>
          <FontAwesomeIcon icon={faPalette} />
        </button>
      </div>
    </nav>
  )
}

export default NavBar
