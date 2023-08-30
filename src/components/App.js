import React, { useState } from 'react';
import '../styles/App.css'

import { useState } from 'react'

let App= ()=>{
    let [text,Settext]=useState('')
    function changetext(event){
        Settext(event.target.value)
    }
    return (
        <div className='mark1'>
            <div className='preview'>
            <h1>Heading</h1><br></br><br></br><span>This is some <strong>bold</strong> text.</span>  
             <textarea onChange={changetext}>
            </textarea>   
            </div>
        </div>
    )
}

export default App
