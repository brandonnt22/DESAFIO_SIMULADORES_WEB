//====================================
// EJERCICIO 1
// TRANSFERENCIA DE CALOR
//====================================

function calcularTemperatura(){

    let T0 = Number(document.getElementById("t0").value);
    let Ts = Number(document.getElementById("ts").value);
    let k = Number(document.getElementById("k").value);
    let t = Number(document.getElementById("tiempo").value);

    if(isNaN(T0) || isNaN(Ts) || isNaN(k) || isNaN(t)){
        alert("Ingrese valores válidos.");
        return;
    }

    if(k < 0 || t < 0){
        alert("k y tiempo deben ser positivos.");
        return;
    }

    let temperatura =
        Math.round(
            Ts + (T0 - Ts) * Math.exp(-k * t)
        );

    document.getElementById("resultadoCalor").innerHTML =
        "Temperatura final: <strong>" +
        temperatura +
        " °F</strong>";
}


//====================================
// FACTORIAL PROPIO
// REQUERIMIENTO OBLIGATORIO
//====================================

function factorial(n){

    let resultado = 1;

    for(let i = 1; i <= n; i++){
        resultado *= i;
    }

    return resultado;
}


//====================================
// COMBINACIONES
// C(n,r)=n!/(r!(n-r)!)
//====================================

function combinacion(n,r){

    return factorial(n) /
          (factorial(r) * factorial(n-r));
}


//====================================
// EJERCICIO 2
//====================================

function calcularCombinaciones(){

    let n1 = Number(document.getElementById("n1").value);
    let r1 = Number(document.getElementById("r1").value);

    let n2 = Number(document.getElementById("n2").value);
    let r2 = Number(document.getElementById("r2").value);


    if(r1 > n1 || r2 > n2){
        alert("No puede ocurrir que r sea mayor que n.");
        return;
    }

    if(n1 < 0 || r1 < 0 || n2 < 0 || r2 < 0){
        alert("Los valores deben ser positivos.");
        return;
    }

    let grupo1 = combinacion(n1,r1);

    let grupo2 = combinacion(n2,r2);

    let total = grupo1 * grupo2;

    document.getElementById("resultadoCombinaciones").innerHTML =
        `
        Grupo 1 C(${n1},${r1}) = ${grupo1.toLocaleString()} <br>
        Grupo 2 C(${n2},${r2}) = ${grupo2.toLocaleString()} <br><br>

        <strong>
        Total de combinaciones:
        ${total.toLocaleString()}
        </strong>
        `;
}