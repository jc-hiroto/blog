import { PostLanguage } from "types/metadata";

const wpm = {
  [PostLanguage.en]: 228,
  [PostLanguage.zh_tw]: 158,
}

function calcReadingTime(wordCount: number, lang: PostLanguage): number {
  return Math.ceil(wordCount / wpm[lang]);
}

export { calcReadingTime }