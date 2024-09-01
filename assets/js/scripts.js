window.onload = () => {
    document.querySelector("#menuMobile").addEventListener("click", () => {
        document.querySelector("#main-menu").classList.toggle("menuAberto");

        document.querySelector(".logo").classList.toggle("hidden");
    });
};
