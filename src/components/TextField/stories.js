import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import TextField from './TextField';

storiesOf('TextField')
  .add('with text', () => (
    <>
        <TextField type="url" placeholder="Placeholder" label="test" validate={() => false}/>
        <TextField type="text" placeholder="Placeholder" label="test1" highlightColour="red"/>
    </>
  ));
