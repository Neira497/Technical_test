function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);

  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const formLogin = document.getElementById("formLogIn");

formLogin.addEventListener("click", () => {
  scrollToElement(".toForm");
});
