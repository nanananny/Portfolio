document.querySelectorAll('.navbar a').forEach(link => {
    if (link.href.includes(location.pathname)) {
        link.classList.add('active');
    }
});


document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 200);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.navbar ul');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

console.log("Portfolio JS Loaded ✔");
