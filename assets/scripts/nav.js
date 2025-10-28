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

  const navbar = document.getElementById("main-navbar");
  const scrollThreshold = 50;
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        navbar.classList.remove("lg:bg-transparent");
        navbar.classList.add("lg:bg-orange-950", "shadow-md");
      } else {
        navbar.classList.add("lg:bg-transparent");
        navbar.classList.remove("lg:bg-orange-950", "shadow-md");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }
}
