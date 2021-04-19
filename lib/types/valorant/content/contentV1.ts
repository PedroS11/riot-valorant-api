export interface LocalizedNames {
  ar_AE: "ar-AE";
  de_DE: "de-DE";
  en_GB: "en-GB";
  en_US: "en-US";
  es_ES: "es-ES";
  es_MX: "es-MX";
  fr_FR: "fr-FR";
  id_ID: "id-ID";
  it_IT: "it-IT";
  ja_JP: "ja-JP";
  ko_KR: "ko-KR";
  pl_PL: "pl-PL";
  pt_BR: "pt-BR";
  ru_RU: "ru-RU";
  th_TH: "th-TH";
  tr_TR: "tr-TR";
  vi_VN: "vi-VN";
  zh_CN: "zh-CN";
  zh_TW: "zh-TW";
}

export interface ContentItem {
  name: string;

  localizedNames: LocalizedNames;

  id: string;

  assetName: string;

  assetPath: string;
}

export interface Act {
  name: string;

  localizedNames: LocalizedNames;

  id: string;

  isActive: boolean;
}

export interface Content {
  version: string;

  characters: ContentItem[];

  maps: ContentItem[];

  chromas: ContentItem[];

  skins: ContentItem[];

  skinLevels: ContentItem[];

  equips: ContentItem[];

  gameModes: ContentItem[];

  sprays: ContentItem[];

  sprayLevels: ContentItem[];

  charms: ContentItem[];

  charmLevels: ContentItem[];

  playerCards: ContentItem[];

  playerTitles: ContentItem[];

  acts: Act[];
}
