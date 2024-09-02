const language: ILanguage = {
  spain: {
    presentationRol: "Desarrollador full stack",
    navBar: ["Sobre mí", "Proyectos", "Contacto"],
    presentation: `Programo y
  aprendo todos los días, siempre busco mejorar como persona y como
  profesional. Soy autodidacta por excelencia, amante de los desafíos y apasionado del aprendizaje.`,
    projectDescription: {
      Velmar:
        "Explora mi comercio electrónico ficticio, administrando productos, marcas y categorías, con autenticación de usuario segura y manejo de pedidos eficiente para una experiencia de compra fluida y segura",
      Tasking:
        "Tasking es mi primer proyecto, permite crear, eliminar y gestionar tareas pendientes o completadas. Con base de datos, backend, y frontend, incluye inicio de sesión para una experiencia segura",
      "Calculator-register":
        "Creé este proyecto full stack para ayudar a una boutique donde su registradora se estropeó. Entonces les di una manera de registrar sus ventas, hacer recibos en PDF descargables o enviarlos por email desde la misma página y así ser más ecológicos al evitar el papel. Una solución práctica y amigable con el planeta",
      Pokedex:
        "Mi primer aplicación móvil, consume la PokeApi y muestra detalles esenciales de 1010 pokemones. Permite a los usuarios explorar estadísticas, buscar por nombre o número y marcar favoritos",
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
    presentation: `I program and learn every day, always seeking to improve myself both personally and professionally. I am a self-taught learner par excellence, passionate about challenges and devoted to continuous learning.`,
    projectDescription: {
      Velmar:
        "Explore my fictional e-commerce, managing products, brands and categories, with secure user authentication and efficient order handling for a smooth and safe shopping experience",
      Tasking:
        "Tasking is my first project, it allows you to create, delete and manage pending or completed tasks. With database, backend, and frontend, it includes login for a secure experience",
      "Calculator-register":
        "I created this full stack project to help a boutique where their register broke down. So I gave them a way to record their sales, make downloadable PDF receipts or send them by email from the same page and thus be more eco-friendly by avoiding the paper. A practical and planet-friendly solution",
      Pokedex:
        "My debut mobile app consumes the PokeApi, showcasing essential details of 1010 Pokemon. It empowers users to explore stats, search by name or number, and mark favorites.",
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
