const btn_fav = document.getElementById("add_to_fav");
const nb_fav = document.getElementById("txt_nb_fav");

let isPressed = false;
let count = parseInt(nb_fav.textContent);

btn_fav.addEventListener("click", function() {
  btn_fav.classList.toggle('pressed');
  if (!isPressed) {
    count++;
  } else {
    count--;
  }
  nb_fav.textContent = count;
  isPressed = !isPressed;
});
