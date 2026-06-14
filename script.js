// ==========================
// Theme Toggle
// ==========================

const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeToggle.innerHTML = "🌙";
} else {
  themeToggle.innerHTML = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    themeToggle.innerHTML = "🌙";
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.innerHTML = "☀️";
  }
});


// ==========================
// Hamburger Menu
// ==========================

const hamburger = document.getElementById("hamburger");
const navMenu   = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
  hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Close menu when a nav link is clicked
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open menu");
  });
});


// ==========================
// Typing Animation
// ==========================

const typingText    = "Building Intelligent Systems With AI";
const typingElement = document.getElementById("typing");

if (typingElement) {
  let index = 0;
  function typeWriter() {
    if (index < typingText.length) {
      typingElement.innerHTML += typingText.charAt(index);
      index++;
      setTimeout(typeWriter, 70);
    }
  }
  typeWriter();
}


// ==========================
// Navbar Background On Scroll
// ==========================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background      = "rgba(15,23,42,0.88)";
    navbar.style.backdropFilter  = "blur(20px)";
  } else {
    navbar.style.background      = "rgba(255,255,255,0.05)";
    navbar.style.backdropFilter  = "blur(20px)";
  }
}, { passive: true });


// ==========================
// Scroll Reveal Animation
// (applied after load so SEO sees content)
// ==========================

window.addEventListener("load", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll(".card, .project, .timeline-card, section")
    .forEach(el => {
      el.classList.add("hidden");
      observer.observe(el);
    });
});


// ==========================
// Active Navbar Links
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (pageYOffset >= section.offsetTop - 160) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}, { passive: true });


// ==========================
// Smooth Hover Glow on Cards
// ==========================

document.querySelectorAll(".card, .project, .timeline-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});


// ==========================
// Contact Form — Inline Success
// ==========================

const form        = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

if (form) {
  form.addEventListener("submit", (e) => {
    // Show inline success message (formsubmit.co handles actual delivery)
    formSuccess.hidden = false;
    formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Reset form after short delay
    setTimeout(() => {
      form.reset();
      setTimeout(() => { formSuccess.hidden = true; }, 5000);
    }, 500);
  });
}
