import { ButtonType } from 'components/atoms/Button';
import { IAboutPerson } from 'components/molecules/AboutPerson/interface';

export interface IAboutPersons {
  subTitle: string;
  title: string;
  content: string;
  button: ButtonType;
  link: string;
  listTitle: string;
  items: IAboutPerson[];
}
