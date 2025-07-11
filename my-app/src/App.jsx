import { useState } from 'react'
import './App.css'
import DecryptedText from './assets/DecryptedText'

function App() {

  return (
    <div>
      <div className='h'>
        <DecryptedText
        text='Hello, my name is Ishaan!'
        speed={40}
        maxIterations={10}
        animateOn='view'
        revealDirection='start'
        sequential={true}

        />
        <br/>
        <DecryptedText 
        text='I am an incoming second year student at UofT'
        speed={40}
        maxIterations={10}
        animateOn='view'
        revealDirection='start'
        sequential={true}
        />
        <br/>
      </div>
      <div className='Link'>
        <a href="mailto:ishaansendhil@gmail.com">email</a> {/* fix this link bruh*/}
        <a>hi</a>
      </div>
      

    </div>

  )
}

export default App
