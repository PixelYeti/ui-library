import React from 'react';
import PropTypes from 'prop-types';

import style from './Accordion.css';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active || false
        }
    }

    render() {
        return (
            <></>
        )
    }
}

export default Accordion;