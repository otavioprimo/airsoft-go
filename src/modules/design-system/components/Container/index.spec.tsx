import React from 'react';
import {act} from 'react-test-renderer';
import {render} from 'test/test-utils';
import {Text, View} from 'react-native';

import Container, {TEST_ID_SAFE_AREA, TEST_ID_SCROLl_VIEW} from './index';

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

  it('SafeArea should exists', () => {
    const {getByTestId} = render(<Container />);
    expect(getByTestId(TEST_ID_SAFE_AREA)).toBeDefined();
  });

  it('ScrollView should exists', () => {
    const {getByTestId} = render(<Container />);
    expect(getByTestId(TEST_ID_SCROLl_VIEW)).toBeDefined();
  });
});
