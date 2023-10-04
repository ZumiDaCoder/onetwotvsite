const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const dialog = document.querySelector('dialog')
const video = document.getElementById('modal-video')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})




document.querySelectorAll(".modal").forEach((button) => { 
    button.addEventListener("click", () => { 
        video.src = button.getAttribute("data-url")
        dialog.showModal()
     })
 })