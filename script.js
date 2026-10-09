javascript
// 1. Afficher automatiquement l'année en cours dans le pied de page
document.getElementById("annee").textContent = new Date().getFullYear();

// 2. Ouvrir et fermer le menu sur mobile
const bouton = document.querySelector(".menu-bouton");
const menu = document.getElementById("menu");

bouton.addEventListener("click", function () {
  // toggle ajoute la classe si elle est absente, la retire sinon
  const estOuvert = menu.classList.toggle("ouvert");

  // On met à jour aria-expanded pour informer les lecteurs d'écran
  bouton.setAttribute("aria-expanded", estOuvert);
});

// 3. Refermer le menu quand on clique sur un lien (pratique sur mobile)
const liens = document.querySelectorAll(".menu a");

liens.forEach(function (lien) {
  lien.addEventListener("click", function () {
    menu.classList.remove("ouvert");
    bouton.setAttribute("aria-expanded", "false");
  });
});