

interface IProjectList {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  repositories: {backend?: string, frontend?: string,},
  download?: string,
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
      backend: "https://github.com/diegonac/tasking-backend",
      frontend: "https://github.com/diegonac/tasking-frontend",
    }
  },
  {
    title: "Calculator-register",
    description:
      "Creé este proyecto full stack para ayudar a una boutique donde su registradora se estropeó. Entonces les di una manera de registrar sus ventas, hacer recibos en PDF y ser más ecológicos al evitar el papel pudiendo descargarlos o enviarlos por email. Una solución práctica y amigable con el planeta",
    technologies: [
      "React.js",
      "TypeScript",
      "Express.js",
      "Pdfmake",
      "Nodemailer",
    ],
    link: "https://calculator-register.vercel.app/",
    repositories: {
      backend: "https://github.com/diegonac/send-email",
      frontend: "https://github.com/diegonac/calculator-register",
    }
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
      frontend: "https://github.com/diegonac/pokedex",
    },
    download: "https://expo.dev/artifacts/eas/5ZCYHrCjw5tVcGNKwRT6iQ.apk",
  },
];


export default projectsList;
