export interface Post {
  id: number;
  utente: string;
  caption: string;
  liked: number[];
  date: string;
}

export interface PostReg {
  utente: string;
  caption: string;
  liked: number[];
  date: string;
}
