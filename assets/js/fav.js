const btn_fav = document.getElementById("add_to_fav");
const nb_fav = document.getElementById("txt_nb_fav");

let isPressed = false;
let count = parseInt(nb_fav.textContent);

btn_fav.setAttribute("aria-pressed", "false");

btn_fav.addEventListener("click", function () {
  btn_fav.classList.toggle("pressed");
  if (!isPressed) {
    count++;
    btn_fav.setAttribute("aria-label", "Retirer de mes destinations préférées");
  } else {
    count--;
    btn_fav.setAttribute("aria-label", "Ajouter à mes destinations préférées");
  }
  nb_fav.textContent = count;
  isPressed = !isPressed;
  btn_fav.setAttribute("aria-pressed", String(isPressed));
});
