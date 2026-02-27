function initDisclosure() {
    document.querySelectorAll('.disclosure-button').forEach((element) => {
        const target = document.getElementById(element.getAttribute('aria-controls'));
        element.addEventListener('click', (event) => {
            const isExpanded = event.target.classList.contains('expanded');
            event.target.classList.toggle('expanded');
            target.classList.toggle('expanded');
        })
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    initDisclosure();
});