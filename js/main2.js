//Se llama el formulario
document.getElementById('form_PesoIdeal').addEventListener('submit' , function(event){
    event.preventDefault();

    //Se definen las variables
    const sexo = document.getElementById('sexo').value;
    const edad2 = parseInt(document.getElementById('edad2').value);
    const pesoActual = parseFloat(document.getElementById('pesoActual').value);
    let estatura = parseFloat(document.getElementById('estatura').value);
    
    let pesoIdeal, imc, calificacion, deficit;

    //Se realiza la formula para los diferentes sexos
    if (sexo === 'Masculino'){
        pesoIdeal = estatura - 100 -((estatura - 150)/ 4);

    } else if (sexo ==='Femenino'){
        pesoIdeal = estatura - 100 -((estatura - 150)/ 2);

    } else { 
        document.getElementById('resultado').innerHTML = '<div class="alert alert-danger">Por favor, seleccione un sexo válido.</div>';
        return;
    }
    estatura=estatura/100; //convertir estatura a metros
    imc = pesoActual / (estatura*estatura);
    deficit = pesoActual - pesoIdeal;

    if (deficit > 0) {
        recomendacion = `Necesita perder ${deficit.toFixed(1)} kg para alcanzar su peso ideal.`;
    } else if (deficit < 0) {
        recomendacion = `Necesita ganar ${(Math.abs(deficit)).toFixed(1)} kg para alcanzar su peso ideal.`;
    } else {
        recomendacion = 'Ya está en su peso ideal.';
    }

    //Se definen los diferentes casos segun el IMC
    switch (true) {
        case (imc < 18.5):
            calificacion = '<span class="badge text-bg-danger">Bajo Peso</span>';
            break;
        case (imc >= 18.5 && imc < 24.9):
            calificacion = '<span class="badge text-bg-success">Peso Normal</span>';
            break;
        case (imc >= 25 && imc < 29.9):
            calificacion = '<span class="badge text-bg-warning">Sobrepeso</span>';
            break;
        case (imc >= 30):
            calificacion = '<span class="badge text-bg-danger">Obesidad</span>';
            break;
        default:
            calificacion = 'Calificación no disponible';
    }

    

    //Se da el resultado basado en la informacion ingresada por el usuario
    document.getElementById('resultado').innerHTML = `
        <div class="alert alert-secondary role="alert"">
            <strong>Resultado</strong><br>
            Edad: ${edad2} años<br>
            Peso Actual: ${pesoActual} kg<br>
            Estatura: ${estatura} cm<br>
            IMC: ${imc.toFixed(1)} ${calificacion}<br>
            Peso Ideal: <span class="badge text-bg-info">${pesoIdeal.toFixed(1)} kg</span><br>
            Recomendacion: <span class="badge text-bg-dark">${recomendacion} </span><br>
        </div>
    `;

});

