function initializeNavbar() {
  const button = document.getElementById("menu-button");
  const view = document.getElementById("mobile-menu-container");
  const overlay = document.getElementById("mobile-overlay");

  button.addEventListener("click", () => {
    const isOpen = view.classList.contains("translate-x-0");

    if (isOpen) {
      view.classList.add("-translate-x-full");
      view.classList.remove("translate-x-0");
      overlay.classList.add("hidden");
    } else {
      view.classList.remove("-translate-x-full");
      view.classList.add("translate-x-0");
      overlay.classList.remove("hidden");
    }
  });

  overlay.addEventListener("click", () => {
    button.click();
  });
}
