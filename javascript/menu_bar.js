const mobile_bar = document.querySelector(".menu_bar");
const navMenu = document.querySelector(".head_menu");

mobile_bar.addEventListener("click", () => {
    console.log("daragdlaaaa")
    navMenu.classList.toggle("active");
})