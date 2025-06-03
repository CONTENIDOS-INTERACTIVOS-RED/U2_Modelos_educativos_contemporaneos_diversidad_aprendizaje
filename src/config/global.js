export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Atención a la diversidad y estrategias inclusivas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Políticas y normativas sobre inclusión educativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Marco normativo internacional (estado del arte)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Disposiciones normativas en educación inclusiva en Colombia',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño Universal de Aprendizaje (DUA)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Directrices para el DUA',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Las redes del aprendizaje',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Estrategias didácticas para la atención a la diversidad en las aulas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Herramientas tecnológicas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Estrategias de aprendizaje dirigidas a población en diversos entornos, aplicando el DUA',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alba Pastor, C. (2019). Diseño Universal para el Aprendizaje: un modelo teórico- práctico para una educación inclusiva de calidad. Participación Educativa, 6(9), 55-68. Universidad Complutense de Madrid. ',
      link:
        'https://redined.educacion.gob.es/xmlui/bitstream/handle/11162/190783/Alba.pdf?sequence=1&isAllowed=y#:~:text=Este%20modelo%20se%20organiza%20en,en%20relaci%C3%B3n%20a%20una%20red.',
    },
    {
      referencia:
        'Alba Pastor, C. (2016). Diseño Universal para el Aprendizaje: Educación para todos y prácticas de Enseñanza Inclusivas. Ediciones Morata. ',
      link:
        'https://edmorata.es/wp-content/uploads/2020/06/Alba.Disen%CC%83oUniversalAprendizaje.PR_.pdf',
    },
    {
      referencia:
        'Méndez Estrada, V., Villalobos-Pérez, A., D´Alton Kirkby, C., Cartín Quesada, J. & Piedra García, L. Á. (2008). Los modelos pedagógicos centrados en el estudiante: apuntes sobre los procesos de aprendizaje y enseñanza. Universidad Nacional de Educación a Distancia (UNED). ',
      link:
        'https://www.researchgate.net/publication/305220235_LOS_MODELOS_PEDAGOGICOS_CENTRADOS_EN_EL_ESTUDIANTE_APUNTES_SOBRE_LOS_PROCESOS_DE_APRENDIZAJE_Y_ENSENANZA',
    },
    {
      referencia:
        'Silva Canizales, L. J. (2014). INFORME FINAL CONVENIO No. 1389 SUSCRITO ENTRE EL MINISTERIO DE EDUCACIÓN, FUNDACIÓN SALDARRIAGA CONCHA Y FUNDACIÓN CARVAJAL. MINISTERIO DE EDUCACIÓN NACIONAL. ',
      link:
        'https://rededucacioninclusiva.org/wp-content/uploads/2016/02/Marco-normativo-educacion-inclusiva.pdf',
    },
    {
      referencia:
        'Inhelder, B. & Piaget, J. (2015). Psicología del Niño. (18ª ed.). Ediciones Morata, S. L.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/116205',
    },
    {
      referencia:
        'Fau, M. E. (2011). Jean Piaget: clásicos resumidos. La Bisagra. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/76826',
    },
    {
      referencia:
        'ABA. (2015). Meeting the Challenge of Child Maltreatment in Rural Areas. American Bar Association.',
      link:
        'https://www.americanbar.org/groups/public_interest/child_law/resources/child_law_practiceonline/child_law_practice/vol-34/march-2015/meeting-the-challenge-of-child-maltreatment-in-rural-areas/ ',
    },
    {
      referencia:
        'Gutiérrez, O. A. (2003). Enfoques y modelos educativos centrados en el aprendizaje. Estado del arte y propuestas para su operativización en las instituciones de educación superior nacionales. ',
      link:
        'https://guao.org/sites/default/files/portafolio%20docente/Enfoques%20y%20modelos%20educativos%20centrados%20en%20el%20aprendizaje.pdf',
    },
    {
      referencia:
        'Aristizábal Gómez, K. V. (2021). Cuando hablamos de discapacidad, ¿de qué hablamos? Una revisión teórica y jurídica del concepto. Civilizar, 21(40), 59-72.',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S1657-89532021000100059',
    },
  ],
  glosario: [
    {
      termino: 'Acceso a la educación',
      significado:
        'Es el derecho fundamental de toda persona, especialmente de los niños y niñas, a recibir una educación gratuita, de calidad y en condiciones de igualdad. Este derecho está consagrado en la declaración universal de los derechos humanos y en múltiples tratados internacionales, que obligan a los estados a garantizar la escolarización, la permanencia y el trato justo en las instituciones educativas, desde la primera infancia hasta niveles superiores.',
    },
    {
      termino: 'Constitución Política',
      significado:
        'Es la Ley fundamental y suprema de un Estado, que establece la estructura, principios, derechos, deberes y organización del poder público, así como las garantías y libertades de los ciudadanos. Sirve como marco jurídico para la convivencia social y política, y regula la relación entre los gobernantes y los gobernados.',
    },
    {
      termino: 'Didáctica',
      significado:
        'Es una rama de la pedagogía que estudia, organiza y orienta los métodos, técnicas y estrategias para la enseñanza y el aprendizaje. Su objetivo principal es optimizar el proceso educativo, integrando teoría y práctica para facilitar la adquisición de conocimientos, habilidades y valores por parte de los estudiantes.',
    },
    {
      termino: 'Diseño universal para el aprendizaje',
      significado:
        'Es un marco educativo que busca crear experiencias de aprendizaje inclusivas y accesibles para todos los estudiantes, reconociendo que cada persona aprende de manera diferente y tiene necesidades, intereses y ritmos propios.',
    },
    {
      termino: 'Educación inclusiva',
      significado:
        'Es un modelo educativo que busca atender las necesidades de todos los estudiantes, considerando sus características, intereses y capacidades diversas, con especial énfasis en aquellos que enfrentan barreras para el aprendizaje o la participación, como personas con discapacidad o en situación de vulnerabilidad social.',
    },
    {
      termino: 'Equidad',
      significado:
        'Cualidad que consiste en dar a cada persona lo que merece, sin exceder ni disminuir, buscando justicia e imparcialidad en el trato o reparto. Implica tratar a todas las personas por igual, pero respetando y considerando sus diferencias y cualidades particulares.',
    },
    {
      termino: 'Entornos educativos diversos',
      significado:
        'Espacios de aprendizaje que integran y respetan la multiplicidad de características, necesidades y contextos de los estudiantes, promoviendo un ambiente inclusivo y equitativo. Estos entornos consideran diferencias físicas, cognitivas, emocionales, culturales, lingüísticas, de género, socioeconómicas y familiares, entre otras.',
    },
    {
      termino: 'Estrategias educativas',
      significado:
        'También conocidas como estrategias didácticas o de enseñanza, son acciones y actividades planificadas por el docente para facilitar el aprendizaje de los estudiantes. Estas estrategias varían, según el tema, nivel educativo y contexto, y buscan alcanzar objetivos claros en el proceso enseñanza-aprendizaje.',
    },
    {
      termino: 'Inclusión educativa',
      significado:
        'Es un enfoque que reconoce y garantiza el derecho de todas las personas -niños, jóvenes y adultos- a acceder a una educación de calidad que respete y valore sus diferentes capacidades, necesidades, culturas, idiomas, etnias, edades y condiciones, sin discriminación alguna.',
    },
    {
      termino: 'Pedagogía',
      significado:
        'Ciencia que estudia la educación y los procesos de enseñanza-aprendizaje con el objetivo de mejorar y legitimar las prácticas educativas en todos los niveles y etapas de la vida. Se trata de una disciplina autónoma que integra conocimientos de diversas áreas como la psicología, sociología, filosofía, historia y antropología para comprender y optimizar cómo las personas aprenden y se desarrollan en distintos contextos (familiar, escolar, social, laboral).',
    },
  ],
}
