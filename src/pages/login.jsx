import React from "react";
import "../styles/login.css";
import Logo from "../images/logo_UNSM.png";

function login() {
  return (
    <>
      <div className="cajaLogin">
        <div className="logoLogin">
          <div className="cajaLogo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="cajaIniSes">
            <h1>Iniciar Sesión</h1>
          </div>
          <div className="cajaOlvCont">
            <h1>¿Olvidaste tu contraseña?</h1>
            <a href="#">Recuperar</a>
          </div>
        </div>
        <div className="inputsLogin">
          <form action="">
            <div className="cajaInputs">
              <input type="text" placeholder="Usuario"/>
              <input type="password" placeholder="● ● ● ● ● ● ● ● ● ● ● ● "/>
            </div>
            <div className="btnLogin">
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
      <footer className="footerLogin">
        <h1>Este es un footer</h1>
      </footer>
    </>
  );
}

export default login;
