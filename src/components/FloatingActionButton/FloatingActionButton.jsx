import React from 'react';
import PropTypes from 'prop-types';

import style from './FloatingActionButton.css';

function FloatingActionButton(props) {
  return (
    <button
      className={style.fab}
      style={
				{
				  backgroundColor: props.colour || '#42f480',
				}
			}
      onClick={props.onClick}
      tooltip={props.tooltip || undefined}
    >
      {props.children}
    </button>
  );
}

FloatingActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  colour: PropTypes.string,
  tooltip: PropTypes.string,
};

export default FloatingActionButton;
