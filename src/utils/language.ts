const language: ILanguage = {
  spain: {
    presentationRol: "Desarrollador full stack",
    navBar: ["Sobre mí", "Proyectos", "Contacto"],
    presentation: `Soy un programador Jr en busca de su primer trabajo. Programo y
  aprendo todos los días, siempre busco mejorar como persona y como
  profesional. Conocí el mundo IT en abril del 2022, y en poco más de un
  año he aprendido las herramientas suficientes para ser full stack. Me
  encanta crear y solucionar todo lo que imagine`,
    projectDescription: {
      Tasking:
        "Tasking es mi primer proyecto, permite crear, eliminar y gestionar tareas pendientes o completadas. Con base de datos, backend, y frontend, incluye inicio de sesión para una experiencia segura",
      "Calculator-register":
        "Creé este proyecto full stack para ayudar a una boutique donde su registradora se estropeó. Entonces les di una manera de registrar sus ventas, hacer recibos en PDF descargables o enviarlos por email desde la misma página y así ser más ecológicos al evitar el papel. Una solución práctica y amigable con el planeta",
      Pokedex:
        "Mi primer aplicación móvil, consume la API PokeApi, nos muestra los 1010 pokemones con sus estadísticas principales, búsqueda por nombre o número del pokemon, y marcado de favorito",
      "Platzi Conf Merch": `Frontend de una e-commerce de productos de la Platzi Conf Merch, con PayPal integrado y sistema de geolocalización. \nDatos para hacer pruebas con pagos ficticios: \n- admin-prueba@example.com (email) \n- admin432 (password)`,
    },
    projectTitles: [
      "Tecnologías",
      "Ver el proyecto",
      "Proyecto",
      "Descargar app",
    ],
    contactPhrase: "Vivir, aprender y subir de nivel un día a la vez",
  },
  english: {
    presentationRol: "Full stack developer",
    navBar: ["About me", "Projects", "Contact"],
    presentation: `I am a Jr. programmer looking for his first job. Program and
      I learn every day, I always seek to improve as a person and as
      professional. I discovered the IT world in April 2022, and in just over a
      year I have learned enough tools to be full stack. I
      love to create and solve everything you imagine`,
    projectDescription: {
      Tasking:
        "Tasking is my first project, it allows you to create, delete and manage pending or completed tasks. With database, backend, and frontend, it includes login for a secure experience",
      "Calculator-register":
        "I created this full stack project to help a boutique where their register broke down. So I gave them a way to record their sales, make downloadable PDF receipts or send them by email from the same page and thus be more eco-friendly by avoiding the paper. A practical and planet-friendly solution",
      Pokedex:
        "My first mobile application, consumes the PokeApi API, shows us the 1010 pokemons with their main statistics, search by pokemon name or number, and favorite marking",
      "Platzi Conf Merch": `Frontend of an e-commerce of Platzi Conf Merch products, with integrated PayPal and geolocation system. \nData to do tests with fictitious payments: \n- admin-test@example.com (email) \n- admin432 (password)`,
    },
    projectTitles: ["Technologies", "See project", "Project", "Download app"],
    contactPhrase: "Live, learn and level up one day at a time",
  },
};

const getLanguage = (spanish: boolean): TLanguage => {
  return spanish ? language["spain"] : language["english"];
};

export default getLanguage;

type TProjectDescription = {
  [key: string]: string;
};

type TLanguage = {
  presentationRol: string;
  navBar: string[];
  presentation: string;
  projectTitles: string[];
  projectDescription: TProjectDescription;
  contactPhrase: string;
};

interface ILanguage {
  spain: TLanguage;
  english: TLanguage;
}
