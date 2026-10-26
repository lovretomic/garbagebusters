import "./App.scss";
import LoginIcon from "./assets/icons/login_icon.svg?react";
import AddAccountIcon from "./assets/icons/add_account_icon.svg?react";
import ArrowRight from "./assets/icons/arrow_right.svg?react";
import ArrowLeft from "./assets/icons/arrow_left.svg?react";

import StartButton from "./components/StartButton";
import Button from "./components/Button";
import Input from "./components/Input";
import PasswordTooltip from "./components/PasswordTooltip";
import { useState } from "react";
import { isPasswordValid } from "./components/PasswordTooltip/PasswordTooltipCheck";

function App() {
  const [password, setPassword] = useState("");
  const valid = isPasswordValid(password);
  return (
    <>
      <div className="test-div">
        <p>hi</p>
        <LoginIcon />
        <StartButton
          title="Ne, ali želim se pridružiti!"
          subtitle="Stvori račun"
          icon={AddAccountIcon}
        ></StartButton>
        <StartButton
          title="Da, trebam se samo prijaviti!"
          subtitle="Prijavi se"
          icon={LoginIcon}
        ></StartButton>
        <div className="button-div">
          <Button iconOnly icon={ArrowLeft} variant="secondary"></Button>
          <Button title="DALJE" icon={ArrowRight}></Button>
        </div>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Lozinka"
        />
        <PasswordTooltip password={password} passed = {valid}/>
        <Button title="DALJE" icon={ArrowRight} disabled={!valid} />
      </div>
    </>
  );
}

export default App;
