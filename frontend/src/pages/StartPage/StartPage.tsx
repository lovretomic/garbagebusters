import LoginIcon from "../../assets/icons/login_icon.svg?react";
import AddAccountIcon from "../../assets/icons/add_account_icon.svg?react";
import ArrowRight from "../../assets/icons/arrow_right.svg?react";
import ArrowLeft from "../../assets/icons/arrow_left.svg?react";
import c from "./StartPage.module.scss";
import FlowerWhiteIcon from "../../assets/icons/flower_white.svg?react";
import FlowerImage from "../../assets/images/flower.png";
import MailboxIcon from "../../assets/icons/mailbox_icon.svg?react";
import SendIcon from "../../assets/icons/send_icon.svg?react";
import RefreshIcon from "../../assets/icons/refresh_icon.svg?react";

import StartButton from "../../components/StartButton";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PasswordTooltip from "../../components/PasswordTooltip";
import { useState } from "react";
import { isPasswordValid } from "../../components/PasswordTooltip/PasswordTooltipCheck";

const StartPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    loginEmail: "",
    loginPassword: "",
  });
  const [stage, setStage] = useState<number>(1);

  function increaseStage(step = 1) {
    setStage(Math.min(stage + step, 6));
  }
  function decreaseStage(step = 1) {
    setStage(Math.max(stage - step, 1));
  }
  function updateForm(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  const valid =
    isPasswordValid(form.password) && form.password2 == form.password;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isNameValid =
    form.firstName.trim().length >= 3 && form.lastName.trim().length >= 3;
  const isLoginEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.loginEmail);
  const isLoginValid = isLoginEmailValid && form.loginPassword.length > 0;
  return (
    <>
      <div className={c.page}>
        <div className={c.imageWrap}>
          <img src={FlowerImage} className={c.flowerImage} alt="" />
        </div>
        {stage == 1 && (
          <div className={c.contentDiv}>
            <div className={c.welcome}>
              <FlowerWhiteIcon />
              Dobro došli!
              <span className={c.subtitle}>Imate li već EcoSentry račun?</span>
            </div>
            <div className={c.startButtonsDiv}>
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
                onClick={() => increaseStage(5)}
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
                <Input
                  placeholder="Ime"
                  type="text"
                  onChange={(e) => updateForm("firstName", e.target.value)}
                  value={form.firstName}
                />
                <Input
                  placeholder="Prezime"
                  type="text"
                  onChange={(e) => updateForm("lastName", e.target.value)}
                  value={form.lastName}
                />
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
                  disabled={!isNameValid}
                ></Button>
              </div>
            </div>
          </div>
        )}
        {stage == 3 && (
          <div className={c.contentDiv}>
            <div className={c.welcome}>
              <FlowerWhiteIcon />
              Dobro došli!
              <span className={c.subtitle}>Kako Vam se možemo javiti?</span>
            </div>
            <div className={c.footerDiv}>
              <div className={c.inputDiv}>
                <Input
                  placeholder="Adresa e-pošte"
                  type="email"
                  onChange={(e) => updateForm("email", e.target.value)}
                  value={form.email}
                />
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
                  disabled={!isEmailValid}
                ></Button>
              </div>
            </div>
          </div>
        )}
        {stage == 4 && (
          <div className={c.contentDiv}>
            <div className={c.welcome}>
              <FlowerWhiteIcon />
              Dobro došli!
              <span className={c.subtitle}>Molimo stvorite lozinku</span>
            </div>
            <div className={c.tooltipDiv}>
              <PasswordTooltip password={form.password} passed={valid} />
            </div>
            <div className={c.footerDiv}>
              <div className={c.inputDiv}>
                <Input
                  type="password"
                  value={form.password}
                  onChange={(e) => updateForm("password", e.target.value)}
                  placeholder="Stvorite lozinku"
                />
                <Input
                  type="password"
                  value={form.password2}
                  onChange={(e) => updateForm("password2", e.target.value)}
                  placeholder="Ponovite lozinku"
                />
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
                  disabled={!valid}
                ></Button>
              </div>
            </div>
          </div>
        )}
        {stage == 5 && (
          <div className={c.contentDiv}>
            <div className={c.welcome}>
              <FlowerWhiteIcon />
              Provjerite inbox.
              <span className={c.subtitle}>
                Pratite upute koje smo poslali na Vašu e-mail adresu za
                aktivaciju računa.
              </span>
            </div>

            <MailboxIcon className={c.mailboxIcon} />

            <div className={c.footerDiv}>
              <div className={c.startButtonsDiv}>
                <Button
                  title="POŠALJI PONOVNO"
                  icon={SendIcon}
                  variant="secondary"
                  onClick={() => {}}
                ></Button>
                <Button
                  title="PROVJERI"
                  icon={RefreshIcon}
                  onClick={() => {}}
                ></Button>
              </div>
            </div>
          </div>
        )}
        {stage == 6 && (
          <div className={c.contentDiv}>
            <div className={c.welcome}>
              <FlowerWhiteIcon />
              Dobro došli natrag!
            </div>
            <div className={c.footerDiv}>
              <div className={c.inputDiv}>
                <Input
                  type="email"
                  placeholder="Adresa e-pošte"
                  onChange={(e) => updateForm("loginEmail", e.target.value)}
                  value={form.loginEmail}
                />
                <Input
                  placeholder="Lozinka"
                  type="password"
                  onChange={(e) => updateForm("loginPassword", e.target.value)}
                  value={form.loginPassword}
                />
              </div>
              <div className={c.buttonDiv}>
                <Button
                  iconOnly
                  icon={ArrowLeft}
                  variant="secondary"
                  onClick={() => {
                    decreaseStage(5);
                  }}
                ></Button>
                <Button
                  title="PRIJAVITE SE"
                  icon={ArrowRight}
                  onClick={() => {}}
                  disabled={!isLoginValid}
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
