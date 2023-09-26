export interface LangProps {
 language: boolean;
}

export interface HeaderProps extends LangProps{
 changeLanguage: () => void;
}