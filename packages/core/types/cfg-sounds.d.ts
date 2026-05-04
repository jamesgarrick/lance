export interface cfgSoundsEntry {
  name: string;
  sound: [file: string, volume: number, pitch: number, maxDistance: number];
  titles: [time: number, text: string];

  titlesFont?: string;
  titlesSize?: number;
  forceTitles?: 0 | 1;
  titlesStructured?: 0 | 1;
}

export interface CfgSounds {
  [key: string]: cfgSoundsEntry;
}
