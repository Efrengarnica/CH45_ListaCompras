const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");

//No puedo usar ninguno de los metodos append y demas para llenar mi tabla a la mitad entonces hago esto
//Aqui estoy ocupando la variable de arriba
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);
 let isValid = true; //Bandera, al ser true permite agregar los datos a la tabla
let contador = 0;
let precio = 0;
let costoTotal = 0;
let totalEnProductos = 0;





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

function getPrecio(){ //Mdn web docs hay un objeto Math(Cosas matemáticas) y cuenta con métodos interesantes, ocuparemos uno para esta funcion

return Math.round((Math.random()*10000))/100;

}



btnAgregar.addEventListener("click", function(event){
    event.preventDefault(); // prevenir lo que, el boton, hace por defecto y que haga lo que yo quiero que haga, dejar que el boton deje de hacer lo que haga por default
    
    //Hace que se quite lo que hay en el If de abajo cuando 
    //vuelvo a escribir un campo correcto
    txtNombre.style.border="";
    txtNumber.style.border="";
    alertValidacionesTexto.innerHTML=""; //El color rojo viene de bootsrap
    alertValidaciones.style.display="none";
    isValid = true;




//Validar el nombre del producto
    if(txtNombre.value.length<3){ 
        txtNombre.style.border="solid red medium";
        alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto. <br/>"; //El color rojo viene de bootsrap
        alertValidaciones.style.display="block";
        isValid = false;
        //return false;
    }

// Validar la cantidad
    if(! validarCantidad()){
        txtNumber.style.border="solid red medium";
        alertValidacionesTexto.innerHTML+="El <strong>Cantidad</strong> no es correcta. <br/>"; 
        alertValidaciones.style.display="block";
        isValid = false;
} // ! validarCantidad

    //Aqui agregaremos los elemtnos una vez que ya vemos que estan correctos
  if(isValid){
    contador++;
    precio = getPrecio();
    let row = `<tr>
                    <td>${contador}</td>
                    <td>${txtNombre.value}</td>
                    <td>${txtNumber.value}</td>
                    <td>${precio}</td>
    </tr>`;
    cuerpoTabla.insertAdjacentHTML("beforeend", row);
   //Hace que el recuadro de nombre se ponga en azul y que el cursor se ponga en ese recuadro listo para escribir 
    // Sobre él, sino lo pongo no se pone el cursor en ningún lado
    costoTotal += precio * Number(txtNumber.value);  //Usamo number ya que es un string y lo conviertoa numero
    totalEnProductos += Number(txtNumber.value);
    contadorProductos.innerText = contador;
    productosTotal.innerText = totalEnProductos;
    precioTotal.innerText = "$ " + costoTotal.toFixed(2);  //Hay veces que el navegador me expresa el resultado con muchos decimales aqui si puedo ocupar tofixed para redondear a 2 decimales, recordaar que esto es un string pero no importa
    //Esto es para que se quede guardado en un API mis datos
    //Independientement si cierro las pestañas o el navegador
    localStorage.setItem("contador", contador); //el primer argumento es mi key y el 2do es value
    localStorage.setItem("totalEnProductos", totalEnProductos);
    localStorage.setItem("costoTotal", costoTotal);
    
    //Ya que ya No haré más operaciones con el resultado final



    //Lo cambiamoa abajo para que sirviera costoTotal ya que
    //Iba a estar limpiando los campos y no permitia que hcieramos las 
    //operaciones, entonces primero hicimoas las operaciones y luego limpiamos
    txtNombre.value =""; //Limpia el campo una vez ingresaste tus cosas
    txtNumber.value ="";
    txtNombre.focus(); 

}// isValid




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


/// Hoy vamos a crear un precio al azar con una funcion que haremos
//La funcion getPrecio() esta arriba.



//Para que se mantengan creoooo
window.addEventListener("load", function(){

   if(this.localStorage.getItem("contador") != null){//el primer argumento es mi key y el 2do es value
        contador = Number(this.localStorage.getItem("contador"));
   }// !Null
   
   if(this.localStorage.getItemem("totalEnProductos")!=null){
      totalEnProductos = Number(this.localStorage.getItem("totalEnProdcutos"));
   }
   
   if(this.localStorage.getItem("costoTotal") !=null){
    costoTotal = Number(this.localStorage.getItem("costoTotal"));
   }

   contadorProductos.innerText = contador;
   productosTotal.innerText = totalEnProductos;
   precioTotal.innerText = "$ " + costoTotal.toFixed(2); 

});// windows load












