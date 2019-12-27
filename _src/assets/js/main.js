/* ["💃", "🔥", "🌵", "🍑", "🎃", "🐋", "🎁", "😘"];

["👋", "🍕", "😒", "🍋", "🎉", "💪", "🌊", "👻"]; */

"use strict";

///////////////////////////// FORMA 1: CON FOR EACH /////////////////////////

/* const grupoTarjetas = ["🦄", "🍦", "💩", "🌈", "👽", "👾", "🐣", "🥑"];

const totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function reparteTarjetas() {
  const mesa = document.querySelector("#mesa");

  mesa.innerHTML = "";

  totalTarjetas.forEach(function(elemento) {
    const tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta'>" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}

function descubrir() {
  this.class.classList("descubierta");
}

reparteTarjetas(); */

////////////////////////////// FORMA 2: CON FOR Y FOR OF ////////////////////////////////

let totalIcons = ["🦄", "🍦", "💩", "🌈", "👽", "👾", "🐣", "🥑"];

const table = document.querySelector(".mesa");
const card = document.querySelector(".tarjeta");

//// PINTAR UNA CARTA Y SU DORSO/////

function paintCard(cardStatus_object) {
  const card = document.createElement("li");
  card.classList.add("tarjeta");
  card.addEventListener("click", cardClickHandler);
  card.setAttribute("data-id", cardStatus_object.id);

  const cardContent = document.createElement("div");
  cardContent.classList.add("tarjeta__contenido");

  if (cardStatus_object.turned === "true") {
    card.classList.add("js-giro");
    cardContent.innerHTML = "";
  } else {
    card.classList.remove("js-giro");
    cardContent.innerHTML = totalIcons[cardStatus_object.icon];
  }

  card.appendChild(cardContent);
  table.appendChild(card);
}

////// SABER SI LAS TARJETAS ESTÁN BOCA ARRIBA O BOCA ABAJO ///////

let cardStatus = [
  { id: 0, turned: "true", icon: 0 },
  { id: 1, turned: "false", icon: 1 },
  { id: 2, turned: "true", icon: 2 },
  { id: 3, turned: "true", icon: 3 },
  { id: 4, turned: "true", icon: 4 },
  { id: 5, turned: "true", icon: 5 },
  { id: 6, turned: "true", icon: 6 },
  { id: 7, turned: "true", icon: 7 },
  { id: 8, turned: "true", icon: 0 },
  { id: 9, turned: "true", icon: 1 },
  { id: 10, turned: "false", icon: 2 },
  { id: 11, turned: "true", icon: 3 },
  { id: 12, turned: "true", icon: 4 },
  { id: 13, turned: "true", icon: 5 },
  { id: 14, turned: "false", icon: 6 },
  { id: 15, turned: "true", icon: 7 }
];

/// DESORDENAR EL ARRAY //////

cardStatus = cardStatus.sort(function() {
  return Math.random() - 0.5;
});
console.log(cardStatus);

//// PINTAR TODAS LAS TARJETAS CON LA FOTO DEL ESTADO DEL JUEGO ///

function paintGameStatus() {
  for (let i = 0; i < cardStatus.length; i++) {
    paintCard(cardStatus[i]);
  }
}

paintGameStatus();

////// CAMBIAR EL ESTADO DEL JUEGO AL HACER CLICK //////

function cardClickHandler(event) {
  const card = event.currentTarget;
  const identificador = parseInt(card.getAttribute("data-id"));
  const index = cardStatus.findIndex(elemento => elemento.id === identificador);

  if (cardStatus[index].turned === "true") {
    cardStatus[index].turned = "false";
  } else {
    cardStatus[index].turned = "true";
  }
  table.innerHTML = "";
  paintGameStatus();
}
