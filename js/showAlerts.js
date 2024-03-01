function inputVacio(id, mensaje) {
  if ($(id).val() == "") {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: mensaje,
    });

    return false;
  } else {
    return true;
  }
}

function passwordFormat(id) {
  const password = $(id).val();
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;

  if (
    password.length < 8 ||
    !uppercaseRegex.test(password) ||
    !numberRegex.test(password)
  ) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title:
        "The password must contain at least one uppercase letter, <br> one number, and be at least 8 characters long.",
    });

    return false;
  } else {
    return true;
  }
}

function emailVacio(id, mensaje) {
  let formatoemail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

  if ($(id).val() == "" || !formatoemail.test($("#email").val())) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: mensaje,
    });

    return false;
  } else {
    return true;
  }
}

/**
 * Compara entre dos contraseñas
 * 
 */


function passwordInvalid(id1, id2) {
  if ($(id1).val() !== $(id2).val() || "") {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: "Passwords do not match <br> Please confirm password",
    });

    return false;
  } else {
    return true;
  }
}

export { passwordInvalid, emailVacio, inputVacio, passwordFormat };
