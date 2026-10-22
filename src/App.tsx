import './App.scss'
import LoginIcon from "./assets/icons/login_icon.svg?react"
import StartButton from './components/StartButton'

function App() {

  return (
    <>
      <p>hi</p>
	  <LoginIcon />
	  <StartButton text="desi" subtext="disi" icon={LoginIcon}></StartButton>
    </>
  )
}

export default App
