import React from 'react'
import './Signin.css'

const NewUser = () => {
  return (
    <div>
        <h1>SIGNUP</h1>
        <form>
            <div className=' bg-black'>
            <span className=''>username:</span><input type='text' placeholder='Enter your name'></input>
            </div>
            <br></br>
            <div>
            <span>password:</span><input type="password" placeholder='enter your password'></input>
            </div>
            <br></br>
            <div>
            <span>email:</span><input type="email" placeholder='enter your email'></input>
            </div>
            <br></br>
            <button>Singup</button>
            
            
            
        </form>
    </div>
  )
}

export default NewUser