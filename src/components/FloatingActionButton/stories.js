import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FloatingActionButton from './FloatingActionButton';

storiesOf('FloatingActionButton')
  .add('with text', () => (
    <FloatingActionButton onClick={action('clicked')}>T</FloatingActionButton>
  ))
  .add('with different colour', () => (
    <FloatingActionButton colour="red" onClick={action('clicked')}>&times;</FloatingActionButton>
  ));
