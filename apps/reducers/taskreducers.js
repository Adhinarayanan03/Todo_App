// reducers/taskReducer.js
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from '../actions/types';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      case EDIT_TASK:
        const updatedTasks = state?.tasks?.map((task) =>
          task.id === action?.payload?.id
            ? { ...task, title: action.payload.title, detail: action.payload.detail }
            : task
        );
        console.log(state.tasks,'jhewbcxecbejhcbeqwhjb')
        console.log(action.payload.id,'id')
        console.log(action.payload.title,'title')
        console.log(action.payload.value,'value')



        return {
          tasks: [...updatedTasks],
        };
        
      case DELETE_TASK:
        const newState = state?.tasks?.filter((task) => task.id !== action?.payload?.id)
        return {
          tasks: [...newState],
        };
    default:
      return state;
  }
};  

export default taskReducer;
