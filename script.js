window.addEventListener("load", () => {

  const card = document.querySelector(".hero-card");

  if (card) {
    card.style.opacity = 0;

    setTimeout(() => {
      card.style.transition = "1.5s ease";
      card.style.opacity = 1;
    }, 200);
  }

});