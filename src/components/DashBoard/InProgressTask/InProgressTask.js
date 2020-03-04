import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'semantic-ui-react';

import { moveToDone as moveToDoneAction, backToBacklog as backToBacklogAction } from '../store/dashboard.actions';

import './InProgressTask.scss';

const InProgressTaskComponent = ({name, moveToDone, backToBacklog}) => {

    const moveToDoneTask = () => {
        return moveToDone(name);
    }

    const backToBacklogTask = () => {
        return backToBacklog(name);
    }

    return(
        <div className='inprogress-task'>
            <div className='content-wrapper'>
                <h3>{name}</h3>
                <div className='button-wrapper'>
                    <Button onClick={backToBacklogTask} secondary content='Back' icon='left arrow' labelPosition='left' />
                    <Button onClick={moveToDoneTask} primary content='Move' icon='right arrow' labelPosition='right' />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        moveToDone: moveToDoneAction,
         backToBacklog: backToBacklogAction
    },
    dispatch,
  );

export const InProgressTask = connect(
    null,
    mapDispatchToProps,
  )(InProgressTaskComponent);