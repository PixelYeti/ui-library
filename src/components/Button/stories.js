import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import Button from './Button';

storiesOf('Button')
  .add('with text', () => (
    <Button onClick={action('clicked')} colour="#42ce4f">Hello</Button>
  ));
