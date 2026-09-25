// ============================================================
//  ARTÍCULOS DEL BLOG
//  Para añadir uno: copia un bloque { ... }, cambia el "id"
//  (único, sin espacios ni tildes) y rellena los campos.
//  "content" admite HTML. Clases útiles:
//    <div class="callout">…</div>        recuadro informativo
//    <div class="callout warn">…</div>   recuadro de aviso
// ============================================================
const POSTS = [
  {
    id: "lunares-regla-abcde",
    title: "Lunares: cómo aplicar la regla ABCDE para detectar el melanoma a tiempo",
    date: "2026-09-22",
    category: "Cáncer de piel",
    excerpt: "Una autoexploración de cinco minutos al mes puede marcar la diferencia. Te explico qué señales vigilar y cuándo pedir una revisión.",
    content: `
      <p>El melanoma es el cáncer de piel menos frecuente, pero también el más agresivo. La buena noticia es que, <strong>detectado en fases iniciales, tiene un pronóstico excelente</strong>. Por eso la autoexploración es una de las herramientas de prevención más útiles que tienes a tu alcance.</p>

      <h2>La regla ABCDE</h2>
      <p>Es un método sencillo para revisar tus lunares. Fíjate en cualquier lunar que cumpla uno o más de estos criterios:</p>
      <table>
        <thead><tr><th>Letra</th><th>Qué significa</th><th>Qué observar</th></tr></thead>
        <tbody>
          <tr><td><strong>A</strong></td><td>Asimetría</td><td>Si trazas una línea por el centro, las dos mitades no coinciden.</td></tr>
          <tr><td><strong>B</strong></td><td>Bordes</td><td>Bordes irregulares, dentados o mal definidos.</td></tr>
          <tr><td><strong>C</strong></td><td>Color</td><td>Varios tonos en el mismo lunar (marrón, negro, rojo, blanco o azulado).</td></tr>
          <tr><td><strong>D</strong></td><td>Diámetro</td><td>Mayor de 6 mm (aprox. el tamaño de la goma de un lápiz), aunque hay melanomas más pequeños.</td></tr>
          <tr><td><strong>E</strong></td><td>Evolución</td><td>Cambios en tamaño, forma, color, relieve o aparición de síntomas (picor, sangrado, costra).</td></tr>
        </tbody>
      </table>
      <div class="callout">
        <p><strong>La «E» es la más importante.</strong> Un lunar que cambia merece siempre una valoración, aunque no cumpla los demás criterios.</p>
      </div>

      <h2>El signo del «patito feo»</h2>
      <p>La mayoría de nuestros lunares se parecen entre sí. Un lunar que destaca por ser diferente al resto —más oscuro, más grande o con otra forma— es el «patito feo» y conviene enseñarlo al dermatólogo.</p>

      <h2>Cómo hacer la autoexploración paso a paso</h2>
      <ol>
        <li>Hazla <strong>una vez al mes</strong>, con buena luz, frente a un espejo grande y con otro de mano.</li>
        <li>Revisa todo el cuerpo: cara, cuero cabelludo (ayúdate de un secador o de otra persona), cuello, tronco, brazos, axilas, uñas, plantas de los pies, entre los dedos y zona genital.</li>
        <li>Haz fotos de los lunares que te preocupen para poder compararlos con el tiempo.</li>
      </ol>

      <h2>¿Quién debe revisarse con más frecuencia?</h2>
      <ul>
        <li>Personas con piel clara, pelo rubio o pelirrojo y que se queman con facilidad.</li>
        <li>Quienes tienen muchos lunares (más de 50) o lunares atípicos.</li>
        <li>Antecedentes personales o familiares de melanoma.</li>
        <li>Historial de quemaduras solares, sobre todo en la infancia, o uso de cabinas de bronceado.</li>
        <li>Personas inmunodeprimidas.</li>
      </ul>

      <h2>¿Qué hace el dermatólogo en la revisión?</h2>
      <p>En consulta utilizamos la <strong>dermatoscopia</strong>, una técnica indolora que permite ver estructuras del lunar invisibles a simple vista. En pacientes de riesgo también podemos hacer un <strong>mapeo corporal digital</strong> para comparar las imágenes entre revisiones y detectar cambios mínimos.</p>
      <div class="callout warn">
        <p><strong>Pide cita sin esperar</strong> si un lunar sangra sin motivo, cambia rápidamente, pica de forma persistente o si aparece una lesión nueva de adulto que no se parece a las demás.</p>
      </div>
    `,
  },
  {
    id: "proteccion-solar-guia",
    title: "Protección solar: la guía definitiva para elegir y aplicar tu fotoprotector",
    date: "2026-09-15",
    category: "Prevención",
    excerpt: "SPF, UVA, cantidad, reaplicación… Resolvemos los errores más comunes al usar crema solar.",
    content: `
      <p>La radiación ultravioleta es la principal causa evitable del cáncer de piel y del envejecimiento cutáneo prematuro. Usar bien el fotoprotector es, probablemente, el mejor gesto de cuidado de la piel que existe.</p>

      <h2>Qué significan las siglas</h2>
      <ul>
        <li><strong>SPF (FPS):</strong> mide la protección frente a los rayos UVB, responsables de las quemaduras. Recomiendo un <strong>SPF 30 como mínimo</strong> y SPF 50 si tienes piel clara, antecedentes de cáncer de piel o vas a estar muchas horas al sol.</li>
        <li><strong>UVA:</strong> los rayos UVA penetran más profundo y participan en el fotoenvejecimiento y el cáncer de piel. Busca el símbolo «UVA» dentro de un círculo o la indicación de «amplio espectro».</li>
      </ul>

      <h2>El error más frecuente: aplicar poca cantidad</h2>
      <p>El SPF del envase se calcula con 2 mg de producto por cm² de piel. En la práctica casi todos aplicamos la mitad o menos, así que la protección real es mucho menor.</p>
      <div class="callout">
        <p><strong>Truco práctico:</strong> para cara y cuello, aplica aproximadamente <strong>una cucharadita</strong> de producto (o la «regla de los dos dedos»: dos líneas de crema a lo largo del dedo índice y el corazón). Para todo el cuerpo de un adulto, unos 30–35 ml, el equivalente a un vaso de chupito.</p>
      </div>

      <h2>Cómo aplicarlo correctamente</h2>
      <ol>
        <li>Aplícalo <strong>antes de salir</strong>, sobre la piel seca.</li>
        <li><strong>Reaplica cada 2 horas</strong> y siempre después de bañarte, sudar mucho o secarte con la toalla, aunque el producto sea «resistente al agua».</li>
        <li>No olvides orejas, nuca, empeines, calva o raya del pelo y labios (usa un bálsamo con SPF).</li>
      </ol>

      <h2>El fotoprotector no es suficiente por sí solo</h2>
      <ul>
        <li>Evita el sol en las horas centrales del día (aproximadamente de 12:00 a 16:00).</li>
        <li>Usa sombrero de ala ancha, gafas de sol homologadas y ropa que cubra.</li>
        <li>Recuerda que las nubes dejan pasar gran parte de la radiación UV y que la nieve, el agua y la arena la reflejan.</li>
      </ul>

      <h2>Bebés y niños</h2>
      <p>Los <strong>menores de 6 meses no deben exponerse al sol directo</strong>; la protección debe ser física (sombra, ropa, gorro). A partir de esa edad, utiliza fotoprotectores pediátricos y extrema las precauciones: las quemaduras en la infancia aumentan el riesgo de melanoma en la edad adulta.</p>

      <h2>¿Y el día a día en la ciudad?</h2>
      <p>Si tienes manchas, melasma, antecedentes de cáncer de piel o simplemente quieres prevenir el fotoenvejecimiento, un fotoprotector diario en cara, cuello y dorso de manos es una excelente inversión. Hoy existen texturas fluidas, con color o en formato de maquillaje que se integran fácilmente en la rutina.</p>
    `,
  },
  {
    id: "acne-adulto",
    title: "Acné en la edad adulta: por qué aparece y cómo se trata",
    date: "2026-09-05",
    category: "Acné",
    excerpt: "El acné no es solo cosa de adolescentes. Cada vez más adultos, sobre todo mujeres, consultan por brotes a partir de los 25 años.",
    content: `
      <p>El acné es una enfermedad inflamatoria crónica de la unidad pilosebácea. Aunque se asocia a la adolescencia, <strong>es muy frecuente en adultos</strong>, especialmente en mujeres, donde suele localizarse en la mandíbula, el mentón y el cuello.</p>

      <h2>¿Por qué aparece en adultos?</h2>
      <ul>
        <li><strong>Factores hormonales:</strong> brotes que empeoran antes de la menstruación, síndrome de ovario poliquístico o cambios al dejar anticonceptivos.</li>
        <li><strong>Cosmética inadecuada:</strong> productos muy oclusivos o comedogénicos.</li>
        <li><strong>Estrés y falta de sueño</strong>, que pueden empeorar los brotes.</li>
        <li><strong>Algunos fármacos</strong>, como corticoides o ciertos anabolizantes.</li>
        <li><strong>Predisposición genética.</strong></li>
      </ul>

      <h2>Mitos frecuentes</h2>
      <ul>
        <li><strong>«Es por falta de higiene».</strong> Falso. Lavarse en exceso o con productos agresivos irrita la piel y puede empeorar el acné.</li>
        <li><strong>«El sol lo cura».</strong> Mejora aparente y temporal; después suele haber rebote y, además, aumenta el riesgo de manchas.</li>
        <li><strong>«Hay que dejar que siga su curso».</strong> Tratar a tiempo es la mejor forma de <strong>prevenir cicatrices</strong>, que son permanentes.</li>
      </ul>

      <h2>Opciones de tratamiento</h2>
      <p>El tratamiento se adapta a la gravedad y al tipo de lesiones de cada paciente:</p>
      <h3>Tratamientos tópicos</h3>
      <ul>
        <li><strong>Retinoides</strong> (adapaleno, tretinoína…): son la base del tratamiento y previenen nuevas lesiones.</li>
        <li><strong>Peróxido de benzoilo</strong>: antibacteriano y antiinflamatorio.</li>
        <li><strong>Ácido azelaico</strong>: útil también si hay manchas residuales; compatible con el embarazo.</li>
      </ul>
      <h3>Tratamientos orales</h3>
      <ul>
        <li><strong>Antibióticos</strong> durante periodos limitados en acné inflamatorio moderado.</li>
        <li><strong>Tratamiento hormonal</strong> (ciertos anticonceptivos o espironolactona) en mujeres seleccionadas.</li>
        <li><strong>Isotretinoína oral</strong> en acné grave, con cicatrices o que no responde a otros tratamientos. Requiere seguimiento médico y analíticas, y está contraindicada en el embarazo.</li>
      </ul>
      <div class="callout">
        <p><strong>Paciencia:</strong> la mayoría de los tratamientos tardan entre 8 y 12 semanas en mostrar resultados. Abandonar antes de tiempo es la causa más común de «fracaso».</p>
      </div>

      <h2>Una rutina básica para piel con acné</h2>
      <ol>
        <li>Limpieza suave mañana y noche con un gel específico para piel grasa.</li>
        <li>El tratamiento pautado por tu dermatólogo.</li>
        <li>Hidratante ligera «no comedogénica».</li>
        <li>Fotoprotector oil-free por la mañana.</li>
      </ol>
      <p>Y, por supuesto, <strong>no manipules las lesiones</strong>: es la forma más rápida de dejar marcas.</p>
    `,
  },
  {
    id: "dermatitis-atopica-cuidados",
    title: "Dermatitis atópica: cuidados diarios para controlar los brotes",
    date: "2026-08-26",
    category: "Dermatitis",
    excerpt: "Hidratar bien la piel es el pilar del tratamiento. Te cuento qué hábitos marcan la diferencia en niños y adultos.",
    content: `
      <p>La dermatitis atópica es una enfermedad inflamatoria crónica de la piel que cursa en brotes, con <strong>sequedad, picor intenso y eccemas</strong>. Es muy frecuente en la infancia, aunque puede persistir o aparecer en la edad adulta.</p>

      <h2>¿Por qué ocurre?</h2>
      <p>En la piel atópica, la <strong>barrera cutánea no funciona bien</strong>: pierde agua con facilidad y deja pasar irritantes y alérgenos. A esto se suma una respuesta inmunitaria alterada. No es contagiosa ni se debe a una mala higiene.</p>

      <h2>Los cuidados diarios: la base de todo</h2>
      <h3>1. Hidratación, hidratación, hidratación</h3>
      <p>Aplica un <strong>emoliente</strong> (crema hidratante específica para piel atópica) al menos una o dos veces al día en todo el cuerpo, especialmente justo después de la ducha, con la piel todavía algo húmeda.</p>
      <h3>2. Una ducha amable</h3>
      <ul>
        <li>Duchas o baños <strong>cortos</strong> (5–10 minutos) con agua templada, no caliente.</li>
        <li>Utiliza geles «syndet» o aceites de ducha sin perfume, en lugar de jabones convencionales.</li>
        <li>Sécate a toques, sin frotar.</li>
      </ul>
      <h3>3. Ropa y ambiente</h3>
      <ul>
        <li>Prefiere algodón; evita la lana y los tejidos sintéticos en contacto directo con la piel.</li>
        <li>Lava la ropa con detergentes suaves y aclara bien. Evita suavizantes perfumados.</li>
        <li>Mantén una temperatura fresca en casa y evita el sudor excesivo.</li>
      </ul>
      <h3>4. Controla el picor</h3>
      <p>Rascarse daña la piel y perpetúa el ciclo picor-rascado. Mantén las uñas cortas y, si hay mucho picor, aplica frío o emoliente en lugar de rascar.</p>

      <h2>¿Qué hacer durante un brote?</h2>
      <p>Los brotes se tratan con medicación antiinflamatoria tópica, como <strong>corticoides tópicos</strong> o <strong>inhibidores de la calcineurina</strong>. Bien pautados por un médico son tratamientos seguros y eficaces; el miedo a los corticoides («corticofobia») lleva a muchos pacientes a infratratarse.</p>
      <div class="callout">
        <p>En la dermatitis atópica moderada o grave que no se controla con tratamiento tópico, hoy disponemos de <strong>tratamientos sistémicos y fármacos biológicos</strong> que han cambiado la calidad de vida de muchos pacientes.</p>
      </div>

      <h2>Cuándo consultar</h2>
      <div class="callout warn">
        <p>Acude al dermatólogo si el picor no te deja dormir, si los brotes son frecuentes o extensos, o si aparecen <strong>costras amarillentas, supuración o ampollas dolorosas</strong>, que pueden indicar una infección.</p>
      </div>
    `,
  },
  {
    id: "caida-del-cabello",
    title: "Caída del cabello: cuándo es normal y cuándo conviene consultar",
    date: "2026-08-12",
    category: "Cabello",
    excerpt: "Perder cabello a diario es normal, pero hay patrones que merecen estudio. Repasamos las causas más frecuentes de alopecia.",
    content: `
      <p>Perder <strong>entre 50 y 100 cabellos al día</strong> forma parte del ciclo natural del pelo. Sin embargo, cuando la caída es más intensa, se nota menos densidad o aparecen zonas sin pelo, es el momento de consultar.</p>

      <h2>Las causas más frecuentes</h2>
      <h3>Alopecia androgenética</h3>
      <p>Es la causa más común tanto en hombres como en mujeres. Tiene base genética y hormonal. En hombres suele afectar a las entradas y la coronilla; en mujeres produce una <strong>pérdida difusa de densidad</strong> en la zona superior, con la raya cada vez más ancha. Es progresiva, por lo que empezar el tratamiento pronto ayuda a conservar el cabello.</p>

      <h3>Efluvio telógeno</h3>
      <p>Es una caída brusca y difusa que aparece <strong>2–3 meses después</strong> de un desencadenante: fiebre alta, una infección, cirugía, parto, dieta estricta, estrés intenso o algunos fármacos. Suele ser <strong>temporal</strong> y el pelo se recupera una vez corregida la causa, aunque hay que descartar déficits como el de hierro o alteraciones tiroideas.</p>

      <h3>Alopecia areata</h3>
      <p>Se manifiesta como <strong>placas redondeadas sin pelo</strong>, de aparición rápida. Tiene un origen autoinmune y existen tratamientos eficaces que conviene iniciar precozmente.</p>

      <h2>¿Qué haremos en la consulta?</h2>
      <ul>
        <li>Historia clínica detallada y exploración del cuero cabelludo.</li>
        <li><strong>Tricoscopia</strong>: dermatoscopia del cuero cabelludo, indolora, que ayuda a diferenciar los tipos de alopecia.</li>
        <li>Analítica si se sospechan déficits nutricionales u hormonales.</li>
      </ul>

      <h2>Tratamientos disponibles</h2>
      <p>Según el diagnóstico, las opciones incluyen minoxidil tópico u oral, tratamientos antiandrogénicos, infiltraciones, plasma rico en plaquetas o, en casos seleccionados, derivación a cirugía capilar. <strong>No existe un tratamiento universal</strong>: el éxito depende de un buen diagnóstico.</p>

      <div class="callout warn">
        <p>Consulta pronto si la caída es muy rápida, si aparecen placas sin pelo, si hay picor, dolor, descamación o enrojecimiento del cuero cabelludo, o si se acompaña de otros síntomas como cansancio o cambios en la menstruación.</p>
      </div>
      <p>Desconfía de productos milagro y suplementos que prometen resultados rápidos sin un diagnóstico previo.</p>
    `,
  },
];
