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
      checkYes: 'Sim',
      checkNo: 'Não',
    },
  },

  accountPage: {},

  newCardPage: {
    checkYes: 'Sim',
    checkNo: 'Não',
    front: 'Front:',
    response: 'Resposta:',
    isNewDeck: 'É um novo Deck?',
    changeDeck: 'Escolha o Deck:',
    selectDeck: 'Selecione o deck...',
    nameNewDeck: 'Nome do novo Deck:',
    placeholderDeck: 'Digite o nome do Deck...',
    placeholderFront: 'Digite a frente do card...',
    placeholderResponse: 'Digite a resposta do card...',
  },
};
