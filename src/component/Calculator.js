import React from 'react'
import { useState } from 'react';
const Calculator = () => {

    const[inputt,setinput]=useState("")
    const[result,setresult]=useState("");
    const[check,stecheck]=useState(false);
    const[history,sethistory]=useState([]);
    function clickhandler()
    {
        // setinput("");
        // setresult("");
        stecheck(true);

    }

    function resthandler()
    {
        // sethistory(...history,inputt+"="+result)
        setresult("");
        setinput("")
        stecheck(false);
    }
    function historyhandler()
    {
        sethistory(...history,inputt+"="+result)
        setinput("")
        stecheck(false);
    }
    
  return (
    <div>
        {/* <h1>Calculator</h1>
        <div>
            <input type='text' onChange={(e)=>{
                e.preventDefault();
                setinput(e.target.value);

            }} value={check ? result :inputt}>
            </input>
            <br></br>
            

        </div>
        <div>
            <button>9</button>
            <button>8</button>
            <button>7</button>
            <button>+</button>

        </div>
        <div>
            <button>6</button>
            <button>5</button>
            <button>4</button>
            <button>-</button>
        </div>
        <div>
            <button>3</button>
            <button>2</button>
            <button>1</button>
            <button>x</button>
        </div>
        <div>
            <button className=' w-8' onClick={()=>{
                setresult(eval(inputt).toString());
                clickhandler();
            } }>=</button>
        </div>
        <div>
            <button onClick={resthandler}>reset</button>
        </div>
        <div>
            <button onClick={historyhandler}>history</button>
            <p>{history}</p>
        </div> */}
        
        
    </div>
  )
}

export default Calculator