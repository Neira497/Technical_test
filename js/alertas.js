import { inputVacio, passwordInvalid, passwordFormat} from "./showAlerts.js";

$(document).ready(function () {
  $("#enviar").click(function () {
    let repeated = passwordInvalid("#repeatPass", "#password");
    let password = passwordFormat("#password");
    let lastName = inputVacio("#lastName", "Complete the last name");
    let userName = inputVacio("#username", "Complete the username");

    if (userName == false) {
      return false;
    } else if (lastName == false) {
      return false;
    } else if (password == false) {
      return false;
    } else if (repeated == false) {
      return false;
    }
  });
});
