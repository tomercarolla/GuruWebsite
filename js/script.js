let imgContainer = document.getElementById("coverImgContainer");
let subMenu = document.getElementById("subMenuContainer");

window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    if (window.scrollY > imgContainer.offsetHeight) {
        subMenu.classList.add("fixed");
    } else {
        subMenu.classList.remove("fixed");
    }
});
