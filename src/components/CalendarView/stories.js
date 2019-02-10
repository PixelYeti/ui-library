import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import CalendarView from './CalendarView';

storiesOf('CalendarView')
	.add('test', () => (
		<CalendarView btnLabel={"Open Calendar"}/>
	));
