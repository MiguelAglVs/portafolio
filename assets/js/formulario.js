const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  email();
});

function email() {
  const datos = new FormData(formulario);
  fetch("assets/php/enviar.php", {
    method: "POST",
    body: datos,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      if ("exito") {
        Swal.fire({
          toast: true,
          position: "center-end",
          icon: "success",
          title: "Mensaje enviado",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      } else {
        Swal.fire({
			toast: true,
			position: "center-end",
			icon: "error",
			title: "Error al enviar",
			showConfirmButton: false,
			timer: 1500,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.addEventListener("mouseenter", Swal.stopTimer);
			  toast.addEventListener("mouseleave", Swal.resumeTimer);
			},
		  });
      }
    });
}
