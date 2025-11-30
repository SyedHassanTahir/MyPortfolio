// MOBILE MENU TOGGLE
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  // Auto close when link is clicked
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}
// SCROLL ANIMATION
const sections = document.querySelectorAll(".section, .project, .skill, .tool");
const revealOnScroll = () => {
  sections.forEach(sec => {
    const windowHeight = window.innerHeight;
    const revealTop = sec.getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      sec.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// CONTACT FORM (FRONTEND ONLY)
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;

    if (name === "" || email === "") {
      alert("Please fill in required fields.");
      return;
    }

    alert(`Thank you ${name}! Your message has been sent `);

    this.reset();
  });
}

// FOOTER YEAR
const yearSpan = document.getElementById("year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
// BUTTON RIPPLE EFFECT
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
