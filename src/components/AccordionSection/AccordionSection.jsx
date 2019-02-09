import React from 'react';
import PropTypes from 'prop-types';

import { FaPlus, FaMinus } from 'react-icons/fa';

import style from './AccordionSection.css';

class AccordionSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: props.active || false,
		};
	}

	render() {
		let { panel, active } = style;
		let sectionClasses = panel;
		if (this.state.active) {
			sectionClasses += ' ' + active;
		}

		let {accordion, activeHeader} = style;
		let accordionClasses = accordion;
		if (this.state.active) {
			accordionClasses += ' ' + activeHeader;
		}

		return (
			<>
				<div
					className={accordionClasses}
					onClick={() => this.setState({ active: !this.state.active })}
					style={{
						backgroundColor: this.props.headerColour || '#eee'
					}}
				>
					<span className={style.title}>{this.props.title || ''}</span>
					<span className={style.icon}>
						{this.state.active ? <FaMinus /> : <FaPlus />}
					</span>
				</div>
				<div
					className={sectionClasses}
					style={{
						backgroundColor: this.props.panelColour || 'white',
					}}
				>
					{this.props.children}
				</div>
			</>
		);
	}
}

AccordionSection.propTypes = {
	title: PropTypes.string,
	active: PropTypes.bool,
	panelColour: PropTypes.string,
	headerColour: PropTypes.string
};

export default AccordionSection;
