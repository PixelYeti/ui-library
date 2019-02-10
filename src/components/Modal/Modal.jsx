import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './Modal.css';

export default class Modal extends Component {
	constructor(props) {
		super(props);

		this.node = React.createRef();
		this.checkClick = this.checkClick.bind(this);
	}

	componentWillMount() {
		document.addEventListener('mousedown', this.checkClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.checkClick, false);
	}

	checkClick(e) {
		if (!this.node.contains(e.target) && this.props.shown) {
			this.props.closeDialog();
		}
	}

	render() {
		let modalStyles = style.modal;
		if (this.props.shown) {
			modalStyles += ' ' + style.shown;
		}
		return (
			<div className={modalStyles}>
				<div className={style.modalContainer} ref={(c) => (this.node = c)}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	shown: PropTypes.bool.isRequired,
	closeDialog: PropTypes.func.isRequired,
};
