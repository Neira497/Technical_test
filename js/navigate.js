function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);

  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const aboutUs = document.getElementById("aboutUs");
const extra = document.getElementById("extra");

aboutUs.addEventListener("click", () => {
  scrollToElement(".nav-about");
});

extra.addEventListener("click", () => {
    scrollToElement(".extras")
})
