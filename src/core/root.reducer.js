import { combineReducers } from 'redux';
import { dashboardReducer } from '../components/DashBoard/store/dashboard.reducer';

export const rootReducer = combineReducers({
    dashboard: dashboardReducer
});