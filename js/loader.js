window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1500);

});