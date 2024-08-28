import React from 'react'

const Button = () => {
  return (
    <div>
        <button onClick={oldhandler}>OLD USER</button>
        {old && <OldUser/>}
        <button onClick={newahndler}>New  USER</button>
        {newuser && <NewUser/>}
    </div>
  )
}

export default Button