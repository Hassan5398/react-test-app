import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showIframe, setShowIframe] = useState(false)

  const toggleIframe = () => {
    setShowIframe(!showIframe)
  }

  return (
    <>
      <h1>Hello World</h1>
      
      <button onClick={toggleIframe} style={{ margin: '20px 0', padding: '10px 20px', fontSize: '16px' }}>
        {showIframe ? 'Close Iframe' : 'Open Iframe'}
      </button>
      
      {showIframe && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // Mobile Safari fixes
          WebkitOverflowScrolling: 'touch',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <button
              onClick={toggleIframe}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                zIndex: 10000,
                padding: '10px 15px',
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              ✕ Close
            </button>
            <iframe 
  src="https://688c64a4d920d30008e2c848--sparkly-souffle-b49581.netlify.app/"
  style={{ 
    width: '100%',
    height: '100%',
    border: 'none',
    flex: 1,
    // Mobile Safari specific fixes
    minHeight: '100%',
    WebkitTransform: 'translateZ(0)',
    transform: 'translateZ(0)'
  }}
  title="Full Screen External Content"
  allow="camera; microphone; fullscreen; autoplay"
  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </div>
      )}
    </>
  )
}

export default App
