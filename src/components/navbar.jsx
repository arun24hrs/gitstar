import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">ALL</Link>
        <Link to="/html">HTML</Link>
        <Link to="/css">CSS</Link>
        <Link to="/javascript">JavaScript</Link>
    </div>
  )
}

export default Navbar