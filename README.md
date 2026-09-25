# Blog de dermatología · Dra. Clara Montes (ficticia)

Web de un dermatólogo con **blog de contenido especializado** y enfoque de **captación de pacientes**.
HTML, CSS y JavaScript puro: sin dependencias ni paso de compilación.

> ⚠️ El nombre, número de colegiado, dirección, teléfono, email, cifras y trayectoria son **ficticios**.
> Sustitúyelos por los datos reales antes de publicar.

## Estructura

```
index.html        Portada de captación: hero, tratamientos, sobre mí, primera visita,
                  últimos artículos, preguntas frecuentes, llamada a la acción y formulario de cita
blog.html         Listado de artículos con buscador y filtro por categoría
post.html         Artículo (post.html?id=...) con autora, tiempo de lectura, aviso médico,
                  llamada a pedir cita y artículos relacionados
aviso-legal.html  Aviso legal y privacidad (texto de ejemplo)
css/styles.css    Estilos (modo claro y oscuro, adaptado a móvil)
js/config.js      ⭐ DATOS DE LA CONSULTA: nombre, teléfono, dirección… (se cambian en un solo sitio)
js/posts.js       ⭐ ARTÍCULOS DEL BLOG
js/main.js        Lógica: cabecera, pie, blog, buscador, formulario, SEO
```

## Personalizar

1. **Datos del doctor:** edita `js/config.js`. Se actualizan la cabecera, el pie, la portada y los artículos.
2. **Trayectoria y textos de la portada:** edita `index.html` (sección «Sobre mí») y los datos
   estructurados (`application/ld+json`) de la cabecera, que usa Google.
3. **Foto:** sustituye el círculo con las iniciales (`.avatar`) por una `<img>` con la foto del doctor.

## Añadir un artículo

En `js/posts.js`, añade un bloque a la lista `POSTS`:

```js
{
  id: "manchas-en-la-cara",           // único, sin espacios ni tildes
  title: "Manchas en la cara: tipos y tratamientos",
  date: "2026-10-01",                 // AAAA-MM-DD
  category: "Estética",               // se crea el filtro automáticamente
  excerpt: "Resumen que aparece en las tarjetas y en Google.",
  content: `
    <p>Texto…</p>
    <h2>Subtítulo</h2>
    <div class="callout">Recuadro destacado</div>
    <div class="callout warn">Recuadro de aviso</div>
  `,
},
```

## Marketing incluido

- Llamadas a «Pedir cita» en la cabecera, la portada, cada artículo y un botón flotante en móvil.
- Teléfono, WhatsApp y email con un solo toque.
- Formulario de cita (abre el correo del paciente con la solicitud rellenada; no guarda datos).
- Señales de confianza: especialidad, colegiado, experiencia, cifras y formación.
- SEO: títulos y descripciones por página, datos estructurados `Physician` y `MedicalWebPage`.

## Antes de publicar (importante)

- Revisa el **Código Deontológico** del Consejo General de Colegios Oficiales de Médicos y la normativa
  de publicidad sanitaria de tu comunidad autónoma: evita promesas de resultados y testimonios no verificables.
- Sustituye el aviso legal por uno revisado (RGPD, LOPDGDD, LSSI).
- Si vas a recoger datos con un formulario real, usa un servicio que cumpla el RGPD.

## Ver la web en local

Abre `index.html` en el navegador, o:

```bash
python3 -m http.server 8000   # y visita http://localhost:8000
```

## Publicar en GitHub Pages

**Settings → Pages → Deploy from a branch**, elige la rama y la carpeta `/ (root)`.
