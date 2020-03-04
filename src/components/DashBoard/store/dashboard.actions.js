const tasks = [
    {
      name: 'task 1',
      status: 'backlog',
    },
    {
      name: 'task 2',
      status: 'backlog',
     },
     {
      name: 'task 3',
      status: 'backlog',
      },
      {
      name: 'task 4',
      status: 'in progress',
      },
      {
      name: 'task 5',
      status: 'in progress',
      },
     {
      name: 'task 6',
      status: 'in progress',
      },
      {
      name: 'task 7',
      status: 'done',
      },
     {
      name: 'task 8',
      status: 'done',
      },
     {
      name: 'task 9',
      status: 'done',
      },
      {
      name: 'task 10',
      status: 'done',
    }
  ];

export const FILL_STORE_OF_DATA = '[FILL_STORE_OF_DATA] fill store of starting data';
export const MOVE_TASK_FROM_BL = '[MOVE_TASK_FROM_BL] move one task from backlog to in progress column';
export const MOVE_TASK_BACK_TO_IP = '[MOVE_TASK_BACK_TO_IP] move one task back to in progress status';
export const MOVE_TASK_TO_DONE = '[MOVE_TASK_TO_DONE] move one task to done status';
export const MOVE_TASK_TO_BL = '[MOVE_TASK_TO_BL] move one task back to backlog status';
  

export const fillStoreOfData = () => {
    return dispatch => {
        const backlogTasks = tasks.filter((task) => task.status === 'backlog');
        const inProgressTasks = tasks.filter((task) => task.status === 'in progress');
        const doneTasks = tasks.filter((task) => task.status === 'done');
        dispatch({
            type: FILL_STORE_OF_DATA,
            payload: {
                backlogTasks,
                inProgressTasks,
                doneTasks
            }
        });
    }
}

export const moveFromBackLog = (name) => {
    return dispatch => {
        dispatch({
            type: MOVE_TASK_FROM_BL,
            payload: {
                changableTask: name
            }
        });
    }
}

export const moveTaskBackToInProgress = (name) => {
    return dispatch => {
        dispatch({
            type: MOVE_TASK_BACK_TO_IP,
            payload: {
                changableTask: name
            }
        });
    }
}

export const moveToDone = (name) => {
    return dispatch => {
        dispatch({
            type: MOVE_TASK_TO_DONE,
            payload: {
                changableTask: name
            }
        });
    }
}

export const backToBacklog = (name) => {
    return dispatch => {
        dispatch({
            type: MOVE_TASK_TO_BL,
            payload: {
                changableTask: name
            }
        });
    }
}