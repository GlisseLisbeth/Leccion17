var title = document.getElementById("form-signin-heading");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var remember = document.getElementsByTagName("span")[0];
var button = document.getElementsByClassName("btn")[0];
var datos = document.getElementById("datos");

function translate(){
  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesión";
}

translate();

button.addEventListener("click",function(event){
  event.preventDefault();
  datos.innerHTML= "<h3>Datos del formulario</h3><br>"
                +"<p>"
                +"El correo ingresado es:<br>"
                +email.value+"<br>"
                +"La clave ingresada es:<br>"
                +password.value+"<br>"
                +"</p>"
});
