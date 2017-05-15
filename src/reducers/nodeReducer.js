import * as types from '../actions/actionTypes';

export default function nodeReducer(state = [], action) {
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
