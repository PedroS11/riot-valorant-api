import { LocalizedNames } from "./localizedNames";

export interface Act {
  name: string;
  localizedNames: LocalizedNames;
  id: string;
  isActive: boolean;
}
