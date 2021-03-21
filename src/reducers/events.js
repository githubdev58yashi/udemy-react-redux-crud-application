import _ from 'lodash';
import { CREATE_EVENTS ,READ_EVENTS, READ_EVENT, UPDATE_EVENT,  DELETE_EVENTS } from '../actions';

export default (events = {}, action) => {
  switch(action.type) {
    case CREATE_EVENTS:
    case READ_EVENT:
    case UPDATE_EVENT:
      console.log(action.response.data);
      // event情報を更新
      const data = action.response.data;

      return {...events, [data.id]: data};
    case READ_EVENTS:
      // console.log(action.response.data);
      // console.log(_.mapKeys(action.response.data, 'id'));
      return _.mapKeys(action.response.data, 'id');

    case DELETE_EVENTS:
      delete events[action.id];
      return {...events};
    default:
      return events;
  }
}