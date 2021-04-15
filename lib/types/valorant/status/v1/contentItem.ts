import { LocalizedNames } from "./localizedNames";

export interface ContentItem {
  name: string;
  localizedNames: LocalizedNames;
  id: string;
  assetName: string;
  assetPath: string;
}
