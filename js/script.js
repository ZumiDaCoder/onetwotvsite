const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const dialog = document.querySelector('dialog')
const video = document.getElementById('modal-video')

function openMenu() {
    btn.classList.add('open')
    nav.classList.add('flex')
    nav.classList.remove('hidden')
    document.body.scrollTop = 0;
    document.body.style.overflowY = 'hidden';
}

function closeMenu() {
    btn.classList.remove('open')
    nav.classList.remove('flex')
    nav.classList.add('hidden')
    document.body.style.overflowY = 'auto';
}

btn.addEventListener('click', () => {
    const isOpen = btn.classList.contains('open')
    if (isOpen) {
    closeMenu();
} else {
    openMenu();
}
    
})




document.querySelectorAll(".modal").forEach((button) => { 
    button.addEventListener("click", () => { 
        video.src = button.getAttribute("data-url")
        dialog.showModal()
     })
 })

 nav?.querySelectorAll("a").forEach((navlink) => { 
    navlink.addEventListener("click", closeMenu)
 })