# tiendaCafeClone
Practica de elaboracion de un sitio con varias funcionalidades

# Páginas del sitio:

- index.html: La página principal https://tiendadecafe.com.ar/
- tienda.html: La página Nuestro Café https://tiendadecafe.com.ar/tienda/
- tutoriales.html: La página Tutoriales https://tiendadecafe.com.ar/tutoriales/
- menu-tienda.html: La página Nuestro Menú https://tiendadecafe.com.ar/menu-tienda/
- trabaja-en-tdc.html: La página Trabajá con Nosotros https://tiendadecafe.com.ar/trabaja-en-tdc/
- franquicias.html: La página Franquicias https://tiendadecafe.com.ar/franquicias/
- contacto.html: La página Contacto https://tiendadecafe.com.ar/contacto/

# Estructura del proyecto
```
tratrabajo_practico_obligatorio1/
│
├── index.html 
├── tienda.html
├── tutoriales.html
├── menu-tienda-html
├── trabaja-en-tdc.html
├── franquicias.html
├── contacto.html
│
├── components/
│ └── nav.html
│ └── footer.html
│
├── css/
│ └── styles.css # Archivo principal de estilos CSS (pueden incluir alguno más)
│
├── js/
│ └── main.js
│ └── index.js 
│ └── menu-tienda.js 
│
├── img/
│ ├── logo.png # Ejemplo de logo o imagen
│ ├── background.jpg # Imagen de fondo
│ └── icon.svg # Ejemplo de icono SVG
│
└── assets/
 └── fonts/ # Carpeta para fuentes personalizadas
 └── custom-font.ttf # Ejemplo de fuente personalizadabajo_practico_obligatorio1/

```

# 🛠️ Configuración variables globales de style.css

```
/* ================================
   Variables globales
================================ */
:root {
  /* Colores */
  --color-primary: #2d2a2a;       /* Marrón oscuro / fondo */
  --color-secondary: #c7a17a;     /* Dorado claro / acento */
  --color-white: #ffffff;
  --color-text: #1e1e1e;
  --color-background: #fefefe;

  /* Tipografía */
  --font-main: 'Oswald', Arial, Helvetica, sans-serif;
  --font-size-base: 16px;
  --font-size-lg: 20px;
  --font-size-sm: 14px;

  /* Espaciado */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  /* Bordes */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;

  /* Sombra */
  --shadow-light: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* ================================
   Estilos base
================================ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-main);
}

body {
  font-size: var(--font-size-base);
  color: var(--color-text);
  background-color: var(--color-background);
  line-height: 1.6;
}

/* Ejemplo de uso de variables */
h1, h2, h3 {
  color: var(--color-primary);
}

a {
  color: var(--color-secondary);
  text-decoration: none;
}

button {
  background-color: var(--color-secondary);
  color: var(--color-white);
  border: none;
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  box-shadow: var(--shadow-light);
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

```