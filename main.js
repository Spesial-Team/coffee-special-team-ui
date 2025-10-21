document.addEventListener("DOMContentLoaded", function () {

  function app(targetId, filePath) {
    fetch(filePath)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById(targetId).innerHTML = html;
      })
      .catch((err) => console.error("LOG ERROR:", err));
  }

  app("navbar", "layouts/nav.html");
});
