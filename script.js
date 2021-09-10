document.querySelector("#nav-btn").addEventListener("click", () => {
    console.log("button worls")
    let nav = document.querySelector("#pages")
    nav.classList.toggle("show")
})