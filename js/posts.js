// Lista de artículos del blog.
// Para añadir uno nuevo, copia un objeto, cambia el "id" (sin espacios) y rellena los campos.
// "content" admite HTML.
const POSTS = [
  {
    id: "bienvenida",
    title: "¡Bienvenido a mi blog!",
    date: "2026-09-25",
    tags: ["general"],
    excerpt: "Primer artículo: por qué he creado este blog y qué encontrarás aquí.",
    content: `
      <p>Este es el primer artículo del blog. Aquí iré publicando notas sobre las cosas que aprendo y los proyectos en los que trabajo.</p>
      <h2>¿Qué vas a encontrar?</h2>
      <ul>
        <li>Tutoriales cortos</li>
        <li>Reflexiones y opiniones</li>
        <li>Recursos útiles</li>
      </ul>
      <p>¡Gracias por pasarte!</p>
    `,
  },
  {
    id: "como-esta-hecho",
    title: "Cómo está hecho este blog",
    date: "2026-09-24",
    tags: ["web", "tutorial"],
    excerpt: "Un blog sin frameworks: solo HTML, CSS y un poco de JavaScript.",
    content: `
      <p>Este blog no usa ningún framework. Está formado por tres piezas:</p>
      <ol>
        <li><strong>HTML</strong> para la estructura de las páginas.</li>
        <li><strong>CSS</strong> para el diseño, con modo claro y oscuro.</li>
        <li><strong>JavaScript</strong> para listar, buscar y mostrar los artículos.</li>
      </ol>
      <p>Los artículos viven en <code>js/posts.js</code>. Añadir uno nuevo es tan fácil como copiar un bloque y editarlo.</p>
      <pre><code>{
  id: "mi-articulo",
  title: "Mi artículo",
  date: "2026-10-01",
  tags: ["ejemplo"],
  excerpt: "Resumen corto",
  content: \`&lt;p&gt;Texto…&lt;/p&gt;\`,
}</code></pre>
    `,
  },
  {
    id: "consejos-para-escribir",
    title: "5 consejos para escribir mejor",
    date: "2026-09-20",
    tags: ["escritura"],
    excerpt: "Pequeños hábitos que hacen que tus textos se lean mucho mejor.",
    content: `
      <ol>
        <li><strong>Ve al grano.</strong> Empieza por la idea principal.</li>
        <li><strong>Frases cortas.</strong> Una idea por frase.</li>
        <li><strong>Usa ejemplos.</strong> Lo concreto se entiende mejor que lo abstracto.</li>
        <li><strong>Revisa en voz alta.</strong> Si te trabas al leer, reescribe.</li>
        <li><strong>Publica.</strong> Mejor hecho que perfecto.</li>
      </ol>
    `,
  },
];
