import React, { useState } from "react";
import axios from "axios";

import "../styles/login.css";
import Logo from "../images/logo_UNSM.png";
import { loginAPI } from "../api/apiUrl";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faLock, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Login() {
  const [showPass, setShowPass] = useState(false);
  const [valUser, setValUser] = useState(false);

  const [sexo, setSexo] = useState();
  const [edad, setEdad] = useState();

  const handlePrueba1 = (e) => {
    const { value } = e.target;
    setSexo(value);
  };

  const handlePrueba2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setEdad(valor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(loginAPI, {
        sexo,
        edad,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <header>
        <div>
          <h1 className="unsm">UNSM</h1>
          <h1 className="rayita">|</h1>
          <h1 className="encEmo">ENCUESTA EMOCIONAL</h1>
        </div>
      </header>
      <main className="cajaLogin">
        <div className="logoLogin">
          <div className="cajaLogo">
            <a href="https://unsm.edu.pe/" target="_blank">
              <img src={Logo} alt="logo" />
            </a>
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
          <form id="form" onSubmit={handleSubmit}>
            <div className="cajaInputs">
              <div>
                <i className="authentication">
                  <FontAwesomeIcon icon={faUser} className="logoInput" />
                </i>
                <input
                  id="usuario"
                  type="text"
                  placeholder="Usuario"
                  onChange={handlePrueba1}
                />
              </div>
              <div>
                <i className="authenticationPassword">
                  <FontAwesomeIcon icon={faLock} className="logoInput" />
                </i>
                <input
                  id="password"
                  type={showPass ? "text" : "password"}
                  placeholder="●●●●●●●●●●●● "
                  className="inputPassword"
                  onChange={handlePrueba2}
                  maxLength={30}
                  minLength={8}
                />
                <i className="viewPass" onClick={() => setShowPass(!showPass)}>
                  <FontAwesomeIcon
                    icon={showPass ? faEye : faEyeSlash}
                    className="logoEye"
                  />
                </i>
              </div>
            </div>
            <div className="btnLogin">
              <button type="submit" >Login</button>
            </div>
            <p className="warnings" id="warnings"></p>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="footerLogin">
        <div className="logoFooter">
          <img src={Logo} alt="logoFoot" />
          <div className="textosFooter">
            <h1 className="textoGris">Copyright © 2023 - Team Genesis</h1>
            <h1>Universidad Nacional de San Martin</h1>
            <h1 className="textoGris">Tarapoto - Perú</h1>
          </div>
        </div>
        <div className="redesFooter">
          <h1>REDES:</h1>
          <a href="https://unsm.edu.pe/" target="_blank">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
          <a href="https://www.facebook.com/unsmperu/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/unsmperu/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Login;
