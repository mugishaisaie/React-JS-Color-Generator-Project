import { useState } from 'react'
import './App.css'
import Form from './Form'
import ColorList from './ColorList'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  // console.log(new Values('#f15025').all(12));
  // toast.success('Wow😲')
  // toast.success('Wow😲')
  function addColor(color){
    try {
      const newColor = new Values(color).all(10)
      setColors(newColor)
    } catch (error) {
      console.log(error);
    }

  }
  

  return (
    <main>
      <Form addColor={addColor}/>
      <ColorList colors={colors} />
      <ToastContainer position='top-center'/>
    </main>
  )
}

export default App
