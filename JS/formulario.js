const formulario=document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const campos ={
    nombre:false,
    email:false
}

const validarformulario=(e)=>{
  switch (e.target.name){
    case "nombre":
        if(expresiones.nombre.test(e.target.value)){
            document.getElementById("gusuario").classList.remove("formulario__grupo-incorrecto")
            document.getElementById("gusuario").classList.add("formulario__grupo-correcto")
            document.querySelector("#gusuario .formulario__input-error").classList.remove("formulario__input-error-activo")  
            campos["nombre"]=true
        }
        else{
            document.getElementById("gusuario").classList.add("formulario__grupo-incorrecto")
            document.querySelector("#gusuario .formulario__input-error").classList.add("formulario__input-error-activo")
            campos["nombre"]=false
        }


    break
    case "email":
        if(expresiones.correo.test(e.target.value)){
            document.getElementById("gemail").classList.remove("formulario__grupo-incorrecto")
            document.getElementById("gemail").classList.add("formulario__grupo-correcto")
            document.querySelector("#gemail .formulario__input-error").classList.remove("formulario__input-error-activo")  
            campos["email"]=true
        }
        else{
            document.getElementById("gemail").classList.add("formulario__grupo-incorrecto")
            document.querySelector("#gemail .formulario__input-error").classList.add("formulario__input-error-activo")
            campos["email"]=false
        }


        break
  }
}

inputs.forEach((input)=> {
    input.addEventListener("keyup", validarformulario)
    input.addEventListener("blur", validarformulario)
})

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    if (campos.nombre && campos.email){
        formulario.reset()
    }
})
