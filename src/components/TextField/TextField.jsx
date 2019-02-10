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

        this.state = {
            errorMsg: undefined
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        if (this.props.validate) {
            if (!this.props.validate(e.target.value)) {
                this.setState({errorMsg: "Invalid format"});
                return;
            }
            this.setState({errorMsg: undefined});
        }
    }

    render() {
        return (
            <div className={style.container} style={{width: this.props.width || "150px"}}>
                <label style={{color: this.props.labelColour || "black"}}>{this.props.label || undefined}</label>
                <Input className={style.input}
                    tabIndex={this.props.tabIndex || 0}
                    style={{['--highlight-color']: this.props.highlightColour || "#3f89ff"}}
                    type={this.props.type}
                    placeholder={this.props.placeholder || undefined} onChange={this.onChange}/>
                <span className={style.errorMsg} style={{color: this.props.errorColour || '#c20101'}}>{this.state.errorMsg}</span>
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
    tabIndex: PropTypes.number,
    errorColour: PropTypes.string
}

export default TextField;