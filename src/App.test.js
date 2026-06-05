import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Mock the LoadingScreen to avoid timing issues
jest.mock('./components/LoadingScreen', () => {
  return function LoadingScreen({ onLoadingComplete }) {
    React.useEffect(() => {
      onLoadingComplete();
    }, [onLoadingComplete]);
    
    return React.createElement('div', null, 'Loading...');
  };
});

test('renders portfolio application', () => {
  const { container } = render(React.createElement(App));
  expect(container).toBeInTheDocument();
});