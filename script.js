"use strict";

/* =========================
   SMOOTH SCROLL TO CONTACT
========================= */
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

/* =========================
   SCROLL ANIMATION (INTERSECTION OBSERVER)
========================= */

const sections = document.querySelectorAll(".section");

const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // একবার animate হলে আবার observe করবে না (performance better)
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

/* =========================
   CONTACT FORM HANDLING
========================= */

const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // validation
    if (!name || !email || !message) {
      showStatus("Please fill all fields!", "red");
      return;
    }

    if (!validateEmail(email)) {
      showStatus("Please enter a valid email!", "red");
      return;
    }

    // success
    showStatus("Message sent successfully! 🚀", "lightgreen");

    console.log({ name, email, message });

    form.reset();

    setTimeout(() => {
      clearStatus();
    }, 3000);
  });
}

/* =========================
   HELPER FUNCTIONS
========================= */

function showStatus(message, color) {
  if (!statusText) return;
  statusText.style.color = color;
  statusText.innerText = message;
}

function clearStatus() {
  if (!statusText) return;
  statusText.innerText = "";
}

function validateEmail(email) {
  // simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}