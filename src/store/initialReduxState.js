export const initialReduxState = {
  // !TODO: расширить функционал в представление даты
  // в виде масcив ids и объекта с cardId: карточка

  tracker: {
    // ids: [1, 2, 'fdsf34'],

    todo: {
      columnLabel: 'todo',
      columnName: 'Сделать',
      cards: [],
    },
    inprogress: {
      columnLabel: 'inprogress',
      columnName: 'В процессе',
      cards: [],
    },
    done: {
      columnLabel: 'done',
      columnName: 'Сделано',
      cards: [],
    },
  },
  // users: {
  //   ids: [],
  //   data: {
  //     [userId]: userInfo
  //   }
  // }

  tracker2: {
    ids: [1, 2, 3, 4],

    todo: {
      1: {
        cardName: 'skjdbfnsdf',
        description: 'kbsjdfsdm',
        url: 'kuyg',
      },
      2: {},
      3: {},
    },

    inprogress: {
      4: {},
      5: {},
      6: {},
    },

    done: {
      7: {},
      8: {},
      9: {},
    },
  },
};
