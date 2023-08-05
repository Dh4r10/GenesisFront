const usuario = document.getElementById("usuario")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

export const userValidation = (e) => {
    e.preventDefault()
    if (usuario.value.length < 8){
        alert("Usuario muy corto")
    }
}