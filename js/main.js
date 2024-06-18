function zapateria(){
    //Se obtienen los datos ingresados 
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let precio = parseFloat(document.getElementById("precio").value);
    let descuento = cantidad * precio;
    let resultado;
    

    if (isNaN(cantidad) || isNaN(precio)){
        alert("Por favor ingrese los valores esperados!!")
    }else{

        if (cantidad < 10){
            descuento = 0;
            resultado = cantidad * precio;
            //Mostrar el resultado
            document.getElementById("resultadoZapateria").innerHTML = "<div class='alert alert-success' role='alert'> <strong>Resultado:</strong> <br> <br> En esta compra no tuvo descuento $" + descuento +" <br>  <br> El valor total de la compra fue $ " + resultado + " <img src='img/running-shoe.png'></div>";
            
        } else if (cantidad >= 10 && cantidad <= 20){
            descuento = (cantidad * precio) * 0.10;
            resultado = (cantidad * precio) - descuento;
            //Mostrar el resultado
            document.getElementById("resultadoZapateria").innerHTML = "<div class='alert alert-success' role='alert'> <strong>Resultado:</strong> <br> <br> En esta compra tuvo un descuento del 10% que equivale a $" + descuento +" <br>  <br> El valor total de la compra fue $ " + resultado + " <img src='img/running-shoe.png'></div>";

        } else if (cantidad >= 20 && cantidad <= 30){
            descuento = (cantidad * precio) * 0.20;
            resultado = (cantidad * precio) - descuento;
            //Mostrar el resultado
            document.getElementById("resultadoZapateria").innerHTML = "<div class='alert alert-success' role='alert'> <strong>Resultado:</strong> <br> <br> En esta compra tuvo un descuento del 20% que equivale a $" + descuento +" <br>  <br> El valor total de la compra fue $ " + resultado + " <img src='img/running-shoe.png'></div>";

        } else if (cantidad > 30){
            descuento = (cantidad * precio) * 0.40;
            resultado = (cantidad * precio) - descuento;
            //Mostrar el resultado
            document.getElementById("resultadoZapateria").innerHTML = "<div class='alert alert-success' role='alert'> <strong>Resultado:</strong> <br> <br> En esta compra tuvo un descuento del 40% que equivale a $" + descuento +" <br>  <br> El valor total de la compra fue $ " + resultado + " <img src='img/running-shoe.png'></div>";

        }

        
    }
}

function años(){
    //Se solicita el valor a ingresar
    let edad = parseInt(document.getElementById("edad").value);
    let resultado;

    //Se valida la edad y se da el resultado 
    if (isNaN(edad)){
        alert("Por favor ingrese su Edad!!")
    }else{

        if(edad <= 12){
            document.getElementById("resultadoEdad").innerHTML = "<div class='alert alert-success' role='alert'> <strong>Respuesta:</strong> Usted es un Niño <img src='img/bb.png'> </div>";

        } else if (edad >12 && edad <= 40){
            document.getElementById("resultadoEdad").innerHTML = "<div class='alert alert-success' role='alert'> <strong>Respuesta:</strong> Usted es un Joven <img src='img/boy.png'> </div>";

        } else if (edad >40 && edad < 60){
            document.getElementById("resultadoEdad").innerHTML = "<div class='alert alert-success' role='alert'> <strong>Respuesta:</strong> Usted es un Adulto <img src='img/adult.png'> </div>";

        } else if (edad >= 60){
            document.getElementById("resultadoEdad").innerHTML = "<div class='alert alert-success' role='alert'> <strong>Respuesta:</strong> Usted es un Adulto Mayor <img src='img/old.png'> </div>";

        }

        
    }
}

function imc(){
    //obtener los valores ingresados
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc;
    let resultado;

    //validar los valores ingresados
    if (isNaN(peso) || isNaN(altura)){
        alert("Por favor ingrese los valores validos para peso y altura.");

    } else {
        //calcular el imc
        imc = peso / (altura * altura);
        imc = imc.toFixed(1);

        //Definimos los diferentes resultados
        if (imc < 18.5){
            //Mostrar el resultado
        document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-warning' role='alert'> <strong>Respuesta: Bajo Peso</strong> <img src='img/bajopeso.png'></div>";

        } else if (imc >= 18.5 && imc < 24.9){
            document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-succes' role='alert'> <strong>Respuesta: Peso Normal</strong> <img src='img/pesonormal.png'></div>";

        } else if (imc >= 25 && imc < 29.9){
            document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-warning' role='alert'> <strong>Respuesta: Sobrepeso</strong> <img src='img/sobrepeso.png'></div>";

        } else if (imc >= 30 && imc < 34.9){
            document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-danger' role='alert'> <strong>Respuesta: Obesidad Tipo I</strong>  <img src='img/obesity.png'></div>";

        } else if (imc >= 35 && imc < 39.9){
            document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-danger' role='alert'> <strong>Respuesta: Obesidad Tipo II</strong>  <img src='img/obesity.png'></div>";
        
        }  else if (imc >= 40 && imc < 49.9){
            document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-danger' role='alert'> <strong>Respuesta: Obesidad Tipo III</strong>  <img src='img/obesity.png'></div>";
        
        }  else if (imc >50){
            document.getElementById("resultadoIMC").innerHTML = "<div class='alert alert-danger' role='alert'> <strong>Respuesta: Obesidad Tipo IV</strong>  <img src='img/obesity.png'></div>";
        
        }


    }
}

function arterial() {
    //Se solicita el valor a ingresar
let presion = parseInt(document.getElementById("presion").value);
let resultado;

//Se valida la edad y se da el resultado 
if (isNaN(presion)){
    alert("Por favor ingrese su Presion Arterial Actual!!");

}else{

    if(presion < 90){
        document.getElementById("resultadoPresion").innerHTML = "<div class='alert alert-primary' role='alert'> <strong>Respuesta: Presion Baja</strong></div>";

    } else if (presion >90 && presion <= 120){
        document.getElementById("resultadoPresion").innerHTML = "<div class='alert alert-success' role='alert'> <strong>Respuesta: Presion Normal</strong></div>";

    } else if (presion > 120 && presion <= 139){
        document.getElementById("resultadoPresion").innerHTML = "<div class='alert alert-warning' role='alert'> <strong>Respuesta: Prehipertension</strong></div>";

    } else if (presion > 140 && presion <= 159){
        document.getElementById("resultadoPresion").innerHTML = "<div class='alert alert-danger' role='alert'> <strong>Respuesta: Alta: Hipertension Fase 1</strong></div>";

    } else if (presion >= 160){
        document.getElementById("resultadoPresion").innerHTML = "<div class='alert alert-danger' role='alert'> <strong>Respuesta: Alta: Hipertension Fase 2</strong></div>";

    }
    
}

    

}