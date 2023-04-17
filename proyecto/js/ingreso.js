window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var mensaje = urlParams.get('error');
    var mensajeDiv = document.getElementById('MSG');
    var mensajeDivError = document.getElementById('error');
    if(mensaje==="3"){
        mensajeDivError.innerHTML = "No hay una salida registrada";
        setTimeout(function(){
            alert("No hay una salida registrada");
            mensajeDivError.innerHTML = "";
        }, 1000);
    }
    if(mensaje==="2"){
        mensajeDivError.innerHTML = "No hay una entrada registrada";
        setTimeout(function(){
            alert("No hay una entrada registrada");
            mensajeDivError.innerHTML = "";
        }, 1000);
    }
    if (mensaje === "1") {
        mensajeDiv.innerHTML = "Registro exitoso";
        setTimeout(function(){
            alert("Registro exitoso");
            mensajeDiv.innerHTML = "";
        }, 1000);
    }
    if(mensaje==="0"){
        mensajeDivError.innerHTML = "Usuario o contrasena incorrecto";
        setTimeout(function(){
            alert("Usuario o contrasena incorrecto");
            mensajeDivError.innerHTML = "";
        }, 1000);
    }
  };
  
function validarFormulario() {
    var nombre =document.getElementById("nombre").value;
    var password =document.getElementById("password").value;

    var errrMsg_nombre =document.getElementById("error-nombre");
    var errrMsg_password =document.getElementById("error-password");
   
    var cont=0;

    if(nombre===""){
        errrMsg_nombre.innerHTML="Favor de ingresar un nombre de usuario";
        cont++;
    }
    else{
        errrMsg_nombre.innerHTML="";
    }

    if(password===""){
        errrMsg_password.innerHTML="Favor de ingresar una contrasena";
        cont++;
    }else{
        errrMsg_password.innerHTML="";
    }

    if(cont>0 || password!==confirm_password){
        return false;
    }
    else{
        return true;
    }
}

function mostrarHoraYFecha() {
    var fecha = new Date(); // Obtener la fecha y hora actual
    var hora = fecha.getHours(); // Obtener la hora actual
    var minuto = fecha.getMinutes(); // Obtener los minutos actuales
    var segundo = fecha.getSeconds(); // Obtener los segundos actuales
    var dia = fecha.getDate(); // Obtener el día actual
    var mes = fecha.getMonth() + 1; // Obtener el mes actual
    var anio = fecha.getFullYear(); // Obtener el año actual

    // Agregar un cero delante de los números menores a 10
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;
    mes = mes < 10 ? "0" + mes : mes;
    dia = dia < 10 ? "0" + dia : dia;

    // Obtener el elemento HTML donde se mostrará la hora y la fecha
    var horaYFechaActual = document.getElementById("hora-y-fecha-actual");

    // Insertar la hora y la fecha en el elemento HTML
    horaYFechaActual.innerHTML = hora + ":" + minuto + ":" + segundo + " - " + dia + "/" + mes + "/" + anio;
}
setInterval(mostrarHoraYFecha,1000);// actualizar cada segundo
