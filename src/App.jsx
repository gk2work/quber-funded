import { useState } from 'react'
import './App.css'
import Landing from './modules/landing/pages/Landing';
import CursorGlow from './components/shared/CursorGlow';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CursorGlow />
      <Landing />
    </>
  )
}

export default App
