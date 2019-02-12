import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

storiesOf('Dropdown')
  .add('with one item', () => (
    <Dropdown placeholder="test" onChange={action('changed')} dark>
      <DropdownItem name="Test" value={0} />
      <DropdownItem name="Hello" value={0} />
    </Dropdown>
  ));
