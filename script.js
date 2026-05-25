// Smooth scroll to contact
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

/* =========================
   SCROLL ANIMATION (SLIDE)
========================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((sec) => observer.observe(sec));

/* =========================
   CONTACT FORM HANDLING
========================= */

const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // basic validation
  if (name === "" || email === "" || message === "") {
    statusText.style.color = "red";
    statusText.innerText = "Please fill all fields!";
    return;
  }

  // success message
  statusText.style.color = "lightgreen";
  statusText.innerText = "Message sent successfully! 🚀";

  console.log({
    name: name,
    email: email,
    message: message
  });

  // reset form
  this.reset();

  // auto hide message after 3 sec
  setTimeout(() => {
    statusText.innerText = "";
  }, 3000);
});