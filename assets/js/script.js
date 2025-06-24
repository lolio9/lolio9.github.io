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

function loadGoogleTranslate() {
  var newScript = document.createElement("script");
  newScript.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.head.appendChild(newScript);
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "no", // Standard språk (norsk)
      includedLanguages: "no,en", // Kun norsk og engelsk
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}

// Last inn widgeten når siden åpnes
window.onload = loadGoogleTranslate;
