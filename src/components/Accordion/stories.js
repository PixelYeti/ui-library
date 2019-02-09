import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Accordion from './Accordion';

storiesOf('Accordion')
    .add('basic accordion', () => (
        <Accordion title="Test title">
            <p>Test content</p>
        </Accordion>
    ))