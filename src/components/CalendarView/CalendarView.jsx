import React from 'react';
import PropTypes from 'prop-types';

import style from './CalendarView.css';

class CalendarView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			shown: false,
		};

		this.handleClick = this.handleClick.bind(this);
		this.node = React.createRef();
	}

	componentWillMount() {
		document.addEventListener('mousedown', this.handleClick, false);
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

	render() {
		return (
			<>
				<span className={style.btn}
							style={
								{
									backgroundColor: this.props.btnColour || '#42f480',
									color: this.props.btnTextColour || 'white',
								}
							}
							onClick={() => this.setState({ shown: true })}
				>
					{this.props.btnLabel}
				</span>
				<div className={style.calContainer} style={{ visibility: this.state.shown ? 'visible' : 'hidden' }}
						 ref={c => this.node = c}>
					<div className={style.header}
							 style={
								 {
									 backgroundColor: this.props.calendarColour || '#42f480',
									 color: this.props.calendarTextColour || 'white',
								 }
							 }>
						<span className={style.backMonth}>&lt;</span>
						<div className={style.monthDisplay}>
							<span>August</span>
							<span>2019</span>
						</div>
						<span className={style.forwardMonth}>&gt;</span>
					</div>
				</div>
			</>
		);
	}
}

CalendarView.propTypes = {
	btnLabel: PropTypes.string.isRequired,
	btnColour: PropTypes.string,
	btnTextColour: PropTypes.string,
	calendarColour: PropTypes.string,
	calendarTextColour: PropTypes.string,
};

export default CalendarView;
