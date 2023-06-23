const toggleMenuElement = document.getElementById("toggle-menu");
const listHeader = document.getElementById("list-header");

toggleMenuElement.addEventListener("click", () => {
    listHeader.classList.toggle("main-menu-show");
});
