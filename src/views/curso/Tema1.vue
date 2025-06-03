<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Políticas y normativas sobre inclusión educativa'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/4.png", data-aos="zoom-in")            
      .col-lg-8
        .bg-color-4.p-4.h-100.j1(data-aos="fade-left")
          p(data-aos="fade-down").mb-0 Para comprender el contexto de la inclusión educativa, es esencial revisar el desarrollo histórico de los marcos normativos nacionales e internacionales. Este recorrido permite identificar los referentes legales y filosóficos que orientan la normatividad en torno a la inclusión, aportando a la comprensión, el conocimiento y el debate.
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Marco normativo internacional (estado del arte)
    p(data-aos="fade-down") A continuación, se presentan los principales instrumentos internacionales que han promovido y fundamentado la inclusión educativa a nivel global:
    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Declaración Universal de los Derechos Humanos (1948) 
              p El Artículo 26 reconoce el derecho universal a la educación, gratuita en los niveles elementales y fundamentales, con acceso a la educación técnica, profesional y superior, según méritos.        
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/5.png")  
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Declaración de los Derechos del Niño (1959)
              p Reconoce el derecho a la educación y a un tratamiento especial para niños con discapacidades físicas o mentales. Promueve la educación gratuita y el acceso a las actividades recreativas.       
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/6.png") 
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Convención sobre los Derechos del Niño (1989)
              p Establece a los menores de 18 años, como sujetos de derecho. Resalta la continuidad educativa y la atención a la diversidad étnica, religiosa, cultural y lingüística. Promueve la igualdad de oportunidades y el respeto por los derechos humanos.        
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/7.png") 
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Declaración Mundial sobre Educación para Todos (1990) y Marco de Acción de Jomtien
              p Busca la universalización de la educación básica, destacando su carácter de derecho humano fundamental. Se centra en satisfacer las necesidades de aprendizaje de grupos desatendidos.        
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/8.png") 
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Declaración y Programa de Acción de Viena (1993)
              p En la sección sobre igualdad, dignidad y tolerancia, promueve políticas contra el racismo, la discriminación racial, la xenofobia y otras formas de intolerancia. Protege los derechos de mujeres y minorías étnicas, religiosas y lingüísticas.        
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/9.png") 
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Resolución 48/96 de la ONU (1996)
              p Representa el compromiso de los Estados, para garantizar la igualdad de oportunidades de las personas con discapacidad desde una perspectiva de derechos humanos.        
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/10.png") 
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Conferencia Mundial sobre Necesidades Educativas Especiales (Salamanca, 1994)
              p Propone una educación para todos, mediante escuelas inclusivas. Destaca la necesidad de capacitar a las instituciones educativas para atender a estudiantes con necesidades educativas especiales, celebrando la diversidad y personalizando el aprendizaje.        
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/11.png") 
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Convención Interamericana para la Eliminación de todas las Formas de Discriminación contra las Personas con Discapacidad (1999)
              p Establece medidas legislativas, sociales, laborales y educativas, para prevenir y eliminar la discriminación. Promueve la cooperación internacional, la investigación científica y el desarrollo de recursos para fomentar la independencia, autosuficiencia e integración de las personas con discapacidad (PCD).        
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/12.png") 
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Convención sobre los Derechos de las Personas en Situación de Discapacidad (2006) 
              p Es un instrumento de derechos humanos con una dimensión de desarrollo social que reafirma el derecho de las personas con discapacidad a gozar de todos los derechos humanos y libertades fundamentales, promoviendo así su inclusión plena y equitativa en la sociedad.        
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/13.png") 

    h3(data-aos="fade-down") Foro Mundial por la Educación
    p(data-aos="fade-down") A continuación, se presenta un recurso educativo que analiza los ejes prioritarios del Foro Mundial por la Educación, abordando los avances, desafíos y compromisos internacionales para lograr una educación inclusiva, equitativa y de calidad para todos.  
    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ur-Ee0Cpurg?si=HA26tZl5jCf5X6GZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Disposiciones normativas en educación inclusiva en Colombia

    .row.mb-5 
      .col-lg-5.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/14.png", data-aos="zoom-in")            
      .col-lg-7
        .bg-color-2.p-4.h-100.j1(data-aos="fade-left")
          p(data-aos="fade-down").mb-0 Colombia, como Estado Social de Derecho, establece que la Ley es un instrumento de armonización social y garante de los fines estatales, por lo cual tanto la sociedad como el Estado están sujetos a ella. En este marco, el Artículo 13 de la Constitución Política de Colombia, expresa un firme compromiso con las personas en situación de vulnerabilidad, asegurando su acceso efectivo a los derechos en condiciones de igualdad. Además, establece la obligación estatal de proteger especialmente a quienes se encuentran en condiciones físicas, económicas o mentales de desventaja.

    .row.align-items-start.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        AcordionA(tipo="b")
          .div(titulo="Ley 115 de 1994 (Ley General de Educación)")
            p Define principios y fines de la educación. Promueve la diversidad cultural, el respeto por los derechos humanos y la equidad. Ordena acciones pedagógicas para la integración de estudiantes con discapacidad o capacidades excepcionales. Impulsa la formación docente especializada y ajustes curriculares.            
          .div(titulo="Decreto 2247 de 1997")
            p Prohíbe requisitos discriminatorios en la admisión educativa. Destaca el valor de actividades lúdico-pedagógicas adaptadas a las características individuales de los estudiantes.
          .div(titulo="Resolución 2565 del 2003")
            p Obliga a organizar la oferta educativa para personas con discapacidad, según su demanda y condiciones particulares, enmarcada en los principios de integridad social y educativa.
          .div(titulo="CONPES Social 80 del 2004")
            p Primer antecedente formal de política pública, sobre discapacidad y compromisos para su implementación interinstitucional.                                                      
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/15.png", alt="")    

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/16.png", alt="")     
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Lineamientos de política 2005")
            p Emitidos por el Ministerio de Educación Nacional. Enfocados en ampliar cobertura educativa para poblaciones vulnerables, mejorar calidad y fortalecer procesos institucionales.           
          .div(titulo="Plan Decenal de Educación 2006")
            p Plantea como objetivo la atención a estudiantes con necesidades educativas especiales mediante apoyos pedagógicos, terapéuticos y tecnológicos.
          .div(titulo="Ley 1145 del 2007")
            p Crea el Sistema Nacional de Discapacidad. Promueve la formulación e implementación de políticas públicas en discapacidad con participación multisectorial.
          .div(titulo="Decreto 366 del 2009")
            p Regula la organización del servicio de apoyo pedagógico para estudiantes con discapacidad, talentos o barreras de aprendizaje.                                                     
  

    .row.align-items-start.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        AcordionA(tipo="b")
          .div(titulo="Directivas Ministeriales 15 (2010) y 23 (2011)")
            p Brindan orientaciones para el uso adecuado de recursos destinados a servicios de apoyo para estudiantes con necesidades educativas especiales.           
          .div(titulo="Acuerdo 001 del 2011")
            p Adopta el reglamento del Consejo Nacional de Discapacidad, órgano asesor del Sistema Nacional de Discapacidad, en políticas públicas.    
          .div(titulo="Ley 1618 del 2013")
            p Garantiza el ejercicio efectivo de los derechos de las personas con discapacidad mediante medidas de inclusión, acciones afirmativas y ajustes razonables.    
          .div(titulo="Orientaciones técnicas, administrativas y pedagógicas (2017)")
            p Documento clave para asegurar una educación de calidad y verdaderamente inclusiva. Presenta retos y estrategias vigentes para la atención educativa a estudiantes con discapacidad.                                                         
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/17.png", alt="")


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.un.org/esa/socdev/enable/documents/tccconvs.pdf" target="_blank" rel="noopener noreferrer") ONU. (s.f.). Convención sobre los derechos de las personas con discapacidad. Asamblea General de la ONU.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://unesdoc.unesco.org/ark:/48223/pf0000121117_spa " target="_blank" rel="noopener noreferrer") Peppler-Barry, U. & Fiske, E. (2000). Informe final. Foro Mundial sobre la educación. Dakar-Senegal.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=2Dx_O2vlDjY" target="_blank" rel="noopener noreferrer") Plena Inclusión. (2022). ¿La educación inclusiva es para todos y todas? Gerardo Echeita | Plena inclusión.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=x_GOzLChHFk" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2014). Etnoeducación y Diversidad - - Escuela Colombia.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Jzl8bCAQzFM" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2015). TIC para una educación inclusiva.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=HBhj5U62YmE" target="_blank" rel="noopener noreferrer") RREI Latinoamerica. (2016). Red Regional por la Educación Inclusiva-Latinoamérica.               

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
