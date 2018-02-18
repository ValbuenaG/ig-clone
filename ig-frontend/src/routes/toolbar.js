import React from 'react'
import{Link} from 'react-router-dom'

const Toolbar = ()=>(
    <div>
        <Link to='/' >Home</Link>
        <Link to='/signup'>Signup</Link>
    </div>
)
export default Toolbar