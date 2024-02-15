import { 
  ADD_TASK, 
  EDIT_TASK,
  DELETE_TASK, 
} from './types';

export const addTask = (id, title, detail) => ({
  type: ADD_TASK,
  payload: {id, title, detail},
});

export const editTask = (id, title, detail) => ({
  type: EDIT_TASK,
  payload: {id, title, detail},
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: {id},
});