const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const dialog = document.querySelector('dialog')
const video = document.getElementById('modal-video')

btn.addEventListener('click', () => {
    const isOpen = btn.classList.contains('open')
    if (isOpen) {
    btn.classList.remove('open')
    nav.classList.remove('flex')
    nav.classList.add('hidden')
    document.body.style.overflowY = 'auto';
} else {
    btn.classList.add('open')
    nav.classList.add('flex')
    nav.classList.remove('hidden')
    document.body.scrollTop = 0;
    document.body.style.overflowY = 'hidden';
}
    
})




document.querySelectorAll(".modal").forEach((button) => { 
    button.addEventListener("click", () => { 
        video.src = button.getAttribute("data-url")
        dialog.showModal()
     })
 })