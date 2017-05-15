import * as types from './actionTypes';

export function nodeCreate(node) {
  return {type: types.NODE_CREATE, node};
}

export function nodeUpdate(node) {
  return {type: types.NODE_UPDATE, node};
}
