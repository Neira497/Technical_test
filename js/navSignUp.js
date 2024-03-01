function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);

  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const navForm = document.getElementById("navForm");

navForm.addEventListener("click", () => {
  scrollToElement(".toLogIn");
});
