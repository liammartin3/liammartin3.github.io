import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the site heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /liam martin/i })).toBeInTheDocument();
});
