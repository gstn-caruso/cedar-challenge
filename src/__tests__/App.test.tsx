import { fireEvent, render, screen } from '@testing-library/react';
import React                         from 'react';
import App                           from '../App';

test('it renders welcome message', () => {
  render(<App/>);
  const welcomeMessage = screen.getByText(/Hi, Taylor/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('it renders Payment information form after clicking pay button', () => {
  render(<App/>);
  const payButton = screen.getByText(/Pay total/i);
  fireEvent.click(payButton);
  const paymentForm = screen.getByTestId('payment-form');
  expect(paymentForm).toBeInTheDocument();
})

test('it renders thank you page after submit valid information', () => {
  render(<App/>);

  const payButton = screen.getByText(/Pay total/i);
  fireEvent.click(payButton);

  fillInput('cardNumber', '4242424242424242');
  fillInput('expires', '12/24');
  fillInput('cvv', '123');

  const cardHolderName = screen.getByTestId('holderName');
  fireEvent.change(cardHolderName, { target: { value: '123' } });

  const zipCode = screen.getByTestId('zip');
  fireEvent.change(zipCode, { target: { value: '123' } });

  const continueButton = screen.getByText(/Continue/i);
  fireEvent.click(continueButton);

  const reviewAndPay = screen.getByText('Card ending in ••••4242');
  expect(reviewAndPay).toBeInTheDocument();

  const submitButton = screen.getByText(/Pay \$600.00/i);
  fireEvent.click(submitButton);

  expect(screen.getByText('Thank you for your payment!')).toBeInTheDocument();
})

function fillInput(inputTestId: string, value: string) {
  const cardNumberField = screen.getByTestId(inputTestId);
  fireEvent.change(cardNumberField, { target: { value: value } });
}
