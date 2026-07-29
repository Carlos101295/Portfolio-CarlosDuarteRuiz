// ─────────────────────────────────────────────────────────────
// EDITA ESTE ARCHIVO con tus proyectos reales.
// Cada objeto es una tarjeta del scroll horizontal + su subpágina.
// - id: se usa en la URL, ej. /proyecto/gestor-tareas
// - imagen: ruta a la imagen de la tarjeta. Coloca el archivo dentro de
//   la carpeta public/images/ y escribe aquí "/images/nombre-archivo.png"
// - demoVideo: enlace embebible (YouTube) o ruta a un archivo .mp4 en /public
// - apkUrl: enlace directo de descarga (recomendado: Release de GitHub)
// - stack: lista de tecnologías usadas
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
id: 'raiz-local',
    orden: '01',
    nombre: 'Raíz Local',
    resumen: 'Marketplace móvil que conecta directamente a productores del sector primario con consumidores finales, eliminando intermediarios.',
    descripcion: 'Aplicación nativa para Android desarrollada como Trabajo de Fin de Grado bajo la arquitectura Model-View-View-Model (MVVM). El objetivo del sistema es democratizar la cadena alimentaria garantizando un mayor margen de beneficio para los agricultores y entregando productos "Km 0" a los usuarios. Integra dos perfiles de usuario (Comprador y Vendedor), autenticación y bases de datos en tiempo real mediante FireStore (NoSQL) y un flujo completo de e-commerce que incluye carrito, favoritos, gestión de inventario y simulación de pagos con tarjeta o Google Pay.',
    stack: ['Java', 'Android Studio', 'Firebase Auth', 'FireStore', 'Cloudinary', 'Google Maps API', 'XML', 'Google Pay'],
    demoVideo: '-R-50ZHgpnE',
    apkUrl: 'https://github.com/Carlos101295/RaizLocal-App/releases/download/1.0/RaizLocal_v1.apk', 
    repoUrl: 'https://github.com/Carlos101295/RaizLocal-App',
    imagen: '/images/raizlocal_icono1.jpg'
  },
  {
    id: 'video-game-price-tracker',
    orden: '02',
    nombre: 'Video Games Price Tracker - CDR',
    resumen: 'Aplicación multiplataforma (Web y Móvil) que permite buscar videojuegos y comparar ofertas en tiempo real entre tiendas digitales.',
    descripcion: 'Aplicación Full-Stack orientada a la búsqueda y comparación de precios de videojuegos en plataformas como Steam, GOG y Epic Games. El backend, construido con Java 21 y Spring Boot, actúa como una API REST que consume la API de CheapShark de forma eficiente. Implementa un sistema de caché inteligente con TTL de 24 horas utilizando Spring Data JPA y Postgre para optimizar el rendimiento y reducir las llamadas externas. El frontend, desarrollado con React Native y Expo, ofrece una experiencia responsiva con modo oscuro que se adapta a navegadores web (diseño con barra lateral) y dispositivos Android, gestionando las rutas nativas mediante React Navigation.',
    stack: ['Java 21', 'Spring Boot 3', 'Postgre', 'Spring Data JPA', 'React Native', 'Expo', 'API REST', 'Render'],
    demoVideo: '', // pega aquí el ID de YouTube o la ruta del vídeo
    apkUrl: '', // enlace de descarga de la APK
    repoUrl: 'https://github.com/Carlos101295/VideoGamesPriceTracker',
    imagen: '/images/mandovideojuegos.png'
  },
  {
    id: 'proyecto-tres',
    imagen: '/images/fotoproyecto1.png',
    orden: '03',
    nombre: 'Nombre del proyecto 3',
    resumen: 'Una frase corta que resuma qué hace este proyecto.',
    descripcion:
      'Descripción más larga del proyecto: qué problema resuelve, qué decisiones técnicas tomaste y qué parte es la que más te enorgullece.',
    stack: ['Flutter', 'SQLite'],
    demoVideo: '', // pega aquí el ID de YouTube o la ruta del vídeo
    apkUrl: '', // enlace de descarga de la APK
    repoUrl: '',
  },
  {
    id: 'proyecto-cuatro',
    imagen: '/images/fotoproyecto1.png',
    orden: '04',
    nombre: 'Nombre del proyecto 4',
    resumen: 'Una frase corta que resuma qué hace este proyecto.',
    descripcion:
      'Descripción más larga del proyecto: qué problema resuelve, qué decisiones técnicas tomaste y qué parte es la que más te enorgullece.',
    stack: ['Java', 'Android SDK'],
    demoVideo: '', // pega aquí el ID de YouTube o la ruta del vídeo
    apkUrl: '', // enlace de descarga de la APK
    repoUrl: '',
  },
  {
    id: 'proyecto-cinco',
    imagen: '/images/fotoproyecto1.png',
    orden: '05',
    nombre: 'Nombre del proyecto 5',
    resumen: 'Una frase corta que resuma qué hace este proyecto.',
    descripcion:
      'Descripción más larga del proyecto: qué problema resuelve, qué decisiones técnicas tomaste y qué parte es la que más te enorgullece.',
    stack: ['Kotlin', 'Retrofit', 'Coroutines'],
    demoVideo: '', // pega aquí el ID de YouTube o la ruta del vídeo
    apkUrl: '', // enlace de descarga de la APK
    repoUrl: '',
  },
  {
    id: 'proyecto-seis',
    imagen: '/images/fotoproyecto1.png',
    orden: '06',
    nombre: 'Nombre del proyecto 6',
    resumen: 'Una frase corta que resuma qué hace este proyecto.',
    descripcion:
      'Descripción más larga del proyecto: qué problema resuelve, qué decisiones técnicas tomaste y qué parte es la que más te enorgullece.',
    stack: ['Swift', 'SwiftUI'],
    demoVideo: '', // pega aquí el ID de YouTube o la ruta del vídeo
    apkUrl: '', // enlace de descarga de la APK
    repoUrl: '',
  },
  {
    id: 'proyecto-siete',
    imagen: '/images/fotoproyecto1.png',
    orden: '07',
    nombre: 'Nombre del proyecto 7',
    resumen: 'Una frase corta que resuma qué hace este proyecto.',
    descripcion:
      'Descripción más larga del proyecto: qué problema resuelve, qué decisiones técnicas tomaste y qué parte es la que más te enorgullece.',
    stack: ['Kotlin', 'Firebase', 'MVVM'],
    demoVideo: '', // pega aquí el ID de YouTube o la ruta del vídeo
    apkUrl: '', // enlace de descarga de la APK
    repoUrl: '',
  },
  {
    id: 'proyecto-ocho',
    imagen: '/images/fotoproyecto1.png',
    orden: '08',
    nombre: 'Nombre del proyecto 8',
    resumen: 'Una frase corta que resuma qué hace este proyecto.',
    descripcion:
      'Descripción más larga del proyecto: qué problema resuelve, qué decisiones técnicas tomaste y qué parte es la que más te enorgullece.',
    stack: ['React Native', 'Redux'],
    demoVideo: '', // pega aquí el ID de YouTube o la ruta del vídeo
    apkUrl: '', // enlace de descarga de la APK
    repoUrl: '',
  },
  {
    id: 'proyecto-nueve',
    imagen: '/images/fotoproyecto1.png',
    orden: '09',
    nombre: 'Nombre del proyecto 9',
    resumen: 'Una frase corta que resuma qué hace este proyecto.',
    descripcion:
      'Descripción más larga del proyecto: qué problema resuelve, qué decisiones técnicas tomaste y qué parte es la que más te enorgullece.',
    stack: ['Flutter', 'BLoC', 'REST API'],
    demoVideo: '', // pega aquí el ID de YouTube o la ruta del vídeo
    apkUrl: '', // enlace de descarga de la APK
    repoUrl: '',
  },
  {
    id: 'proyecto-diez',
    imagen: '/images/fotoproyecto1.png',
    orden: '10',
    nombre: 'Nombre del proyecto 10',
    resumen: 'Una frase corta que resuma qué hace este proyecto.',
    descripcion:
      'Descripción más larga del proyecto: qué problema resuelve, qué decisiones técnicas tomaste y qué parte es la que más te enorgullece.',
    stack: ['Java', 'SQLite', 'MVP'],
    demoVideo: '', // pega aquí el ID de YouTube o la ruta del vídeo
    apkUrl: '', // enlace de descarga de la APK
    repoUrl: '',
  },
]
