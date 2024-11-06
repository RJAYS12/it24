function toggleMenu(){
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}
function showAlert() {
    var textbox = document.getElementById('textbox');
    alert("Hello " + textbox.value);
}
