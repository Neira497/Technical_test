import { inputVacio, passwordFormat } from "./showAlerts.js";

$(document).ready(function () {
  $("#enviar").click(function () {
    let loginPass = passwordFormat("#loginPassword");
    let loginUsername = inputVacio("#loginUsername", "Complete the username");

    if (loginUsername == false) {
      return false;
    } else if (loginPass == false) {
      return false;
    }
  });
});
