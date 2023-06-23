let check = document.querySelector(".check");
check.addEventListener('click', () => {

    let id = check.checked;

    if (id == true) {

        location.href = "../languages/index.html";

    } else {

        location.href = "../index.html";


    }

});