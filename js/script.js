(() => {
  const yearNodes = document.querySelectorAll("[data-year]");
  if (yearNodes.length) {
    const year = String(new Date().getFullYear());
    yearNodes.forEach((node) => {
      node.textContent = year;
    });
  }
})();
