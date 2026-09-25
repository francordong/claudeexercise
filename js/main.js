(function () {
  const S = SITE;
  const page = document.body.dataset.page;

  // ---------- Utilidades ----------
  const esc = (str) => String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[c]);

  const formatDate = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("es-ES", {
    year: "numeric", month: "long", day: "numeric",
  });

  const readingTime = (html) =>
    Math.max(1, Math.round(html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length / 200));

  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const telHref = "tel:" + S.phone.replace(/\s/g, "");
  const waHref = "https://wa.me/" + S.whatsapp;

  // ---------- Cabecera y pie compartidos ----------
  const current = (p) => (page === p ? ' aria-current="page"' : "");
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container header-inner">
        <a href="index.html" class="logo">
          <span class="logo-mark">${esc(S.initials)}</span>
          <span><strong>${esc(S.doctor)}</strong><small>${esc(S.specialty)} · ${esc(S.city)}</small></span>
        </a>
        <nav class="nav" aria-label="Principal">
          <div class="nav-links" id="nav-links">
            <a href="index.html"${current("home")}>Inicio</a>
            <a href="index.html#servicios">Tratamientos</a>
            <a href="index.html#sobre-mi">Sobre mí</a>
            <a href="blog.html"${current("blog")}>Blog</a>
            <a href="index.html#contacto">Contacto</a>
          </div>
          <a href="index.html#contacto" class="btn btn-primary btn-sm header-cta">Pedir cita</a>
          <button id="theme-toggle" class="theme-toggle" aria-label="Cambiar tema claro/oscuro">◐</button>
          <button id="menu-toggle" class="theme-toggle menu-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button>
        </nav>
      </div>`;
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <h4>${esc(S.doctor)}</h4>
            <p>${esc(S.specialtyLong)}.<br>${esc(S.colegiado)}</p>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a href="${telHref}">${esc(S.phone)}</a></li>
              <li><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></li>
              <li>${esc(S.address)}</li>
            </ul>
          </div>
          <div>
            <h4>Enlaces</h4>
            <ul>
              <li><a href="blog.html">Blog de dermatología</a></li>
              <li><a href="index.html#servicios">Tratamientos</a></li>
              <li><a href="aviso-legal.html">Aviso legal y privacidad</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          © ${new Date().getFullYear()} ${esc(S.doctor)}. La información de esta web es divulgativa y no sustituye la consulta médica.
        </div>
      </div>
      <a href="index.html#contacto" class="btn btn-primary float-cta">📅 Pedir cita</a>`;
  }

  // Rellena cualquier elemento con data-site="campo"
  document.querySelectorAll("[data-site]").forEach((el) => { el.textContent = S[el.dataset.site]; });
  document.querySelectorAll("[data-href]").forEach((el) => {
    el.href = { tel: telHref, whatsapp: waHref, email: "mailto:" + S.email }[el.dataset.href];
  });

  // ---------- Tema claro/oscuro ----------
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    const cur = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // ---------- Menú móvil ----------
  const menuBtn = document.getElementById("menu-toggle");
  const links = document.getElementById("nav-links");
  menuBtn?.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  links?.addEventListener("click", (e) => {
    if (e.target.closest("a")) { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  // ---------- Tarjeta de artículo ----------
  const card = (p) => `
    <article class="card">
      <span class="cat">${esc(p.category)}</span>
      <h3><a href="post.html?id=${encodeURIComponent(p.id)}">${esc(p.title)}</a></h3>
      <p>${esc(p.excerpt)}</p>
      <span class="meta">${formatDate(p.date)} · ${readingTime(p.content)} min de lectura</span>
    </article>`;

  // ---------- Portada: últimos artículos ----------
  const latest = document.getElementById("latest-posts");
  if (latest) latest.innerHTML = posts.slice(0, 3).map(card).join("");

  // ---------- Formulario de cita (abre el correo del paciente) ----------
  const form = document.getElementById("appointment-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const body = [
      `Nombre: ${d.get("name")}`,
      `Teléfono: ${d.get("phone")}`,
      `Motivo: ${d.get("reason")}`,
      `Preferencia horaria: ${d.get("time")}`,
      "",
      d.get("message") || "",
    ].join("\n");
    location.href = `mailto:${S.email}?subject=${encodeURIComponent("Solicitud de cita – " + d.get("name"))}&body=${encodeURIComponent(body)}`;
  });

  // ---------- Blog: lista, búsqueda y categorías ----------
  const list = document.getElementById("post-list");
  if (list) {
    const search = document.getElementById("search");
    const tagsBox = document.getElementById("tags");
    let active = new URLSearchParams(location.search).get("cat");

    const cats = [...new Set(posts.map((p) => p.category))].sort();
    tagsBox.innerHTML = [`<button class="tag" data-cat="">Todos</button>`]
      .concat(cats.map((c) => `<button class="tag" data-cat="${esc(c)}">${esc(c)}</button>`)).join("");

    const syncTags = () => tagsBox.querySelectorAll("button").forEach((b) =>
      b.setAttribute("aria-pressed", String((b.dataset.cat || null) === (active || null))));

    tagsBox.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-cat]");
      if (!b) return;
      active = b.dataset.cat || null;
      syncTags(); render();
    });
    search.addEventListener("input", render);

    function render() {
      const q = search.value.trim().toLowerCase();
      const filtered = posts.filter((p) =>
        (!active || p.category === active) &&
        (!q || (p.title + " " + p.excerpt + " " + p.category).toLowerCase().includes(q)));
      list.innerHTML = filtered.length ? filtered.map(card).join("")
        : `<p class="empty">No hay artículos que coincidan con tu búsqueda.</p>`;
    }
    syncTags(); render();
  }

  // ---------- Página de artículo ----------
  const article = document.getElementById("post");
  if (article) {
    const id = new URLSearchParams(location.search).get("id");
    const post = posts.find((p) => p.id === id);
    if (!post) {
      article.innerHTML = `<h1>Artículo no encontrado</h1><p>El artículo que buscas no existe. <a href="blog.html">Ver todos los artículos</a>.</p>`;
      return;
    }
    document.title = `${post.title} · ${S.doctor}`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", post.excerpt);

    article.innerHTML = `
      <a href="blog.html?cat=${encodeURIComponent(post.category)}" class="eyebrow" style="text-decoration:none">${esc(post.category)}</a>
      <h1>${esc(post.title)}</h1>
      <p class="lead">${esc(post.excerpt)}</p>
      <div class="byline">
        <span class="mini">${esc(S.initials)}</span>
        <div><b>${esc(S.doctor)}</b><span>${esc(S.specialty)} · ${formatDate(post.date)} · ${readingTime(post.content)} min de lectura</span></div>
      </div>
      <div class="content">${post.content}</div>
      <p class="disclaimer">ℹ️ Este artículo tiene carácter divulgativo y no sustituye una valoración médica individual. Si tienes dudas sobre tu caso, consulta con un dermatólogo.</p>
      <aside class="author-box">
        <span class="mini">${esc(S.initials)}</span>
        <div>
          <h3>${esc(S.doctor)}</h3>
          <p>${esc(S.specialtyLong)}. Pasa consulta en ${esc(S.city)} y escribe este blog para ayudarte a entender y cuidar tu piel.</p>
          <a href="index.html#contacto" class="btn btn-primary btn-sm">Pedir cita</a>
        </div>
      </aside>`;

    const related = posts.filter((p) => p.id !== post.id)
      .sort((a, b) => (b.category === post.category) - (a.category === post.category)).slice(0, 2);
    const rel = document.getElementById("related");
    if (rel && related.length) rel.innerHTML = `<h2>También te puede interesar</h2><div class="post-list">${related.map(card).join("")}</div>`;

    // Datos estructurados para Google (SEO)
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "MedicalWebPage",
      headline: post.title, description: post.excerpt, datePublished: post.date,
      author: { "@type": "Physician", name: S.doctor, medicalSpecialty: "Dermatology" },
      reviewedBy: { "@type": "Physician", name: S.doctor },
    });
    document.head.appendChild(ld);
  }
})();
