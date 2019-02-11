import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { FaCalendar } from 'react-icons/fa';

import style from './CalendarView.css';

const StyledInput = styled.input`
		font-size: 16px;
    padding: 12px 15px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #eee;
    border-right: none;
    border-radius: 8px 0 0 8px;
    outline: none;

    transition: border .3s ease-in-out;
    :focus {
        border: 2px solid var(--highlight-color);
        border-right: none;
    }
    ::placeholder {
    		color: rgb(199, 199, 199);
    }
`;

const StyledCalendar = styled(FaCalendar)`
		height: 42px;
		margin: 8px 0;
		padding: 0 8px;
		border-radius: 0 8px 8px 0;
		border: 2px solid #eee;
		transition: border .3s ease-in-out, background .3s ease-in-out;
		
		${StyledInput}:focus ~ & {
				background: var(--highlight-color);
				border: 2px solid var(--highlight-color);
		}
`;

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
	'July', 'August', 'September', 'October', 'November', 'December',
];

class CalendarView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			shown: false,
			selectedMonth: new Date(),
			selectedDate: new Date(),
		};

		this.handleClick = this.handleClick.bind(this);
		this.changeMonth = this.changeMonth.bind(this);
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
		this.setState({ shown: false });
	}

	changeMonth(value) {
		let { selectedMonth } = this.state;
		selectedMonth.setMonth(selectedMonth.getMonth() + value);
		this.setState({ selectedMonth: selectedMonth });
	}

	changeSelectedDate(date) {
		this.setState({ selectedDate: date });
		if (this.props.onChange) {
			this.props.onChange(date);
		}
	}

	render() {
		let { selectedMonth, selectedDate } = this.state;

		let days = [];
		let currentMonthFirst = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), 1);
		let currentMonthLast = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0);
		for (let i = 0; i < currentMonthFirst.getDay(); i++) {
			days.push(<span> </span>);
		}
		for (let day = 1; day <= currentMonthLast.getDate(); day++) {
			let currentDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), day);
			let styles = style.selectable;
			if (currentDate.toDateString() === selectedDate.toDateString()) {
				styles += ' ' + style.selected;
			}
			days.push(<span className={styles}
											onClick={() => this.changeSelectedDate(currentDate)}>{day}</span>);
		}
		for (let i = currentMonthLast.getDay(); i < 7; i++) {
			days.push(<span> </span>);
		}

		return (
			<>
				<div className={style.inputContainer}>
					<StyledInput
						type={'text'}
						style={
							{
								['--highlight-color']: this.props.highlightColour || '#3f89ff',
							}
						}
						onClick={() => this.setState({ shown: true })}
						value={selectedDate.toISOString().slice(0, 10)}
					/>
					<StyledCalendar
						style={
							{
								['--highlight-color']: this.props.highlightColour || '#3f89ff',
							}
						}/>
				</div>
				<div className={style.calContainer} style={{ visibility: this.state.shown ? 'visible' : 'hidden' }}
						 ref={c => this.node = c}>
					<div className={style.header}
							 style={
								 {
									 backgroundColor: this.props.calendarColour || '#42f480',
									 color: this.props.calendarTextColour || 'white',
								 }
							 }>
						<span className={style.backMonth} onClick={() => this.changeMonth(-1)}>&lt;</span>
						<div className={style.monthDisplay}>
							<span>{monthNames[this.state.selectedMonth.getMonth()]}</span>
							<span>{this.state.selectedMonth.getFullYear()}</span>
						</div>
						<span className={style.forwardMonth} onClick={() => this.changeMonth(1)}>&gt;</span>
					</div>
					<div className={style.calBody}>
						<div className={style.dayDisplay}>
							<span>Sun</span>
							<span>Mon</span>
							<span>Tue</span>
							<span>Wed</span>
							<span>Thu</span>
							<span>Fri</span>
							<span>Sat</span>
						</div>
						<div className={style.dates}>
							{days}
						</div>
					</div>
				</div>
			</>
		);
	}
}

CalendarView.propTypes = {
	calendarColour: PropTypes.string,
	calendarTextColour: PropTypes.string,
	highlightColour: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

export default CalendarView;
