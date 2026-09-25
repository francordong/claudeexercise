# Mi Blog

Un blog sencillo hecho con **HTML, CSS y JavaScript puro**, sin dependencias ni paso de compilación.

## Estructura

```
index.html      Portada: lista de artículos, buscador y filtro por etiquetas
post.html       Página de un artículo (post.html?id=...)
about.html      Página "Sobre mí"
css/styles.css  Estilos (modo claro y oscuro)
js/posts.js     Los artículos del blog
js/main.js      Lógica: listado, búsqueda, etiquetas, tema
```

## Ver la web en local

Abre `index.html` directamente en el navegador, o levanta un servidor:

```bash
python3 -m http.server 8000
# y visita http://localhost:8000
```

## Añadir un artículo

Edita `js/posts.js` y añade un objeto a la lista `POSTS`:

```js
{
  id: "mi-nuevo-articulo",       // único, sin espacios (se usa en la URL)
  title: "Mi nuevo artículo",
  date: "2026-10-01",            // AAAA-MM-DD
  tags: ["ejemplo"],
  excerpt: "Resumen que aparece en la portada.",
  content: `<p>Contenido en HTML…</p>`,
},
```

Los artículos se ordenan automáticamente por fecha (el más reciente primero).

## Publicar en GitHub Pages

1. Sube los cambios a la rama `main`.
2. En GitHub: **Settings → Pages → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Tu blog estará en `https://<usuario>.github.io/<repositorio>/`.
