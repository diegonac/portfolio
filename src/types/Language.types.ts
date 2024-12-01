import { WorkExperience } from "./WorkExperience.types";

export type TProjectDescription = {
 [key: string]: string;
};

export type TLanguage = {
 presentationRol: string;
 navBar: NavBar;
 presentation: string;
 workExperience: WorkExperience[];
 projectTitles: string[];
 projectDescription: TProjectDescription;
 contactPhrase: string;
};

export interface ILanguage {
 spain: TLanguage;
 english: TLanguage;
}

export interface NavBar {
 aboutMe: string;
 workExperience: string;
 projects: string;
 contact: string;
}