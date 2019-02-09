import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AccordionSection from './AccordionSection';

storiesOf('AccordionSection')
    .add('section with title', () => (
        <AccordionSection title="Test title">
            <p>Accordion section text goes here</p>
            <p>Accordion section text goes here</p>
            <p>Accordion section text goes here</p>
        </AccordionSection>
    ));