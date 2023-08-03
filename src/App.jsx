import { useState, useEffect } from 'react'
import axios from 'axios'
import { Api } from './components/LinkApi'

import './App.css'

//PRUEBA

function App() {
  const [tipoperfil, setTipoperfil] = useState()
  const handleChange = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setTipoperfil(valor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(Api, {tipoperfil})
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }   

    return (
      <>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="p1">Hola : </label>
            <input type="text" onChange={handleChange} placeholder='Ingrese tipo de perfil' id='p1' />
            <button type='submit'>enviar</button>
          </form>
        </div>
      </>
    )
  }

export default App
