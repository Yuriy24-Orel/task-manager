import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'semantic-ui-react'

import { moveFromBackLog as moveFromBackLogAction } from '../store/dashboard.actions';

import './BackLog.scss';

const BackLogComponent = ({moveFromBackLog, name}) => {

    const moveToProgress = () => {
        return moveFromBackLog(name);
    }

    return (
        <div className='backlog-task'>
            <div className='content-wrapper'>
                <h3>{name}</h3>
                <Button primary onClick={moveToProgress} content='Move' icon='right arrow' labelPosition='right' />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        moveFromBackLog: moveFromBackLogAction
    },
    dispatch,
  );

export const BackLog = connect(
    null,
    mapDispatchToProps,
  )(BackLogComponent);