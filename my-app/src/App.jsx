import { useState } from 'react'
import './App.css'
import DecryptedText from './assets/DecryptedText'
import MagnetLines from './assets/MagneticLines';

function App() {

  return (
    <div>

      <MagnetLines
          rows={9}
          columns={9}
          containerSize="60vmin"
          lineColor="tomato"
          lineWidth="0.8vmin"
          lineHeight="5vmin"
          baseAngle={0}
          style={{ margin: "2rem auto" }}
        />

      <div className='h'>
        <DecryptedText
        text='Hello, my name is Ishaan.'
        speed={40}
        maxIterations={10}
        animateOn='view'
        revealDirection='start'
        sequential={true}

        />
        <br/>

        <DecryptedText 
        text='Welcome to my personal website!'
        speed={40}
        maxIterations={10}
        animateOn='view'
        revealDirection='start'
        sequential={true}
        />
        <br/>
      </div>
      
      <div className='linkdiv'>
        
        <a className='links' href="mailto:ishaansendhil@gmail.com" target='_blank'>email</a> {/* fix this link bruh*/}
        <a className='links' href='https://github.com/Sendhilishaan' target='_blank'>github</a>
        <a className='links' href='https://www.linkedin.com/in/ishaan-sendhil-0990a2210/' target='_blank'>linkedin</a>
      
      </div>
      

    </div>

  )
}

export default App
