import { PostLanguage } from "types/metadata";

function getWpm(lang: string) {
  const wpm = {
    en: 228,
    zh_tw: 158,
  };

  switch (lang) {
    case "en":
      return wpm.en;
    case "zh_tw":
      return wpm.zh_tw;
    default:
      return wpm.en;
  }
}

function calcReadingTime(wordCount: number, lang: string): number {
  return Math.ceil(wordCount / getWpm(lang));
}

export { calcReadingTime };
