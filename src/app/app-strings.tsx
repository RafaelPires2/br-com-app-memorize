export const appStrings = {
  button: {
    send: 'Enviar',
    loading: 'Carregando...',
    loadingAgain: 'Carregar novamente',
  },

  emptyState: {
    emptyStateDeck: 'Ainda não existe nenhum Deck cadastrado. Cadastre seu primeiro Deck!',
  },

  validators: {
    requiredThreeLetter: 'Campo deve ter no mínimo 3 caracteres',
    requiredThirtyLetter: 'Campo deve ter no mínimo 30 caracteres',
    requiredThreeHundredLetter: 'Campo deve ter no mínimo 300 caracteres',
    required: 'Este campo é obrigatório',
    thisDeckAlreadyExists: 'Esse nome de deck já existe!',
  },

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
