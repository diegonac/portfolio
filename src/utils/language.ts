import { ILanguage, TLanguage } from "../types/Language.types";
import english from "../languages/en/en";
import spain from "../languages/es/es";

const language: ILanguage = {
  spain,
  english,
};

const getLanguage = (spanish: boolean): TLanguage => {
  return spanish ? language["spain"] : language["english"];
};

export default getLanguage;
