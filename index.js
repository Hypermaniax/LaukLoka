function showPage(pageId) {
  document
    .querySelectorAll(".page-section")
    .forEach((p) => p.classList.remove("active"));
  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.classList.add("active");
  }
  document
    .querySelectorAll("nav a")
    .forEach((link) => link.classList.remove("active"));
  const activeLink = Array.from(document.querySelectorAll("nav a")).find(
    (l) =>
      l.textContent.toLowerCase().includes(pageId.toLowerCase()) ||
      (pageId === "beranda" && l.textContent === "Beranda")
  );
  if (activeLink) {
    activeLink.classList.add("active");
  }
  window.scrollTo(0, 0);
}
function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("show");
}

document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("nav ul").classList.remove("show");
  });
});
showPage("beranda");
