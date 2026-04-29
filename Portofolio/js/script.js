document.getElementById("contactForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let alertBox = document.getElementById("alertBox");
    let btn = document.getElementById("submitBtn");

    let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let alertHTML = ""; // 🔥 WAJIB DIDEKLARASI

    btn.innerHTML = "Sending...";
    btn.disabled = true;

    setTimeout(() => {

        if (!name || !email || !message) {
            alertHTML = `
                <div class="alert alert-danger">
                    Please fill in all fields.
                </div>`;
        }
        else if (!emailValid.test(email)) {
            alertHTML = `
                <div class="alert alert-warning">
                    Please enter a valid email address.
                </div>`;
        } 
        else {
            alertHTML = `
                <div class="alert alert-success">
                    Your message has been sent successfully! ✨
                </div>`;

            document.getElementById("contactForm").reset();
        }

        // 🔥 INI YANG KAMU LUPA
        alertBox.innerHTML = alertHTML;

        btn.innerHTML = "Send Message";
        btn.disabled = false;

        setTimeout(() => {
            alertBox.innerHTML = "";
        }, 3000);

    }, 800);
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