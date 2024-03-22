export interface UserI {
  id: string;
  name: string;
  email: string;
}

export interface DeckI {
  id: string;
  title: string;
}

export interface CardI {
  id: string;
  front: string;
  back: string;
  deckTitle: string;
}
