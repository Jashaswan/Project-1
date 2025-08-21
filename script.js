// Loader functionality
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if(loader){
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 600);
  }
});

// Dark Mode Toggle
const toggle = document.getElementById("darkToggle");
if(toggle){
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}

// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();
