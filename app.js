const clave = "9568";
claveUsuario = prompt("Ingresa la clave de acceso");


if (clave === claveUsuario) {
  console.log("La clave es correcta");
} else {
  console.log("Clave incorrecta");
  document.getElementById("cuerpo").innerHTML = "contraseña incorrecta";
  alert("No puedes ingresar sin la contraseña");
}
