const bdark = document.querySelector("#bdark");
const body = document.querySelector("body");
const a = document.querySelector(".links-main");
const a1 = document.querySelector(".links-main2");
const a2 = document.querySelector(".links-main3");
const a3 = document.querySelector(".links-main4");
const a4 = document.querySelector(".links-main5");

bdark.addEventListener("click", (e) => {
    body.classList.toggle("darkmode");
    a.classList.toggle("darkmode");
    a1.classList.toggle("darkmode");
    a2.classList.toggle("darkmode");
    a3.classList.toggle("darkmode");
    a4.classList.toggle("darkmode");
});
