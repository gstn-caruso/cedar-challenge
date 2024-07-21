import { render, screen } from '@testing-library/react';
import React              from 'react';
import App                from '../App';

test('it renders welcome message', () => {
  render(<App/>);
  const welcomeMessage = screen.getByText(/Hi, Taylor/i);
  expect(welcomeMessage).toBeInTheDocument();
});
