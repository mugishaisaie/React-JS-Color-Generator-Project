import React, { useState } from 'react'
import Values from 'values.js';

function Form({addColor}) {
  const [color, setColor] = useState('');
  function handleSubmit(e){
    e.preventDefault()
   addColor(color); 

  }
  return (
    <section className='container'>
      <h4>Color Generator</h4>
      <form  className='color-form' onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={(e)=>setColor(e.target.value)} />
        <input type="text" placeholder='#f15025' value={color} onChange={(e)=>setColor(e.target.value)}  />
        <button type="submit" className='btn' style={{backgroundColor: color}}>Generate</button>
      </form>

    </section>
  )
}

export default Form