import React from 'react';
import {act} from 'react-test-renderer';
import {render} from 'test/test-utils';
import {Text, View} from 'react-native';

import Container from './index';

afterEach(async () => {
  await act(async () => {});
});

describe('Design System - Container', () => {
  it('Should match snapshot', () => {
    const {toJSON} = render(<Container />);
    expect(toJSON()).toMatchSnapshot('DS_Container');
  });

  it('Should render children', () => {
    const childrenToRender = <Text>My Children Component</Text>;
    const containerWithChildren = <Container>{childrenToRender}</Container>;
    const {getByText} = render(containerWithChildren);
    const textComponent = getByText('My Children Component');
    expect(textComponent).toBeDefined();
  });

  it('Should render children with children', () => {
    const childrenToRender = <Text>My Children Component</Text>;
    const containerWithChildren = (
      <Container>
        <View>{childrenToRender}</View>
      </Container>
    );
    const {getByText} = render(containerWithChildren);
    const textComponent = getByText('My Children Component');
    expect(textComponent).toBeDefined();
  });
});
