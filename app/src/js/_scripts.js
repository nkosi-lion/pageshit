
const mobileNav = document.querySelector('.mobilenav')
const hamB = document.querySelector('.hamburger')
const closeData = document.querySelector('.closeicon')
const navToggle = document.querySelector('.toggle-menu')
const actToggle = document.querySelector('.toggle')


navToggle.addEventListener("click", () => {
    document.body.classList.toggle('nav-open')
})
