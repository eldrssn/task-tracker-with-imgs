export const defaultState = [
  {
    id: 'todo',
    columnName: 'Сделать',
    cards: []
  },
  {
    id: 'inprogress',
    columnName: 'В процессе',
    cards: []
  },
  {
    id: 'done',
    columnName: 'Сделано',
    cards: []
  }
];

export const defaultCard = {
  id: null,
  name: '',
  description: '',
  url: '',
  column: ''
}