import React from 'react';
import PropTypes from 'prop-types';

import style from './Button.css';

function Button(props) {
  return (
    <button type="button" className={style.button} style={{ backgroundColor: props.colour }} {...props}>{props.children}</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  colour: PropTypes.string.isRequired,
};

export default Button;
