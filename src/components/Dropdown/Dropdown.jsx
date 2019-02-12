import React from 'react';
import PropTypes from 'prop-types';

import { FaSortDown } from 'react-icons/fa';

import lightStyle from './Dropdown.css';
import darkStyle from './Dropdown.dark.css';

let style;

export default class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedValue: props.defaultValue || undefined,
			showDropdown: false,
			dark: props.dark || false,
		};

		this.setSelected = this.setSelected.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.node = React.createRef();
	}

	componentWillMount() {
		document.addEventListener('mousedown', this.handleClick, false);
		style = this.state.dark ? darkStyle : lightStyle;
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClick, false);
	}

	handleClick(e) {
		if (this.node.contains(e.target)) {
			return;
		}
		this.setState({ showDropdown: false });
	}

	setSelected(value) {
		if (this.props.onChange) {
			this.props.onChange(value);
		}
		this.setState({ selectedValue: value, showDropdown: false });
	}

	render() {
		const { children, placeholder } = this.props;
		const { selectedValue, showDropdown } = this.state;

		let listClasses = style.valueList;
		let headerClasses = style.header;
		let focusStyles = {
			fontSize: this.props.fontSize || '12px',
			backgroundColor: this.state.dark ? '#333' : 'white',
		};
		if (showDropdown) {
			listClasses += ` ${style.activeList}`;
			focusStyles = {
				border: `2px solid ${this.props.highlightColour || '#3f89ff'}`,
				padding: '0 5px',
				fontSize: this.props.fontSize || '12px',
				backgroundColor: this.state.dark ? '#333' : 'white'
			};
		}

		let placeHolderElement;
		if (selectedValue) {
			placeHolderElement = <span>{selectedValue}</span>;
		} else if (placeholder) {
			placeHolderElement = <span className={placeholder}>{placeholder}</span>;
		} else {
			placeHolderElement = <span/>;
		}

		return (
			<div
				className={style.container}
				style={
					{
						width: this.props.width || '150px',
						color: this.state.dark ? 'white' : 'black',
					}
				}
				ref={c => this.node = c}
			>
				<div
					className={style.header}
					onClick={() => this.setState({ showDropdown: !showDropdown })}
					style={focusStyles}>
					{placeHolderElement}
					<span className={style.downArrow}>
            <FaSortDown/>
          </span>
				</div>
				<ul className={listClasses}
						style={{ fontSize: this.props.fontSize || '12px', backgroundColor: this.state.dark ? '#333' : 'white' }}>
					{React.Children.map(children, (dropDownItem, key) => {
						let active = false;
						if (dropDownItem.props.name === selectedValue) {
							active = true;
						}
						return React.cloneElement(dropDownItem, {
							key,
							active,
							onClick: this.setSelected,
						});
					})}
				</ul>
			</div>
		);
	}
}

Dropdown.propTypes = {
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	dark: PropTypes.bool,
};
