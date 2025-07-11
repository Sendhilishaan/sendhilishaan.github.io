import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DecryptedText from './assets/DecryptedText'

function App() {

  return (
    <div className='h'>
      <DecryptedText
      text='Hello, welcome to my website my name is ishaan'
      speed={40}
      maxIterations={10}
      animateOn='view'
      revealDirection='start'
      sequential={true}

      />
    </div>
  )
}

export default App
