// =========================
// JAVASCRIPT FOR THE WEBSITE
// =========================

// HERO FADE-IN ANIMATION
window.addEventListener("load", () => {

  const hero = document.querySelector(".hero");

  if (hero) {
    hero.style.opacity = 0;

    setTimeout(() => {
      hero.style.transition = "2s ease";
      hero.style.opacity = 1;
    }, 200);
  }

});


// =========================
// TRANSLATION SYSTEM (FULL FIX)
// =========================

const translations = {
  en: {
    home: "Home",
    about: "About",
    work: "Work",
    contact: "Contact",

    heroTitle: "✨ Hey, Welcome to my portfolio.",
    heroSubtitle: "I'm Julisha A.M Busghit",
    studentNr: "Student nr.: BI/1122/045",

    aboutTitle: "About me 👩🏽‍🦲",
    aboutText:
      "A curious, open-minded, and thoughtful person who enjoys learning about new ideas and perspectives, exploring different areas of knowledge, and embracing new experiences.",

    aboutFocusTitle: "I am currently focused on professional growth through:",
    aboutFocus1: "New experiences",
    aboutFocus2: "Collaboration",
    aboutFocus3: "Continuous learning",

    interestsTitle: "Interests 🖼️",

    educationTitle: "Education 📚",

    contactTitle: "Contact me",
    sendMessage: "Send me a message",

    phone: "Phone:",
    email: "Email:"
  },

  nl: {
    home: "Home",
    about: "Over mij",
    work: "Werk",
    contact: "Contact",

    heroTitle: "✨ Hey, welkom op mijn portfolio.",
    heroSubtitle: "Ik ben Julisha A.M Busghit",
    studentNr: "Student nr.: BI/1122/045",

    aboutTitle: "Over mij 👩🏽‍🦲",
    aboutText:
      "Een nieuwsgierig, open-minded en bedachtzaam persoon die graag leert over nieuwe ideeën en perspectieven, verschillende kennisgebieden verkent en nieuwe ervaringen omarmt.",

    aboutFocusTitle: "Ik richt mij momenteel op professionele groei door:",
    aboutFocus1: "Nieuwe ervaringen",
    aboutFocus2: "Samenwerking",
    aboutFocus3: "Voortdurend leren",

    interestsTitle: "Interesses 🖼️",

    educationTitle: "Opleiding 📚",

    contactTitle: "Contact opnemen",
    sendMessage: "Stuur mij een bericht",

    phone: "Telefoon:",
    email: "E-mail:"
  }
};

let currentLang = "en";

function translatePage(lang) {
  currentLang = lang;

  // Translate EVERYTHING using data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Toggle button text
  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = lang === "en" ? "NL" : "EN";

  // Save language
  localStorage.setItem("lang", lang);
}

// =========================
// INIT
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  translatePage(savedLang);

  const btn = document.getElementById("langBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      translatePage(currentLang === "en" ? "nl" : "en");
    });
  }
});