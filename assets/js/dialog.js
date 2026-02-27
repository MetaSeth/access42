const triggerButton = document.getElementById("menu_button");
const closeButton = document.getElementById("close_menu_button");
const dialog = document.getElementById("menu");
const mainContent = document.getElementById("wrapper");

const focusableSelectors =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusableElements() {
  return Array.from(dialog.querySelectorAll(focusableSelectors));
}

function openDialog() {
  dialog.classList.remove("hidden");

  triggerButton.setAttribute("aria-expanded", "true");
  mainContent.setAttribute("aria-hidden", "true");
  mainContent.setAttribute("inert", "");

  closeButton.focus();

  dialog.addEventListener("keydown", handleFocusTrap);
}

function closeDialog() {
  dialog.classList.add("hidden");

  triggerButton.setAttribute("aria-expanded", "false");
  mainContent.removeAttribute("aria-hidden");
  mainContent.removeAttribute("inert");

  dialog.removeEventListener("keydown", handleFocusTrap);

  triggerButton.focus();
}

function handleFocusTrap(event) {
  const focusable = getFocusableElements();
  const firstFocusable = focusable[0];
  const lastFocusable = focusable[focusable.length - 1];

  if (event.key === "Escape") {
    closeDialog();
    return;
  }

  if (event.key === "Tab") {
    if (event.shiftKey) {
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }
}

triggerButton.addEventListener("click", openDialog);
closeButton.addEventListener("click", closeDialog);
