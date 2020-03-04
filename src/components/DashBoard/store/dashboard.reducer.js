import { FILL_STORE_OF_DATA, MOVE_TASK_FROM_BL, MOVE_TASK_BACK_TO_IP, MOVE_TASK_TO_DONE, MOVE_TASK_TO_BL } from './dashboard.actions';

const INITIAL_STATE = {
    backlogTasks: [],
    inProgressTasks: [],
    doneTasks: [],
};
  
export const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILL_STORE_OF_DATA: 
            const {backlogTasks, inProgressTasks, doneTasks} = action.payload;
            return {
                ...state,
                backlogTasks,
                inProgressTasks,
                doneTasks
            }
        case MOVE_TASK_FROM_BL:
            const oldBacklogElem = state.backlogTasks.find((task) => task.name === action.payload.changableTask);
            oldBacklogElem['status'] = 'in progress';
            const newBacklog = state.backlogTasks.filter((task) => task.name !== action.payload.changableTask);
            const newInProgressArray = [...state.inProgressTasks, oldBacklogElem];
            return {
                ...state,
                backlogTasks: newBacklog,
                inProgressTasks: newInProgressArray
            }
        case MOVE_TASK_BACK_TO_IP:
            const changableTask = state.doneTasks.find((task) => task.name === action.payload.changableTask);
            changableTask['status'] = 'in progress';
            const newDoneTasksArr = state.doneTasks.filter((task) => task.name !== action.payload.changableTask);
            const newInProgressArr = [...state.inProgressTasks, changableTask];
            return {
                ...state,
                inProgressTasks: newInProgressArr,
                doneTasks: newDoneTasksArr
            }
        case MOVE_TASK_TO_DONE:{
            const changableTask = state.inProgressTasks.find((task) => task.name === action.payload.changableTask);
            changableTask['status'] = 'done';
            const newInProgressArr = state.inProgressTasks.filter((task) => task.name !== action.payload.changableTask);
            const newDoneTasksArray = [...state.doneTasks, changableTask];
            return {
                ...state,
                inProgressTasks: newInProgressArr,
                doneTasks: newDoneTasksArray
            }
        }
        case MOVE_TASK_TO_BL:{
            const changableTask = state.inProgressTasks.find((task) => task.name === action.payload.changableTask);
            changableTask['status'] = 'backlog';
            const newInProgressArr = state.inProgressTasks.filter((task) => task.name !== action.payload.changableTask);
            const newBackLogArr = [...state.backlogTasks, changableTask];
            return {
                ...state,
                inProgressTasks: newInProgressArr,
                backlogTasks: newBackLogArr
            }
        }
        default:
        return state;
    }
};