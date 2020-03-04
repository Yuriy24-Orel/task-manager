export const dashboardSelector = {
    backlogTasks(state) {
        return state.dashboard.backlogTasks;
    },
    inProgressTasks(state) {
        return state.dashboard.inProgressTasks;
    },
    doneTasks(state) {
        return state.dashboard.doneTasks;
    },
}