document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var navRow = document.querySelector(".nav-row");
  if (toggle && navRow) {
    toggle.addEventListener("click", function () {
      var isOpen = navRow.classList.toggle("open");
      toggle.textContent = isOpen ? "CLOSE" : "MENU";
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
