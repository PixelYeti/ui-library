import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FloatingActionGroup from './FloatingActionGroup';
import FloatingActionButton from '../FloatingActionButton';

storiesOf('FloatingActionGroup')
  .add('one button', () => (
    <FloatingActionGroup>
      <FloatingActionButton onClick={action('clicked')}>1</FloatingActionButton>
    </FloatingActionGroup>
  )).add('two buttons', () => (
    <FloatingActionGroup>
      <FloatingActionButton onClick={action('clicked 1')} tooltip="Example tooltip">1</FloatingActionButton>
      <FloatingActionButton onClick={action('clicked 2')} colour="red">2</FloatingActionButton>
    </FloatingActionGroup>
  ));
