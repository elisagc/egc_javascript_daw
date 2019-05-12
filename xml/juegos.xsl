<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="/">
  
<html>

<head>
	
<link rel="stylesheet" href="../style/style.css"/>
<link href="https://fonts.googleapis.com/css?family=Nunito|Roboto" rel="stylesheet"/>

</head>
  <body>
    <nav>	
      <div class="logo">
            <a href="../index.html"><img src="../img/logo.png" class="imglogo"></img></a>
      </div>

      <div class="menu">
        <ul>
          <li><a href="../index.html">Elige tu carta</a></li>
          <li><a href="juegos.xml">Los más jugados</a></li>
          <li><a href="../html/tutoriales.html">Tutoriales</a></li>
          <li><a href="../html/tiendas.html">Dónde comprar</a></li>
          <li><a href="../html/contacto.html">Contacto</a></li>
        </ul>
    </div>	
  </nav>
<section class="section_masjugados">
    <xsl:for-each select="juegos/juego">
    
      <div class="caja_masjugados">
        <p class="juegoTitulo"><xsl:value-of select="nombre"/></p>
        <img class="juegoImagen"><xsl:attribute name="src"><xsl:value-of select="imagen"/></xsl:attribute></img>
        

        <xsl:if test="minimo_jugadores/@value = maximo_jugadores/@value" >
            <p> Para <xsl:value-of select="minimo_jugadores/@value"/> jugadores</p>
        </xsl:if>

        <xsl:if test="minimo_jugadores/@value != maximo_jugadores/@value" >
            <p> De <xsl:value-of select="minimo_jugadores/@value"/> a <xsl:value-of select="maximo_jugadores/@value"/> jugadores</p>
        </xsl:if>
        
        <p class="nombre_atributo">Duración de la partida: <xsl:value-of select="tiempo_maximo/@value"/> minutos</p>
        <p class="nombre_atributo">Edad mínima recomendada: <xsl:value-of select="edad_minima/@value"/> años</p>
        
      </div>
        
    </xsl:for-each>
    
     </section>
    </body>
  </html>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </xsl:template>
</xsl:stylesheet>
