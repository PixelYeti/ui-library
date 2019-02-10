import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
// Import our component from this folder
import TextField from './TextField';

storiesOf('TextField')
	.add('with text', () => (
		<>
			<TextField type="url" placeholder="Placeholder" label="test" validate={() => false}/>
		</>
	));
