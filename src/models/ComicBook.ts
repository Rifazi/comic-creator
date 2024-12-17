import { Page } from "./Page";

export interface ComicBook {
    name: string;
    date: string;
    size: Size;
    pages: Page[];
    author: string;
    coverImage: string;
}
  
export interface Size {
    width: number;
    height: number;
}

export const DefaultSizes = {
    STANDARD: { width: 6.625, height: 10.25 },
    MANGA: { width: 5, height: 7.5 },
    TRADE_PAPERBACK: { width: 6, height: 9 },
    LARGE: { width: 7.25, height: 10.5 },
};