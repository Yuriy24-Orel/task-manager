import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fillStoreOfData as fillStoreOfDataAction } from './store/dashboard.actions';
import {dashboardSelector} from './store/dashboard.selectors';

import {BackLog} from './BackLog/BackLog';
import {InProgressTask} from './InProgressTask/InProgressTask';
import {DoneTask} from './DoneTask/DoneTask';

import './DashBoard.scss';

const DashBoardComponent = ({fillStoreOfData, backlogTasks, inProgressTasks, doneTasks}) => {
    useEffect(() => {
        fillStoreOfData();
    }, [fillStoreOfData])

    return (
        <>
            <div className='wrapper'>
                <h2>Backlog tasks</h2>
                {backlogTasks.map((task, index) => (
                    <BackLog name={task.name} key={`${index}-${task.name}`} />
                ))}
            </div>
            <div className='wrapper'>
                <h2>In progress tasks</h2>
                {inProgressTasks.map((task, index) => (
                    <InProgressTask name={task.name} key={`${index}-${task.name}`} />
                ))}
            </div>
            <div className='wrapper'>
                <h2>Done tasks</h2>
                {doneTasks.map((task, index) => (
                    <DoneTask name={task.name} key={`${index}-${task.name}`} />
                ))}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    backlogTasks: dashboardSelector.backlogTasks(state),
    inProgressTasks: dashboardSelector.inProgressTasks(state),
    doneTasks: dashboardSelector.doneTasks(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        fillStoreOfData: fillStoreOfDataAction
    },
    dispatch,
  );

  export const DashBoard = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DashBoardComponent);