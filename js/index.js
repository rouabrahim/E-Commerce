const humburger = document.querySelector('.hamburger');
const navList = document.querySelector(".nav-list");

if(humburger){
    humburger.addEventListener('click',() => {
        navList.classList.toggle('open');
    });
}


const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup-close');

if (popup) {
  // Gestion de la fermeture du popup
  closePopup.addEventListener('click', () => {
    popup.classList.add('hide-popup'); // Ajoute la classe pour cacher le popup
  });

  // Affiche le popup après le chargement de la page
  window.addEventListener('load', () => {
    setTimeout(() => {
      popup.classList.remove('hide-popup'); // Retire la classe pour afficher le popup
    }, 1000); // Attente de 1 seconde
  });
}



