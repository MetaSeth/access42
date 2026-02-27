function initDisclosure() {
  document.querySelectorAll(".disclosure-button").forEach((element) => {
    const target = document.getElementById(
      element.getAttribute("aria-controls")
    );

    const isExpanded = element.classList.contains("expanded");
    element.setAttribute("aria-expanded", String(isExpanded));

    element.addEventListener("click", () => {
      const nowExpanded = element.getAttribute("aria-expanded") === "true";
      const newState = !nowExpanded;

      element.setAttribute("aria-expanded", String(newState));

      element.classList.toggle("expanded");
      target.classList.toggle("expanded");
    });
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  initDisclosure();
});
