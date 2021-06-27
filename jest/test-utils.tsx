import React from 'react';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {createStore, Reducer} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import * as Theme from '../src/theme';

interface ReduxProviders {
  state: any;
  reducer: Reducer<any, any>;
}

interface RenderProviders {
  children: React.ReactElement;
  options?: ReduxProviders;
}

const ReduxProvider = ({children, options}: any) => {
  if (!options) {
    return <>{children}</>;
  }

  const store = createStore(options.reducer, options.state);
  return <Provider store={store}>{children}</Provider>;
};

const AllTheProviders: React.FC<RenderProviders> = ({children, options}) => {
  return (
    <ThemeProvider theme={Theme.DarkTheme}>
      <ReduxProvider options={options}>{children}</ReduxProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: ReduxProviders) => {
  return render(<AllTheProviders options={options}>{ui}</AllTheProviders>);
};

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
