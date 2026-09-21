import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio and project links', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /I build useful systems/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Open Smart Wheelchair on GitHub/i })).toHaveAttribute('href', expect.stringContaining('Smart-Wheelchair'));
});

test('theme control persists the selected theme', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Switch to/i });
  fireEvent.click(button);
  expect(window.localStorage.getItem('portfolio-theme')).toMatch(/light|dark/);
});

test('contact form reports missing fields', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /Prepare email/i }));
  expect(screen.getByRole('status')).toHaveTextContent('Please complete all fields.');
});
