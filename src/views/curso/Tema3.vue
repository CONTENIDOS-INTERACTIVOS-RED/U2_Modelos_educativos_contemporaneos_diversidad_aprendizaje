<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Estrategias didácticas para la atención a la diversidad en las aulas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/32.png", data-aos="zoom-in")               
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/33.svg")
            .col-lg
              p.mb-0 El #[b objetivo] de la atención a la diversidad en el aula es: reducir barreras físicas, cognitivas, afectivas e institucionales en el aprendizaje, garantizando la igualdad de oportunidades y una educación de calidad para todos.  

        p(data-aos="fade-down") Tomando como base el Diseño Universal para el Aprendizaje (DUA) y sus principios fundamentales, se proponen estrategias que promuevan la #[b inclusión educativa], desde un enfoque flexible, equitativo y centrado en la persona. A continuación, se detallan las tres grandes orientaciones estratégicas del DUA y su aplicación concreta:

    .bg-full-width.bg-color-info.mb-5(data-aos="fade-right")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-acento-contenido
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/34.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="11.3%" y="41%" numero="+")
                  h5 Múltiples formas de representación(El qué del aprendizaje)

                  p Ofrecer diversas formas de presentar la información, permitiendo que los estudiantes perciban y comprendan el contenido, de acuerdo con sus características. 
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 #[b Ejemplos:] uso de texto, imágenes, audio, videos, infografías, materiales interactivos.                   
                .bg-color-white.box-shadow.p-3(x="33.6%" y="25%" numero="+")
                  h5 Múltiples formas de implicación (El porqué del aprendizaje)
 
                  p Captar el interés y mantener la motivación de los estudiantes mediante enfoques variados que promuevan su autonomía, autorregulación y participación emocional.
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 #[b Ejemplos:] juegos, retos, narraciones, actividades culturales y artísticas.                 
                .bg-color-white.box-shadow.p-3(x="88.3%" y="24%" numero="+")
                  h5 Múltiples formas de acción y expresión (El cómo del aprendizaje)
 
                  p Brindar a los estudiantes diferentes maneras de demostrar lo aprendido, respetando su ritmo, estilo y posibilidades.
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 #[b Ejemplos:] presentaciones orales, trabajos escritos, producciones artísticas, pódcasts, videos, mapas mentales, dramatizaciones.      

    p(data-aos="fade-down") Además, para que estas estrategias sean efectivas, se deben considerar los siguientes lineamientos, claves en el diseño didáctico:                                                          
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            .py-4
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b Fomentar la personalización del aprendizaje], adaptándose a las características, intereses y capacidades individuales de cada estudiante, evitando la aplicación de modelos únicos.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b Diseñar currículos flexibles y accesibles desde el inicio], minimizando la necesidad de adaptaciones posteriores y favoreciendo la anticipación de necesidades diversas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b Apoyar la inclusión educativa como un eje central del proceso pedagógico], contribuyendo al cumplimiento de objetivos globales, como los propuestos en la Agenda 2030, especialmente el compromiso con una educación equitativa y de calidad para todos.                    
          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/35.png", data-aos="zoom-in")
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Herramientas tecnológicas

    p(data-aos="fade-down") Se espera que los profesores, docentes, mentores, instructores o maestros, puedan acceder a herramientas tecnológicas que faciliten la flexibilidad, accesibilidad y personalización del aprendizaje, permitiendo múltiples formas de representación, expresión e implicación para los estudiantes.

    .titulo-figura.mb-4(data-aos="fade-up")
      h5 Figura 2. 
      span Cualidades deseables en las herramientas tecnológicas en entornos educativos diversos.
    .bg-color-2.p-4.j1(data-aos="fade-left")
      .row.text-center
        .col-lg-4.mb-3
          .bg-color-8.p-3.h-100.j1
            p.mb-0 Multiformato. Permite presentar contenidos en texto, audio, video, imágenes, animaciones y otros formatos, simultáneamente, facilitando que cada estudiante acceda a la información, según sus necesidades y preferencias.
        .col-lg-4.mb-3
          .bg-color-9.p-3.h-100.j1
            p.mb-0 Personalización. Ofrece opciones para ajustar volumen, subtítulos, tamaño y tipo de letra, contraste, zoom, lector de pantalla, entre otros, adaptándose a las características individuales del alumnado.
        .col-lg-4.mb-3
          .bg-color-8.p-3.h-100.j1
            p.mb-0 Interactividad y anotaciones. Facilitan la interacción con los contenidos mediante anotaciones, subrayados, resaltados y conexiones entre conceptos, promoviendo un aprendizaje activo.
        .col-lg-6.mb-3.mb-lg-0
          .bg-color-9.p-3.h-100.j1
            p.mb-0 Feedback inmediato. Proporciona retroalimentación rápida y personalizada, lo que ayuda a los estudiantes a seguir su progreso y corregir errores a tiempo.
        .col-lg-6.mb-3.mb-lg-0
          .bg-color-8.p-3.h-100.j1
            p.mb-0 Motivación y compromiso. El uso de tecnologías, suele aumentar la motivación del alumnado, gracias a los formatos dinámicos y la gamificación.  

    .row.mb-5 
      .col-lg-7.mb-3.mb-lg-0 
        .bg-color-1.p-4.h-100.j1(data-aos="fade-left")
          p(data-aos="fade-down") Aunque la tecnología no garantiza por sí sola la inclusión, es esencial integrarla dentro de una planificación pedagógica, basada en los principios del DUA. Para avanzar en esta dirección, resulta fundamental la capacitación docente, no solo en el manejo técnico de herramientas digitales, sino también en el diseño de experiencias de aprendizaje inclusivas.

          p(data-aos="fade-down").mb-0 En contextos con limitaciones tecnológicas, es recomendable combinar estrategias digitales con recursos offline creativos, asegurando así la equidad en el acceso al aprendizaje.      
      .col-lg-5
        figure
          img.img-a.img-t(src="@/assets/curso/temas/14.png", data-aos="zoom-in")  

    p(data-aos="fade-down") A continuación, se presentan los ejemplos de herramientas tecnológicas útiles en procesos de enseñanza-aprendizaje, adaptables a diversos entornos educativos: 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/16.png", alt="")     
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Plataformas de gestión de aprendizaje (LMS)")
            p Google Classroom, Moodle, Chamilo, Edmodo. Permiten organizar contenidos, actividades y evaluaciones adaptadas al ritmo y estilo de los estudiantes.
          .div(titulo="Aplicaciones de gamificación")
            p Kahoot, ClassDojo. Fomentan el interés y la motivación mediante dinámicas de juego, competencia sana y recompensas.   
          .div(titulo="Tecnologías de apoyo")
            p Lectores de pantalla, teclados adaptados, conmutadores, magnificadores de pantalla, líneas Braille. Mejoran la accesibilidad para estudiantes con discapacidades.   
          .div(titulo="Herramientas colaborativas y de comunicación")
            p Foros en línea, videoconferencias, mapas conceptuales colaborativos. Facilitan la interacción, el trabajo cooperativo y el intercambio de ideas.    
          .div(titulo="Almacenamiento y organización digital")
            p Google Drive, Dropbox. Permiten gestionar, compartir y acceder a recursos educativos de forma organizada y segura.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Estrategias de aprendizaje dirigidas a población en diversos entornos, aplicando el DUA

    p(data-aos="fade-down") Para responder de manera efectiva a la diversidad del aula bajo el marco del DUA, es imprescindible dedicar tiempo y cuidado a la etapa de planificación educativa. El diseño de clases, actividades, rutas de aprendizaje y otras estructuras debe contemplar los siguientes componentes fundamentales:
    .bg-full-width-1.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5      
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/36.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center a. Objetivos
                  p.mb-0 Claros, alcanzables y flexibles. Deben considerar los diferentes niveles de desempeño y las metas personales de los estudiantes.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/37.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center b. Evaluación diagnóstica 
                  p.mb-0 Permite conocer el contexto, identificar barreras, reconocer las particularidades de los estudiantes y adaptar la propuesta educativa.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/38.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center c. Métodos y materiales
                  p.mb-0 Variedad y accesibilidad son claves. Deben seleccionarse en función de las múltiples formas de representación, implicación y expresión, fomentando la participación activa. 
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/39.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center d. Implementación
                  p.mb-0 Consiste en ejecutar las estrategias previamente diseñadas, garantizando la mediación pedagógica y el acompañamiento constante.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/40.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center e. Evaluación integral 
                  p.mb-0 Comprende la valoración de los aprendizajes, el diseño, los métodos y los materiales. Puede incluir una metaevaluación para analizar el proceso y su impacto. 
          .col-lg-4
            figure
              img.img-a.img-t(src='@/assets/curso/temas/41.png', alt='')


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://rededucacioninclusiva.org/wp-content/uploads/2016/02/Marco-normativo-educacion-inclusiva.pdf" target="_blank" rel="noopener noreferrer") ONU. Resolución de la ONU. (1993). Adoptada por   Colombia e incorporadas al ordenamiento jurídico interno a través de la Resolución 4896 del 20 de diciembre de 1993, establece las Normas Uniformes sobre la Igualdad de Oportunidades para las Personas con Discapacidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ohchr.org/es/about-us/history/vienna-declaration" target="_blank" rel="noopener noreferrer") Naciones Unidas. (1993). Conferencia Mundial de Derechos Humanos, Viena, 1993.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.unicef.org/lac/dise%C3%B1o-universal-para-el-aprendizaje-y-libros-de-texto-digitales-accesibles " target="_blank" rel="noopener noreferrer") UNICEF. (s.f.). Diseño Universal para el Aprendizaje y libros de texto digitales accesibles. Conoce en qué consiste y cómo puede transformar la educación.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://ayuda.webclass.cl/articulo/como-implementar-el-dua-en-el-aula/" target="_blank" rel="noopener noreferrer") WebClass. Educational Technologies. (s.f.). Guía para implementar el DUA durante la planificación. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.revistadeeducacion.cl/aplicar-diseno-universal-aprendizaje/cación educativa. El diseño de clases, actividades, rutas de aprendizaje y otras estructuras debe contemplar los siguientes componentes fundamentale" target="_blank" rel="noopener noreferrer") Revista de educación. (s.f.) ¿Cómo aplicar el diseño universal para el aprendizaje? Ministerio de Educación de Chile. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=bBU3JCvKVxw " target="_blank" rel="noopener noreferrer") Instituto AGL. (2013). Calpe&Abyla: "El Aula es un universo de diversidad".
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=XpjpnlGaG-g" target="_blank" rel="noopener noreferrer") FIAPAS. (2017). Discapacidad auditiva. Recursos para el acceso a la comunicación y a la formación.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=jNWflL8YIKU " target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2014). Educación Inclusiva - Escuela Colombia.                            

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema:
          'Modelos Educativos Contemporáneos y Diversidad en el Aprendizaje',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'La sigla P.O.E.R en el diseño de estrategias de enseñanza en contextos diversos, hace referencia al tipo al diseño de materiales en las experiencias y sus cualidades:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Práctica, Operación, Estrategia y Reconocimiento',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Potencial, Oportunidad, Entusiasmo, Realidad',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Posicionamiento, Objetividad, Establecimiento, Rigurosidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Perceptibles, Operables, Entendibles, Robustos',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'La inclusión educativa hace referencia a:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La postura filosófica sobre diversidad colombiana con sus múltiples culturas, regiones, riquezas y dificultades territoriales',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'El mecanismo y los procesos de gestión de colocación laboral y generación de ingresos económicos para todos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Las estrategias educativas para el desarrollo integral de las personas que se encuentran en colegios y universidades',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'El enfoque que reconoce y garantiza el derecho de todas las personas a acceder a una educación de calidad',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: 'D.U.A es la sigla de:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Diseño Universal para el Aprendizaje',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Desarrollo Universal Aplicado',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Disposición Universitaria del Aprendizaje',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Desarrollos Universales Analíticos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'El siguiente documento de política NO es un referente para la inclusión educativa en Colombia:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Constitución Política de Colombia',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ley 115 - Ley General de Educación de 1994',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Conpes Social 80 de 2004',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Ley 1450 de 2011 - Ley del Plan Nacional de Desarrollo ‐ Prosperidad para Todos',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'En el Diseño Universal para el Aprendizaje se reconoce la importancia de:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Las redes cerebrales que intervienen en el proceso de aprendizaje',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Las redes de maestros en el diseño de estrategias educativas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Las redes tecnológicas que permiten llevar innovación y creatividad al aula',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Las redes familiares que promueven el cuidado y la protección de los infantes y adolescentes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
