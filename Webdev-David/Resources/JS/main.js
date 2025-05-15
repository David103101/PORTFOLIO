// Modal for project
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Form validation
const form = document.getElementById("contactForm");
const errorText = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    errorText.textContent = "Please fill out all fields.";
    return;
  }

  errorText.textContent = "";
  alert("Message sent! Thank you for reaching out.");
  form.reset();
});

// Close modal when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
});

// Slider auto scroll (optional interactivity enhancement)
const slider = document.querySelector(".slider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

// Fix button hover effect for smoother transition
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#0097a7"; // darker cyan
  });
  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#00bcd4"; // original color
  });
});

