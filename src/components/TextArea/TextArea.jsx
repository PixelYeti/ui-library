import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import style from './TextArea.css';

const StyledTextArea = styled.textarea`
    :focus {
        border: 2px solid var(--highlight-color);
    }
`;

function TextArea(props) {
	return (
		<div className={style.container}>
			<label>{props.label || undefined}</label>
			<StyledTextArea className={style.input}
											style={
												{
													fontFamily: props.fontFamily || 'monospace',
													['--highlight-color']: props.highlightColour || '#3f89ff',
												}
											}
											rows={props.rows || undefined}
											cols={props.columns || undefined}
											placeholder={props.placeholder || undefined}
			>
				{props.defaultValue || undefined}
			</StyledTextArea>
		</div>
	);
}

TextArea.propTypes = {
	label: PropTypes.string,
	rows: PropTypes.number,
	columns: PropTypes.number,
	defaultValue: PropTypes.string,
	placeholder: PropTypes.string,
	fontFamily: PropTypes.string,
	highlightColour: PropTypes.string,
	validate: PropTypes.func,
};

export default TextArea;
