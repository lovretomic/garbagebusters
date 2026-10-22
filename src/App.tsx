import './App.scss'
import LoginIcon from "./assets/icons/login_icon.svg?react"
import AddAccountIcon from "./assets/icons/add_account_icon.svg?react"
import StartButton from './components/StartButton'

function App() {

  return (
    <>
      <p>hi</p>
	  <LoginIcon />
	  <StartButton title="Ne, ali želim se pridružiti!" subtitle="Stvori račun" icon={AddAccountIcon}></StartButton>
	  <StartButton title="Da, trebam se samo prijaviti!" subtitle="Prijavi se" icon={LoginIcon}></StartButton>
    </>
  )
}

export default App
