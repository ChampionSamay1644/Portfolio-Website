import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => window.localStorage.clear());

test('renders hiring-focused introduction and grounded project links', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Engineering the boring parts away/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Open SmartNav on GitHub/i })).toHaveAttribute('href', expect.stringContaining('Smart-Wheelchair'));
  expect(screen.getByText(/60\+ documented career domains/i)).toBeInTheDocument();
});

test('resume links target the public resume and include a download control', () => {
  render(<App />);
  const downloadLinks = screen.getAllByRole('link', { name: /Download résumé/i });
  expect(downloadLinks.length).toBeGreaterThan(0);
  expect(downloadLinks[0]).toHaveAttribute('href', '/resume.pdf');
  expect(downloadLinks[0]).toHaveAttribute('download', 'Samay-Pandey-Resume.pdf');
});

test('theme control persists the selected theme', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Switch to/i });
  fireEvent.click(button);
  expect(window.localStorage.getItem('portfolio-theme')).toMatch(/light|dark/);
});

test('contact form reports missing and invalid fields', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /Prepare email/i }));
  expect(screen.getByRole('status')).toHaveTextContent('Please complete all fields.');
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Recruiter' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'not-an-email' } });
  fireEvent.change(screen.getByLabelText(/trying to solve/i), { target: { value: 'Backend role' } });
  fireEvent.click(screen.getByRole('button', { name: /Prepare email/i }));
  expect(screen.getByRole('status')).toHaveTextContent('Please enter a valid email address.');
});

test('engineering principles use a seamless visual duplicate without repeating accessible content', () => {
  render(<App />);
  const principles = screen.getByRole('region', { name: /Engineering principles/i });
  expect(principles.querySelector('.trust-track')).toBeInTheDocument();
  expect(principles.querySelectorAll('.trust-group')).toHaveLength(2);
  expect(principles.querySelectorAll('.trust-group[aria-hidden="true"]')).toHaveLength(1);
  expect(screen.getAllByText('Useful over flashy')).toHaveLength(2);
});
