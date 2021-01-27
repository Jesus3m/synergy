function sendEmail(e) {
  const form = document.getElementById("emailForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const sujeto = e.target[0].value;
    const email = e.target[1].value;
    const cuerpo = e.target[2].value;
    const mensaje = `De: ${sujeto} \nEmail o telefono: ${email} \n \t ${cuerpo}`;
    console.log(mensaje);

    var mailToLink = `mailto:synergycef@gmail.com?body=${encodeURIComponent(
      mensaje
    )}&subject=${sujeto}:%20Contacto%20con%20synergy%20a%20traves%20de:%20${email}`;

    console.log(mensaje);
    window.open(mailToLink);
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    alert("Mensaje enviado");
  });
}
