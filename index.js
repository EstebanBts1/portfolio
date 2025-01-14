const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;
const totalItems = items.length;
const delay = 3000; // Temps en millisecondes pour le défilement automatique

function updateCarousel() {
  const offset = -currentIndex * 100; // Calculer le décalage
  track.style.transform = `translateX(${offset}%)`;
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalItems; // Passer à l'élément suivant
  updateCarousel();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Revenir à l'élément précédent
  updateCarousel();
}

// Ajouter des événements aux boutons
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// Défilement automatique
setInterval(showNextSlide, delay);

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Empêche l'envoi par défaut du formulaire

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.querySelector('textarea[name="message"]').value.trim();

      let errors = [];

      // Vérification du champ nom
      if (name.length < 1) {
          errors.push("Le champ 'Nom' est obligatoire.");
      }

      // Vérification du champ email (simple regex pour vérifier la validité de l'email)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          errors.push("Veuillez entrer une adresse email valide.");
      }

      // Vérification du champ sujet
      if (subject.length < 1) {
          errors.push("Le champ 'Sujet' est obligatoire.");
      }

      // Vérification du champ message
      if (message.length < 1) {
          errors.push("Le champ 'Message' est obligatoire.");
      }

      // Afficher un message selon le résultat
      if (errors.length > 0) {
          alert("Échec : \n" + errors.join("\n"));
      } else {
          alert("Formulaire réussi !");
          form.reset(); // Réinitialise le formulaire après succès
      }
  });
});
