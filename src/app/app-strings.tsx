export const appStrings = {
  button: {},

  homePage: {
    separatorFlatlist: 'Todos os itens foram carregados',

    header: {
      amountDecks: (amount: number) => `${amount > 1 ? 'Decks: ' + amount : 'Deck: ' + amount}`,
      amountCards: (amount: number) => `${amount > 1 ? 'Cards: ' + amount : 'Card: ' + amount}`,
      progress: 'Progresso:',
      welcome: (name: string) => `Olá, ${name}`,
    },
    deckCard: {
      amountOfItems: (amount: number) => `(${amount})`,
    },
  },

  accountPage: {},

  newCardPage: {
    detailCard: {},
  },
};
