// =========================
// JAVASCRIPT FOR THE WEBSITE
// =========================


// =========================
// HERO FADE-IN ANIMATION
// =========================
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
// TRANSLATIONS
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
      "A curious, open-minded, and thoughtful person who enjoys learning and new experiences.",

    aboutFocusTitle: "I am currently focused on:",
    aboutFocus1: "New experiences",
    aboutFocus2: "Collaboration",
    aboutFocus3: "Continuous learning",

    interestsTitle: "Interests 🖼️",
    interestsText:
      "Drawing, music, fitness, swimming, kickboxing, nature and more.",

    educationTitle: "Education 📚",

    workTitle: "Recent work experience 📈",
    work1: "Salon Assistant & Social Media Coordinator at Beauty by Pascalle",
    work2: "Enquiry Projects & Data Processing at Suribet",
    work2desc: "Data collection and processing tasks",
    work3: "Part-time IT Assistant at SuriTech",

    projectsTitle: "Projects 🖼️",
    project1Title: "Lofi portfolio website 🌟",
    project1Desc: "A cozy personal portfolio built with HTML, CSS and JS",
    project1Tech: "Built with: HTML, CSS, JavaScript",
    project1View: "View project",

    artTitle: "Art Work 🎨",
    artQuote: "To me, art is whatever you perceive.",

    skillsTitle: "Skills",
    skill1: "Visualizing 🖼️",
    skill2: "Problem-solving 🧩",
    skill3: "Detail-oriented 🧤",
    skill4: "Open-minded 👂",

    sendMessage: "Send Message ✨",

    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Write your message..."
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
      "Een nieuwsgierig en open-minded persoon die graag leert en nieuwe ervaringen opdoet.",

    aboutFocusTitle: "Ik focus mij op:",
    aboutFocus1: "Nieuwe ervaringen",
    aboutFocus2: "Samenwerking",
    aboutFocus3: "Voortdurend leren",

    interestsTitle: "Interesses 🖼️",
    interestsText:
      "Tekenen, muziek, fitness, zwemmen, kickboksen en natuur.",

    educationTitle: "Opleiding 📚",

    workTitle: "Recente werkervaring 📈",
    work1: "Salon assistent & social media bij Beauty by Pascalle",
    work2: "Enquête & data verwerking bij Suribet",
    work2desc: "Data verzamelen en verwerken",
    work3: "IT assistent bij SuriTech",

    projectsTitle: "Projecten 🖼️",
    project1Title: "Lofi portfolio website 🌟",
    project1Desc: "Een persoonlijk portfolio gebouwd met HTML, CSS en JS",
    project1Tech: "Gebouwd met: HTML, CSS, JavaScript",
    project1View: "Bekijk project",

    artTitle: "Kunst 🎨",
    artQuote: "Kunst is wat jij erin ziet.",

    skillsTitle: "Vaardigheden",
    skill1: "Visualiseren 🖼️",
    skill2: "Probleemoplossend 🧩",
    skill3: "Detailgericht 🧤",
    skill4: "Open-minded 👂",

    sendMessage: "Bericht versturen ✨",

    namePlaceholder: "Jouw naam",
    emailPlaceholder: "Jouw e-mail",
    messagePlaceholder: "Schrijf je bericht..."
  }
};

let currentLang = "en";

// =========================
// TRANSLATE FUNCTION
// =========================
function translatePage(lang) {
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = lang === "en" ? "NL" : "EN";

  localStorage.setItem("lang", lang);
}

// INIT
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "en";
  translatePage(saved);

  document.getElementById("langBtn")?.addEventListener("click", () => {
    translatePage(currentLang === "en" ? "nl" : "en");
  });
});