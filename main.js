document.addEventListener("DOMContentLoaded", function () {
  function app(targetId, filePath) {
    return fetch(filePath)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById(targetId).innerHTML = html;
      })
      .catch((err) => console.error("LOG ERROR:", err));
  }

  app("navbar", "layouts/nav.html").then(() => {
    initializeNavbar();
  });
  app("header", "sections/banner.html");
  app("about", "sections/about.html");
  app("menu", "sections/menu.html");
});
