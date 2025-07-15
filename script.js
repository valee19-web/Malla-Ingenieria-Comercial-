document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  ramos.forEach((ramo) => {
    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;

      ramo.classList.toggle("aprobado");
      revisarDesbloqueos();
    });
  });

  function revisarDesbloqueos() {
    const bloqueados = document.querySelectorAll(".ramo.bloqueado");

    bloqueados.forEach((ramo) => {
      const prereqAttr = ramo.dataset.prerreq;

      if (!prereqAttr) return;

      const prereqs = prereqAttr.split(",").map(id => id.trim());
      const todosAprobados = prereqs.every(id => {
        const prereqRamo = document.getElementById(id);
        return prereqRamo && prereqRamo.classList.contains("aprobado");
      });

      if (todosAprobados) {
        ramo.classList.remove("bloqueado");
      }
    });
  }
});
