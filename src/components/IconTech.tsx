import React from "react";
import { FaDocker, FaReact, FaNodeJs } from "react-icons/fa";
import { SiPostgresql, SiTypescript, SiExpo, SiReacthookform } from "react-icons/si";
import { GiToken } from "react-icons/gi";
import { FaFilePdf } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const technologies = {
  "React.js": FaReact,
  "React Router Dom V6": FaReact,
  "React Navigation": FaReact,
  "React Native": FaReact,
  PostgreSQL: SiPostgresql,
  Docker: FaDocker,
  "Express.js": FaNodeJs,
  JWT: GiToken,
  "Passport.js": FaNodeJs,
  TypeScript: SiTypescript,
  Pdfmake: FaFilePdf,
  Nodemailer: HiOutlineMail,
  "Expo Go": SiExpo,
  Formik: SiReacthookform,
  Yup: SiReacthookform,
};

interface IconTechProps {
  technology: string;
}

const IconTech: React.FC<IconTechProps> = ({ technology }) => {
  const Icon = technologies[technology as keyof typeof technologies];
  return <Icon />;
};

export default IconTech;
