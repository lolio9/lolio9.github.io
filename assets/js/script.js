document.querySelector(".mobile-menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

document.querySelectorAll(".language-option").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const lang = button.getAttribute("data-lang");

    if (lang === "no") {
      // Bytt til norsk (endre tekster på siden)
      document.querySelector("h1").textContent = "Velkommen til nettsiden vår";
      // Legg til flere elementer som skal oversettes...
    } else if (lang === "en") {
      // Bytt til engelsk
      document.querySelector("h1").textContent = "Welcome to our website";
    }
  });
});
