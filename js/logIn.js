document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    var storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      window.location.href = "index.html";
    } else {
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
        title: "User not found",
      });

      return false;
    }

    this.reset();
  });
