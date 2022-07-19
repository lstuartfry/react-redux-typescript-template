import { render, screen } from '@testing-library/react';
import App from './app';

test('renders learn react link', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to my react-redux-typescript template/i);
  expect(welcomeElement).toBeInTheDocument();
});
