import { coloresClaros } from "./colores.js";
import { frases } from "./data.js";

var typed = new Typed(".efecto", {
  strings: [
    "Soy Desarrollador Web Front-End!",
    "Proyecto JQuery-Sass-Bootstrap",
    "Frases motivacionales",
    "Contácteme juliocmr97@gmail.com!",
    "👈🏻Toca el logo para ver mi CV",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 3000,
  loop: true,
});

function fraseRandom() {
  const random = Math.random() * frases.length;
  return frases[Math.round(random)];
}

function coloresRandom() {
  const color = Math.random() * coloresClaros.length;
  return coloresClaros[Math.round(color)];
}

$(document).ready(function () {
  $(".frase").text(fraseRandom().frase);
  $(".frase").addClass("fadeIn");
  $(".autor").text(fraseRandom().autor);
  $(".autor").addClass("fadeIn");
  setTimeout(() => {
    $(".frase").removeClass("fadeIn");
    $(".autor").removeClass("fadeIn");
  }, 800);

  $("button").click(function () {
    $(".contenedor__frases").css(
      "filter",
      `drop-shadow(0 0 5px ${coloresRandom()})`
    );

    $(".frase").text(fraseRandom().frase);
    $(".frase").addClass("fadeIn");
    $(".autor").text(fraseRandom().autor);
    $(".autor").addClass("fadeIn");
    setTimeout(() => {
      $(".frase").removeClass("fadeIn");
      $(".autor").removeClass("fadeIn");
    }, 800);
  });
});
