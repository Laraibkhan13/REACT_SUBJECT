import React from 'react'
import './Login.css'
const OldUser = () => {
  return (
    <div>
        <h1 className=' text-lime-200'>LOGIN</h1>
        <form>
            <div className=' bg-black'>
            <span className=''>username:</span><input type='text' placeholder='Enter your name'></input>
            </div>
            <br></br>
            <div>
            <span>password:</span><input type="password" placeholder='enter your password'></input>
            </div>
            <br></br>  
            <button>signin</button>
        </form>
        </div>
  )
}

export default OldUser