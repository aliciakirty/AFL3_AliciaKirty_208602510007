document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === "") {
        alert("Semua field harus diisi!");
    } else {
        alert("Pesan berhasil dikirim!");
    }
});

// SCROLL ANIMATION
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});