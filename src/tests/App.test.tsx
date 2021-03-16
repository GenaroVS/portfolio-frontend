import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders title text', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Genaro V\. Salinas/i);
  expect(linkElement[0]).toBeInTheDocument();
});
