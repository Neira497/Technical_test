document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    localStorage.setItem(username, password);

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
      icon: "success",
      title: "User registrated",
    });

    this.reset();
  });
