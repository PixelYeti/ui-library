import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextArea from './TextArea';

storiesOf('TextArea')
	.add('with text area', () => (
		<TextArea defaultValue="Test" placeholder="Some text"/>
	));
