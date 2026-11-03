import LoginIcon from "../../assets/icons/login_icon.svg?react";
import AddAccountIcon from "../../assets/icons/add_account_icon.svg?react";
import ArrowRight from "../../assets/icons/arrow_right.svg?react";
import ArrowLeft from "../../assets/icons/arrow_left.svg?react";
import c from "./StartPage.module.scss";
import FlowerWhiteIcon from "../../assets/icons/flower_white.svg?react";
import FlowerImage from "../../assets/images/flower.png";

import StartButton from "../../components/StartButton";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PasswordTooltip from "../../components/PasswordTooltip";
import { useState } from "react";
import { isPasswordValid } from "../../components/PasswordTooltip/PasswordTooltipCheck";

const StartPage = () => {
  const [password, setPassword] = useState("");
  const [stage, setStage] = useState<number>(1);

  function increaseStage(step = 1) {
    setStage(Math.min(stage + step, 7));
  }
  function decreaseStage(step = 1) {
    setStage(Math.max(stage - step, 1));
  }
  const valid = isPasswordValid(password);
  return (
    <>
      <div className={c.page}>
        <img src={FlowerImage} className={c.flowerImage} />
        {stage == 1 && (
          <div className={c.contentDiv}>
            <div className={c.welcome}>
              <FlowerWhiteIcon />
              Dobro došli!
              <span className={c.subtitle}>Imate li već EcoSentry račun?</span>
            </div>
            <div className={c.startButtonDiv}>
              <StartButton
                title="Ne, ali želim se pridružiti!"
                subtitle="Stvori račun"
                icon={AddAccountIcon}
                onClick={() => increaseStage()}
              ></StartButton>
              <StartButton
                title="Da, trebam se samo prijaviti!"
                subtitle="Prijavi se"
                icon={LoginIcon}
                onClick={() => increaseStage(6)}
              ></StartButton>
            </div>
          </div>
        )}
        {stage == 2 && (
          <div className={c.contentDiv}>
            <div className={c.welcome}>
              <FlowerWhiteIcon />
              Dobro došli!
              <span className={c.subtitle}>Kako se zovete?</span>
            </div>
            <div className={c.footerDiv}>
              <div className={c.inputDiv}>
                <Input placeholder="Ime" />
                <Input placeholder="Prezime" />
              </div>
              <div className={c.buttonDiv}>
                <Button
                  iconOnly
                  icon={ArrowLeft}
                  variant="secondary"
                  onClick={() => decreaseStage()}
                ></Button>
                <Button
                  title="DALJE"
                  icon={ArrowRight}
                  onClick={() => increaseStage()}
                ></Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StartPage;

/*<div className={c.testDiv}>
        <p>hi</p>
        <LoginIcon />
        <StartButton
          title="Ne, ali želim se pridružiti!"
          subtitle="Stvori račun"
          icon={AddAccountIcon}
		  onClick = {()=>decreaseStage()}
        ></StartButton>
        <StartButton
          title="Da, trebam se samo prijaviti!"
          subtitle="Prijavi se"
          icon={LoginIcon}
          onClick={() => increaseStage()}
        ></StartButton>
        <div className={c.buttonDiv}>
          <Button iconOnly icon={ArrowLeft} variant="secondary"></Button>
          <Button title="DALJE" icon={ArrowRight}></Button>
        </div>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Lozinka"
        />
        <PasswordTooltip password={password} passed={valid} />
        <Button title="DALJE" icon={ArrowRight} disabled={!valid} />
      </div> */
