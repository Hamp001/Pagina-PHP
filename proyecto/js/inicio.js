function validarFormulario() {
    var nombre =document.getElementById("nombre").value;
    var email =document.getElementById("email").value;
    var password =document.getElementById("password").value;
    var confirm_password =document.getElementById("confirm_password").value;

    var errrMsg_nombre =document.getElementById("error-nombre");
    var errrMsg_email =document.getElementById("error-email");
    var errrMsg_password =document.getElementById("error-password");
    var errrMsg_confirm_password =document.getElementById("error-confirm_password");
    
    var email_regex = /^\S+@\S+\.\S+$/;
    var cont=0;

    if(nombre===""){
        errrMsg_nombre.innerHTML="Favor de ingresar un nombre de usuario";
        cont++;
    }
    else{
        errrMsg_nombre.innerHTML="";
    }

    if(email===""){
        errrMsg_email.innerHTML="Favor de ingresar un correo electronico";
        cont++;
    }else{
        errrMsg_email.innerHTML="";
    }

    if(password===""){
        errrMsg_password.innerHTML="Favor de ingresar una contrasena";
        cont++;
    }else{
        errrMsg_password.innerHTML="";
    }

    if(confirm_password===""){
        errrMsg_confirm_password.innerHTML="Favor de confirmar la contrasena";
        cont++;
    }else if(password!==confirm_password){
        errrMsg_confirm_password.innerHTML="Las contraseñas no coinciden";
    }else{
        errrMsg_confirm_password.innerHTML="";
    }


    if(cont>0 || password!==confirm_password){
        return false;
    }
    else{
        return true;
    }
}


