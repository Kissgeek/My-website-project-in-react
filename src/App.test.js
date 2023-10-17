import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the correct text', () => {
  render(<App />);
  const textElement = screen.getByText(/your text here/i);
  expect(textElement).toBeInTheDocument();
});
