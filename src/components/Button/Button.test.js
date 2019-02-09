import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

test('Object created', () => {
    const component = renderer.create(
        <Button onClick={() => console.log(test)} colour="#42ce4f">Hello</Button>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})