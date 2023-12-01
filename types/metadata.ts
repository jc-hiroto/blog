import { StaticImageData } from "next/image";

export enum PostLanguage {
    en = 'en',
    zh_tw = 'zh_tw',
}

export interface PostMetadata {
    title: string;
    author: string;
    date: Date;
    cover: StaticImageData;
    words: number;
    tags: string[];
    description: string;
    language: PostLanguage;
}