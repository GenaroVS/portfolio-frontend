import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

test('renders title text', () => {
  render(<Home profilePhoto='adf' />);
  const linkElement = screen.getAllByText(/Genaro V\. Salinas/i);
  expect(linkElement[0]).toBeInTheDocument();
});
