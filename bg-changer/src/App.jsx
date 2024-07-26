import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor]=useState('powderblue')
  // function changeClr(color){
  //   setColor(color)
  // }
  return (
    <div className='w-full h-screen bg-pink-300 duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-300 px-4 py-3 rounded-full'>
          <button onClick={()=>setColor('palevioletred')} style={{backgroundColor:"palevioletred"}} className='outline-none px-4 py-1 rounded-full text-yellow-50 text-xl font-bold shadow-lg'>pink</button>
          <button onClick={()=>setColor('teal')} style={{backgroundColor:"teal"}} className='outline-none px-4 py-1 rounded-full text-yellow-50 text-xl font-bold shadow-lg'>teal</button>
          <button onClick={()=>setColor('purple')} style={{backgroundColor:"purple"}} className='outline-none px-4 py-1 rounded-full text-yellow-50 text-xl font-bold shadow-lg'>purple</button>
          <button onClick={()=>setColor('green')} style={{backgroundColor:"green"}} className='outline-none px-4 py-1 rounded-full text-yellow-50 text-xl font-bold shadow-lg'>green</button>
          <button onClick={()=>setColor('red')} style={{backgroundColor:"red"}} className='outline-none px-4 py-1 rounded-full text-yellow-50 text-xl font-bold shadow-lg'>red</button>
          <button onClick={()=>setColor('blue')} style={{backgroundColor:"blue"}} className='outline-none px-4 py-1 rounded-full text-yellow-50 text-xl font-bold shadow-lg'>blue</button>
          <button onClick={()=>setColor('orange')} style={{backgroundColor:"orange"}} className='outline-none px-4 py-1 rounded-full text-yellow-50 text-xl font-bold shadow-lg'>orange</button>
          <button onClick={()=>setColor('peru')} style={{backgroundColor:"peru"}} className='outline-none px-4 py-1 rounded-full text-yellow-50 text-xl font-bold shadow-lg'>peru</button>
          <button onClick={()=>setColor('black')} style={{backgroundColor:"black"}} className='outline-none px-4 py-1 rounded-full text-yellow-50 text-xl font-bold shadow-lg'>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
