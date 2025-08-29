import { useState } from 'react'
import './App.css'
import DecryptedText from './assets/DecryptedText'
import MagnetLines from './assets/MagneticLines';

function App() {
  return (
    <div
      className="main-flex-container"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "#fff"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20vh", // roughly top third
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "row",
          alignItems: "felx-start",
          justifyContent: "center",
        }}
      >
        {/* Left: MagneticLines */}
        <div style={{ marginRight: "0.5rem", display: "flex", alignItems: "center" }}>
          <MagnetLines
            rows={9}
            columns={9}
            containerSize="20vmin"
            lineColor="tomato"
            lineWidth="0.2vmin"
            lineHeight="1.5vmin"
            baseAngle={0}
            style={{ margin: "2rem auto" }}
          />
        </div>
        {/* Right: DecryptedText and links, centered */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
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
          <div className='linkdiv' style={{marginTop: "1rem" }}>
            <a className='links' href="mailto:ishaansendhil@gmail.com" target='_blank'>email</a>
            <a className='links' href='https://github.com/Sendhilishaan' target='_blank'>github</a>
            <a className='links' href='https://www.linkedin.com/in/ishaan-sendhil-0990a2210/' target='_blank'>linkedin</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
