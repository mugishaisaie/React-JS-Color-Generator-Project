import React from 'react'
import SingleColor from './SingleColor'

function ColorList({colors}) {
  return (
    <div className='colors'>
      {colors.map((color, index)=>{
        return <SingleColor key={index} color={color} index={index}/>
      })}
    </div>
  )
}

export default ColorList