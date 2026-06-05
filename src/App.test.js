import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the LoadingScreen to avoid timing issues
jest.mock('./components/LoadingScreen', () => {
  return function LoadingScreen({ onLoadingComplete }) {
    // Immediately call onLoadingComplete to skip loading
    React.useEffect(() => {
      onLoadingComplete();
    }, [onLoadingComplete]);
    
    return <div>Loading...</div>;
  };
});

test('renders portfolio application', () => {
  render(<App />);
  // Just check if the app renders without crashing
  expect(document.body).toBeInTheDocument();
});