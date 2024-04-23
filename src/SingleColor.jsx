import React from 'react'
import { toast } from 'react-toastify';

function SingleColor({color, index}) {
  const {hex, weight} = color;

   async function saveToClipBoard(){

    if(navigator.clipboard){
      try {
  await navigator.clipboard.writeText(`#${hex}`)
  toast.success('Color Copied To ClipBoard')
} catch (error) {
  toast.error('Failed To Copy To Clipboard')
}
    }else{
      toast.error('ClipBoard Not Available');
    }

  }
  return (
    <section section className={index > 10? 'color color-light': 'color'} style={{backgroundColor: `#${hex}`}} onClick={saveToClipBoard}>

      <p className='percent-value'>%{weight}</p>
      <p className='color-value'>#{hex}</p>
      </section>
  )
}

export default SingleColor