import { IAboutHoursList } from "molecules/AboutHoursList/interface";
import { IAboutSoloInfo } from "molecules/AboutSoloInfo/interface";

export interface IAboutInfo {
    hours: IAboutHoursList;
    infos: IAboutSoloInfo[];
}