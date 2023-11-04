function calcularTiempo() {

    let distanciaCiudadesInput = prompt("Ingresa la distancia entre ciudades en kilómetros:");
    let distanciaCiudades = parseFloat(distanciaCiudadesInput);

    if (distanciaCiudades < 0) {
        alert("La distancia entre ciudades debe ser mayor o igual a cero.");
        return;
    }

    let velocidadPromedioInput = prompt("Ingresa la velocidad promedio en km/h:");
    let velocidadPromedio = parseFloat(velocidadPromedioInput);

    if (velocidadPromedio < 0) {
        alert("La velocidad promedio debe ser mayor que cero.");
        return;
    }

    let tiempoDescansoInput = prompt("Ingresa el tiempo de descanso entre ciudades en minutos:");
    let tiempoDescanso = parseFloat(tiempoDescansoInput);

    if (tiempoDescanso < 0) {
        alert("El tiempo de descanso debe ser mayor o igual a cero.");
        return;
    }

    let numDescansosInput = prompt("Ingresa el número de descansos programados:");
    let numDescansos = parseInt(numDescansosInput);

    if (numDescansos < 0) {
        alert("El número de descansos debe ser mayor o igual a cero.");
        return;
    }

    let distanciaAcumulada = 0;
    let tiempoAcumulado = 0;

    for (let i = 0; i < numDescansos; i++) {
        tiempoAcumulado = tiempoAcumulado + (tiempoDescanso / 60); // ***De minutos a horas***
        if (distanciaAcumulada < distanciaCiudades) {
            tiempoAcumulado = tiempoAcumulado + (distanciaCiudades / velocidadPromedio);
            distanciaAcumulada = distanciaAcumulada + distanciaCiudades;
        }
    }

    console.log(`Para recorrer ${distanciaCiudades} km a ${velocidadPromedio} km/h con ${numDescansos} descansos de ${tiempoDescanso} minutos entre ciudades, el tiempo total estimado es ${tiempoAcumulado} horas.`); 
}

// LLamar a esta función para calcular el tiempo de viaje:
calcularTiempo();
