import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DropdownItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: props.active || false
        }

        this.clickValue = this.clickValue.bind(this);
    }

    clickValue() {
        this.props.onClick(this.props.name);
    }

    render() {
        return (
            <li value={this.props.value} onClick={this.clickValue}>{this.props.name}</li>
        );
    }
}

DropdownItem.propTypes = {
    active: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}