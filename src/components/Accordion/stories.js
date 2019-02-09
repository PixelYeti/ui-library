import React from 'react';

import { storiesOf } from '@storybook/react';

import Accordion from './Accordion';

storiesOf('Accordion')
  .add('section with title', () => (
    <Accordion title="Test title">
      <p>Accordion section text goes here</p>
      <p>Accordion section text goes here</p>
      <p>Accordion section text goes here</p>
    </Accordion>
  ));
