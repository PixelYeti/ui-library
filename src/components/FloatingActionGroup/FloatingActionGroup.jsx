import React from 'react';
import PropTypes from 'prop-types';

import style from './FloatingActionGroup.css';
import FloatingActionButton from '../FloatingActionButton';

function FloatingActionGroup(props) {
    return (
        <div className={style.container}>
            {props.children}
        </div>
    );
}

FloatingActionGroup.propTypes = {
    children: PropTypes.oneOfType([
        FloatingActionButton
    ]).isRequired
}

export default FloatingActionGroup;