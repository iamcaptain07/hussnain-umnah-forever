import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
  test('renders the header with birthday message', () => {
    render(<App />);
    const headerElement = screen.getByText(/Happy Birthday Dr. Umnah 💖/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the footer with signature', () => {
    render(<App />);
    const footerElement = screen.getByText(/From Hussnain 💻/i);
    expect(footerElement).toBeInTheDocument();
  });

  test('renders the greeting card', () => {
    render(<App />);
    const greetingCardElement = screen.getByRole('heading', { name: /birthday wishes/i });
    expect(greetingCardElement).toBeInTheDocument();
  });
});