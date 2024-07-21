import { fireEvent, render, screen } from '@testing-library/react';
import React                         from 'react';
import App                from '../App';

test('it renders welcome message', () => {
  render(<App/>);
  const welcomeMessage = screen.getByText(/Hi, Taylor/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('it renders Payment information form after clicking pay button', () => {
  render(<App />);
  const payButton = screen.getByText(/Pay total/i);
  fireEvent.click(payButton);
  const paymentForm = screen.getByTestId('payment-form');
  expect(paymentForm).toBeInTheDocument();
})
