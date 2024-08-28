import React, { useState } from 'react'

const Comp1 = ({data}) => {
    const[count,setcount]=useState(0);
    const[text,settext]=useState("");

    function counthHandler()
    {
        setcount(count+1)
    }

    function counthHandler2()
    {
        setcount(count-1)
    }
    
    
    
  return (
    <div>
        <p>{count}</p>
        <button onClick={counthHandler} >increase</button>
        <button onClick={counthHandler2}>deccrease</button>
        <p>{text}</p>
        <input value={text} onChange={(e)=>{
            settext(e.target.value)
        }}></input>
        {/* <input value={text} onChange={textHandler()}></input> */}

    </div>
  )
}

export default Comp1