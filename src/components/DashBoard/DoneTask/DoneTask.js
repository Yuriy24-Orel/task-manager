import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'semantic-ui-react'

import { moveTaskBackToInProgress as moveTaskBackToInProgressAction } from '../store/dashboard.actions';

import './DoneTask.scss'

const DoneTaskComponent = ({moveTaskBackToInProgress, name}) => {

    const backToInProgress = () => {
        return moveTaskBackToInProgress(name)
    }

    return (
        <div className='done-task'>
            <div className='content-wrapper'>
                <h3>{name}</h3>
                <Button onClick={backToInProgress} secondary content='Back' icon='left arrow' labelPosition='left' />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        moveTaskBackToInProgress: moveTaskBackToInProgressAction
    },
    dispatch,
  );

export const DoneTask = connect(
    null,
    mapDispatchToProps,
  )(DoneTaskComponent);