(function () {
  const root = document.documentElement;
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme
  const btn = document.getElementById("themeBtn");
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);

  function toggleTheme() {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  if (btn) btn.addEventListener("click", toggleTheme);
})();

