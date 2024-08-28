import React, { useState } from 'react'
import OldUser from './OldUser';
import NewUser from './NewUser';


const Home = () => {
    const[old,setold]=useState(false);
    const[newuser,setnewuser]=useState(false);
    function oldhandler()
    {
        setold(true);
        setnewuser(false);
    }
    function newahndler()
    {
        setnewuser(true)
        setold(false)
    }
  return (
    <div>
        <button onClick={oldhandler}>OLD USER</button>
        <button onClick={newahndler}>New  USER</button>
        {old ? <OldUser/> : <NewUser/>}
    </div>
  )
}

export default Home