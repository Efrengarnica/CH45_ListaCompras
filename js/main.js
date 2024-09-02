const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
    }//length==0

    if (isNaN(txtNumber.value)){  //isNaN es NO es un numero
        return false;      //Validar si es un numero
    } //isNaN  regresa true si NO es un número y pedimos que regrese false para que se ejecute mi alerta de que esta mal la cantidad
    //Lllegas aqui ya sabiendo que es un numero, aqui abajo es este if de numero negativo
    if (Number(txtNumber.value)<=0) {  //Validar si el numero es negativo
        return false;
    } // Podriamos agregar otra funcion, como le hicimos con el de validar
    // nombre para quitar espacios, en este caso con los numeros NO es necesario






    return true;
}// validarCantidad()




btnAgregar.addEventListener("click", function(event){
    event.preventDefault(); // prevenir lo que, el boton, hace por defecto y que haga lo que yo quiero que haga, dejar que el boton deje de hacer lo que haga por default
    
    //Hace que se quite lo que hay en el If de abajo cuando 
    //vuelvo a escribir un campo correcto
    txtNombre.style.border="";
    txtNumber.style.border="";
    alertValidacionesTexto.innerHTML=""; //El color rojo viene de bootsrap
    alertValidaciones.style.display="none";

//Validar el nombre del producto
    if(txtNombre.value.length<3){ 
        txtNombre.style.border="solid red medium";
    alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto. <br/>"; //El color rojo viene de bootsrap
        alertValidaciones.style.display="block";
        //return false;
    }

// Validar la cantidad
    if(! validarCantidad()){
        txtNumber.style.border="solid red medium";
        alertValidacionesTexto.innerHTML+="El <strong>Cantidad</strong> no es correcta. <br/>"; 
        alertValidaciones.style.display="block";
} // ! validarCantidad




}); // Aqui termina el btnAGREGAR. addEventListener

// evento blur es cuando un campo pierde el foco, se sale del campo, el campo se ilumina de azul
txtNombre.addEventListener("blur", function(event){ // Ilumina el campo y deja de hacerlo cuando quitas el mouse
    txtNombre.value = txtNombre.value.trim(); //Quita espacios que pudo haber puesto el usuario cuadno llenaba el formulario al inicio y al final, se valida con el if de arriba que es incorrecto y despues le quita los espacios


}); //Aqui termina el txtNombre.addEventListener

txtNumber.addEventListener("blur", function(event){ // Ilumina el campo y deja de hacerlo cuando quitas el mouse
    txtNumber.value = txtNumber.value.trim(); //Quita espacios que pudo haber puesto el usuario cuadno llenaba el formulario al inicio y al final, se valida con el if de arriba que es incorrecto y despues le quita los espacios

//Cuidado con ocupar eventos para suprimir mucho las cosas que el usuario
// puede usar ya que es frustante para el usuario, es mejor esto.
});

















