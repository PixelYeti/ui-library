import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import style from './TextField.css';

const Input = styled.input`
    :focus {
        border: 2px solid var(--highlight-color);
    }
`

class TextField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.container} style={{width: this.props.width || "150px"}}>
                <label style={{color: this.props.labelColour || "black"}}>{this.props.label || undefined}</label>
                <Input className={style.input}
                    tabIndex={this.props.tabIndex || 0}
                    style={{['--highlight-color']: this.props.highlightColour || "#3f89ff"}}
                    type={this.props.type}
                    placeholder={this.props.placeholder || undefined}/>
            </div>
        )
    }
}

TextField.propTypes = {
    width: PropTypes.string,
    label: PropTypes.string,
    labelColour: PropTypes.string,
    validate: PropTypes.func,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    highlightColour: PropTypes.string,
    tabIndex: PropTypes.number
}

export default TextField;