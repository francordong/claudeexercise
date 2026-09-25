(function () {
  // ----- Tema claro/oscuro -----
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved) root.dataset.theme = saved;

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.dataset.theme ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = current === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ----- Utilidades -----
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  function formatDate(iso) {
    return new Date(iso + "T00:00:00").toLocaleDateString("es-ES", {
      year: "numeric", month: "long", day: "numeric",
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);
  }

  // ----- Portada: lista, búsqueda y etiquetas -----
  const list = document.getElementById("post-list");
  if (list) {
    const search = document.getElementById("search");
    const tagsBox = document.getElementById("tags");
    let activeTag = null;

    const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort();
    tagsBox.innerHTML = allTags
      .map((t) => `<button class="tag" data-tag="${escapeHTML(t)}" aria-pressed="false">#${escapeHTML(t)}</button>`)
      .join("");

    tagsBox.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-tag]");
      if (!btn) return;
      activeTag = activeTag === btn.dataset.tag ? null : btn.dataset.tag;
      tagsBox.querySelectorAll("button").forEach((b) =>
        b.setAttribute("aria-pressed", String(b.dataset.tag === activeTag)));
      render();
    });
    search.addEventListener("input", render);

    function render() {
      const q = search.value.trim().toLowerCase();
      const filtered = posts.filter((p) =>
        (!activeTag || p.tags.includes(activeTag)) &&
        (!q || (p.title + " " + p.excerpt).toLowerCase().includes(q)));

      list.innerHTML = filtered.length
        ? filtered.map((p) => `
          <article class="card">
            <time datetime="${p.date}">${formatDate(p.date)}</time>
            <h2><a href="post.html?id=${encodeURIComponent(p.id)}">${escapeHTML(p.title)}</a></h2>
            <p>${escapeHTML(p.excerpt)}</p>
            <div class="card-tags">${p.tags.map((t) => `<span>#${escapeHTML(t)}</span>`).join("")}</div>
          </article>`).join("")
        : `<p class="empty">No hay artículos que coincidan.</p>`;
    }
    render();
  }

  // ----- Página de artículo -----
  const article = document.getElementById("post");
  if (article) {
    const id = new URLSearchParams(location.search).get("id");
    const post = posts.find((p) => p.id === id);
    if (!post) {
      article.innerHTML = `<h1>Artículo no encontrado</h1><p>El artículo que buscas no existe.</p>`;
      return;
    }
    document.title = `${post.title} · Mi Blog`;
    article.innerHTML = `
      <header>
        <time datetime="${post.date}">${formatDate(post.date)}</time>
        <h1>${escapeHTML(post.title)}</h1>
        <div class="card-tags">${post.tags.map((t) => `<span>#${escapeHTML(t)}</span>`).join("")}</div>
      </header>
      <div class="content">${post.content}</div>`;
  }
})();
