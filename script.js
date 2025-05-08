// 1. Sélection des éléments HTML
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const dateDiv = document.querySelector(".date");

// 2. Fonction pour mettre à jour l'horloge
function updateClock() {
  const now = new Date();

  // Extraire l'heure, les minutes, les secondes
  let h = now.getHours().toString().padStart(2, "0");
  let m = now.getMinutes().toString().padStart(2, "0");
  let s = now.getSeconds().toString().padStart(2, "0");

  // Mettre à jour le contenu HTML
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;

  // Format de la date
  const jours = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const mois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  let jour = jours[now.getDay()];
  let date = now.getDate().toString().padStart(2, "0");
  let moisNom = mois[now.getMonth()];
  let annee = now.getFullYear();

  // Mettre à jour la date
  dateDiv.textContent = `${jour} ${date} ${moisNom} ${annee}`;
}

// 3. Mise à jour immédiate + toutes les secondes
updateClock();
setInterval(updateClock, 1000);
