// =========================
// ANIMAZIONI LUCADEV
// =========================

document.addEventListener("DOMContentLoaded", () => {

  // -------------------------
  // Fade In Scroll
  // -------------------------
 const revealElements = document.querySelectorAll(
  ".info-card, .package-card, .project-card, .process-list li, .extra-service-card, .about-text, .about-box"
);

revealElements.forEach((el, index) => {

  const mobile = window.innerWidth <= 720;

  if (mobile) {
    el.style.opacity = "0";
    el.style.transform =
      index % 2 === 0
        ? "translateX(-50px)"
        : "translateX(50px)";
  } else {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
  }

  el.style.transition =
    "all 0.8s cubic-bezier(.16,1,.3,1)";
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translate(0)";
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => observer.observe(el));

  // -------------------------
  // Hero Floating Animation
  // -------------------------
  const heroVisual = document.querySelector(".hero-visual");

if(heroVisual){

  let angle = 0;

  function animateHero(){

    angle += 0.025;

    heroVisual.style.transform = `
      translateY(${Math.sin(angle) * 12}px)
    `;

    requestAnimationFrame(animateHero);
  }

  animateHero();
}
  // -------------------------
  // Navbar Active Link
  // -------------------------
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // -------------------------
  // Tilt Cards
  // -------------------------
  const cards = document.querySelectorAll(
    ".package-card, .info-card, .project-card"
  );

  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 10;
      const rotateX = ((y / rect.height) - 0.5) * -10;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-5px)
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

});

  // -------------------------
  // Parallax mobile
  // -------------------------


const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

  if(window.innerWidth <= 720){

    const scroll = window.scrollY;

    hero.style.backgroundPosition =
      `center ${scroll * 0.2}px`;

  }

});