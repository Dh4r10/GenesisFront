import { Validations } from './validationsUsers'

export const handleDni = (e, setDni) => {
  const { value } = e.target;
  setDni(value);
};

export const handleContrasenia = (e, setContrasenia) => {
  const { value } = e.target;
  setContrasenia(value);
};

export const handleClickButton = (dni, setIdperfil) => {
  Validations();

  if (dni == "12345678") {
    setIdperfil(1002);
  } else {
    setIdperfil(1003);
  }
};
