interface IProjectList {
  title: string;
  technologies: string[];
  link: string;
  repositories: { backend?: string; frontend?: string };
  download?: string;
}

const projectsList: IProjectList[] = [
  {
    title: "Velmar",
    technologies: [
      "TypeScript",
      "Next.js",
      "Nest.js",
      "TailwindCSS",
      "PostgreSQL",
      "Swagger",
    ],
    link: "https://velmar-frontend.vercel.app/",
    repositories: {
      backend: "https://github.com/diegonacimiento/velmar-backend",
      frontend: "https://github.com/diegonacimiento/velmar-frontend",
    },
  },
  {
    title: "Tasking",
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
    download: "https://expo.dev/artifacts/eas/dsg4YE79hUPmaW3X7tPvNW.apk",
  },
];

export default projectsList;
