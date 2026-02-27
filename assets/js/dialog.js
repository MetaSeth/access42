// Ouvrir la fenêtre de dialogue


function openDialog() {

  // Rendre la fenêtre de dialogue visible et ajouter les attributs ARIA
  const dialog = document.getElementById("menu");
  dialog.style.display = "block";
  dialog.setAttribute("aria-hidden", "true");
  dialog.classList.remove('hidden');


  // Désactiver la navigation au clavier en dehors de la fenêtre de dialogue
  const mainContent = document.getElementById("wrapper");
  mainContent.setAttribute("aria-hidden", "true");
  mainContent.setAttribute("inert", "true");

  // Définir le titre focus initial sur la fenêtre de dialogue
  setTimeout(function() {
    dialog.focus();
  }, 100);

}

// Fermer la fenêtre de dialogue
function closeDialog() {
  // Rendre la fenêtre de dialogue invisible et supprimer les attributs ARIA
  const dialog = document.getElementById("menu");
  dialog.style.display = "none";
  dialog.className = 'hidden';

  // Réactiver la navigation au clavier en dehors de la fenêtre de dialogue
  const mainContent = document.getElementById("wrapper");
  mainContent.removeAttribute("aria-hidden");
  mainContent.removeAttribute("inert");

}

// Gérer les interactions clavier pour la fenêtre de dialogue
function handleKeyPress(event) {
  // Si la touche "Escape" est enfoncée, fermer la fenêtre de dialogue
  if (event.key === "Escape") {
    closeDialog();
  }
}

// Ajouter les événements aux éléments appropriés
const triggerButton = document.getElementById("menu_button");
triggerButton.addEventListener("click", openDialog);

const closeButton = document.getElementById("close_menu_button");
closeButton.addEventListener("click", closeDialog);

const dialog = document.getElementById("menu");
dialog.addEventListener("keydown", handleKeyPress);

