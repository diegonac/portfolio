interface IProjectList {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  repositories: { backend?: string; frontend?: string };
  download?: string;
}

const projectsList: IProjectList[] = [
  {
    title: "Tasking",
    description:
      "Tasking es mi primer proyecto, permite crear, eliminar y gestionar tareas pendientes o completadas. Con base de datos, backend, y frontend, incluye inicio de sesión para una experiencia segura",
    technologies: [
      "React.js",
      "React Router Dom V6",
      "PostgreSQL",
      "Docker",
      "Express.js",
      "JWT",
      "Passport.js",
    ],
    link: "https://tasking-dn.vercel.app/",
    repositories: {
      backend: "https://github.com/diegonacimiento/tasking-backend",
      frontend: "https://github.com/diegonacimiento/tasking-frontend",
    },
  },
  {
    title: "Calculator-register",
    description:
      "Creé este proyecto full stack para ayudar a una boutique donde su registradora se estropeó. Entonces les di una manera de registrar sus ventas, hacer recibos en PDF descargables o enviarlos por email desde la misma página y así ser más ecológicos al evitar el papel. Una solución práctica y amigable con el planeta",
    technologies: [
      "React.js",
      "TypeScript",
      "Express.js",
      "Pdfmake",
      "Nodemailer",
    ],
    link: "https://calculator-register.vercel.app/",
    repositories: {
      backend: "https://github.com/diegonacimiento/send-email",
      frontend: "https://github.com/diegonacimiento/calculator-register",
    },
  },
  {
    title: "Pokedex",
    description:
      "Mi primer aplicación móvil, consume la API PokeApi, nos muestra los 1010 pokemones con sus estadísticas principales, búsqueda por nombre o número del pokemon, y marcado de favorito",
    technologies: [
      "React.js",
      "React Native",
      "React Navigation",
      "Expo Go",
      "Formik",
      "Yup",
    ],
    link: "https://www.youtube.com/embed/ZCCSPmlpQL0",
    repositories: {
      frontend: "https://github.com/diegonacimiento/pokedex",
    },
    download: "https://expo.dev/artifacts/eas/5ZCYHrCjw5tVcGNKwRT6iQ.apk",
  },
  {
    title: "Platzi Conf Merch",
    description: `Frontend de una e-commerce de productos de la Platzi Conf Merch, con PayPal integrado y sistema de geolocalización. \nDatos para hacer pruebas con pagos ficticios: \n- admin-prueba@example.com (email) \n- admin432 (password)`,
    technologies: [
      "React.js",
      "React Router Dom V6",
      "React Leaflet",
      "Pay Pal",
      "Webpack",
    ],
    link: "https://platzi-conf-merch-dn.web.app/",
    repositories: {
      frontend: "https://github.com/diegonacimiento/platzi-conf-merch",
    },
  },
];

export default projectsList;
