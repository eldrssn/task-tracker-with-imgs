export enum ActionTypes  {
  addCard = 'ADD_CARD',
  moveCard ='MOVE_CARD'
}

export interface ICard {
  id: null | number,
  name: string,
  description: string,
  url: string,
  column?: string
}

export interface IColumn {
  id: string,
  columnName: string,
  cards: ICard[]
}

export type State = IColumn[];

export interface AddCardActionPayload {
  columnId: string;
  newCard: ICard;
}

export interface MoveCardActionPayload {
  id: number | null;
  newColumn: string | undefined;
  column: string | undefined;
}

interface AddCardAction {
  type: ActionTypes.addCard;
  payload: AddCardActionPayload;
}

interface MoveCardAction {
  type: ActionTypes.moveCard;
  payload: MoveCardActionPayload;
}

export type Action = AddCardAction | MoveCardAction;