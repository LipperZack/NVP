import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function nodeReducer(state = initialState.nodes, action) {
  switch (action.type) {
    case types.NODE_CREATE:
      return [...state,
        Object.assign({}, action.node)
      ];

    case types.NODE_UPDATE:
      return [
        ...state.filter(node => node.id !== action.node.id),
        Object.assign({}, action.node)
      ];

    default:
      return state;
  }
}
