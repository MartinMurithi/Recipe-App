import React from 'react';
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
      <div>
          <Link to={"/"} className='logo'>Kocima</Link>
    </div>
  )
}

export default Logo