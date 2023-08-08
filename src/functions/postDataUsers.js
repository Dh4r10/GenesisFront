import axios from 'axios'
import { loginAPI } from '../api/apiUrl'

export const HandleSubmitUsers = (e,dni,contrasenia,idperfil) => {
    e.preventDefault();

    axios.post(loginAPI, {
        dni,
        contrasenia,
        idperfil,
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
};

export const AuthService = {
    users: [loginAPI],
    authenticate: function (dni, contrasenia, idperfil){
        const user = this.users.find(
            (user) => user.dni === dni && user.contrasenia == contrasenia && user.idperfil == idperfil
        );
        return !!user;
    }
}