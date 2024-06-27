/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Mis Varibles

  let quien = ["The dog", "My grandma", "The mailman", "My bird"];

  let accion = ["ate", "peed", "crushed", "broke"];

  let que = ["my homework", "my phone", "the car"];

  let cuando = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // variables para encontar el indice de acada array

  const excuseGenerator = () => {
    let numeroAleatorioDecimal = Math.random();
    let indiceQuien = Math.floor(numeroAleatorioDecimal * quien.length);
    let indiceAccion = Math.floor(numeroAleatorioDecimal * accion.length);
    let indiceQue = Math.floor(numeroAleatorioDecimal * que.length);
    let indicieCuando = Math.floor(numeroAleatorioDecimal * cuando.length);

    //  variables para obtener la palabra de cada array de manera aleatoria

    let palabraQuien = quien[indiceQuien];
    let palabraAccion = accion[indiceAccion];
    let palabraQue = que[indiceQue];
    let palabraCuando = cuando[indicieCuando];

    // variable que me devuelve la frase completa

    let fraseCompleta =
      palabraQuien +
      " " +
      palabraAccion +
      " " +
      palabraQue +
      " " +
      palabraCuando;

    return fraseCompleta;
  };

  console.log(excuseGenerator());
  // function mostrarExcusa
  document.getElementById("GENERAEXCUSA").addEventListener("click", function() {
    document.getElementById("excuse").innerHTML = excuseGenerator();
  });
};
// FUNCION PARA QUE AL HACER CLICK LA 3RA VEZ TE ENSEÑE UNA IMG DE ERROR
(function() {
  var contador = 0;
  document.getElementById("GENERAEXCUSA").addEventListener("click", function() {
    if (contador === 2) {
      // ALERTA USADA DE SWEETALERT2
      Swal.fire({
        title: "Ups!!! Try Again.",
        imageUrl:
          "https://img.freepik.com/foto-gratis/texto-deformacion-transmision-palabra-error_53876-108497.jpg?t=st=1719423318~exp=1719426918~hmac=d572bce580d0814a124cf397e604c96546a843995319082ff2cfcf2b7049c102&w=1380",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
      contador = 0;
    } else {
      contador++;
    }
  });
})();

// for (let i = 0; i > 3; i++) {}
