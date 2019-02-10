import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import style from './TextField.css';

const StyledInput = styled.input`
		font-size: 16px;
    padding: 12px 15px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #eee;
    border-radius: 8px;
    outline: none;

    transition: border .3s ease-in-out;
    :focus {
        border: 2px solid var(--highlight-color);
    }
    ::placeholder {
    		color: rgb(199, 199, 199);
    }
`;

class TextField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errorMsg: undefined,
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		if (this.props.validate) {
			if (!this.props.validate(e.target.value)) {
				this.setState({ errorMsg: 'Invalid format' });
				return;
			}
			this.setState({ errorMsg: undefined });
		}
	}

	render() {
		return (
			<div className={style.container} style={{ width: this.props.width || '150px' }}>
				<label style={{ color: this.props.labelColour || 'black' }}>
					{this.props.label || undefined}
				</label>
				<StyledInput
					tabIndex={this.props.tabIndex || 0}
					style={
						{
							['--highlight-color']: this.props.highlightColour || '#3f89ff',
						}
					}
					type={this.props.type}
					placeholder={this.props.placeholder || undefined}
					onChange={this.onChange}
				/>
			</div>
		);
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
	errorColour: PropTypes.string,
};

export default TextField;
