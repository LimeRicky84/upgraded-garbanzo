import React from 'react'

import '../../styles/header.css'
import {Link} from 'react-router-dom'

function header() {
  return (
    <div className='headerDiv'>
        <ul>
            <Link to="/"><li className='headerLi'>Home</li></Link>
            <Link to="/Profile"><li className='headerLi'>Profile</li></Link>
        </ul>
    </div>
  )
}

export default header