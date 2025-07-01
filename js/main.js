function incluirHTML(id, archivo) {
  fetch(archivo)
    .then(response => {
      if (!response.ok) throw new Error("No se pudo cargar " + archivo);
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  incluirHTML("nav", "components/nav.html");
  incluirHTML("footer", "components/footer.html");
 
});