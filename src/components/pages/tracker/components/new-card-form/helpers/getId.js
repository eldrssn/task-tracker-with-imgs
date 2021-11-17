import { getUniqId } from '../../../../../../utils/helpers/getUniqId';
import { MAX_ID, MIN_ID } from '../constants';

export const getId = (tracker) => {
  return getUniqId(tracker, MIN_ID, MAX_ID);
};
