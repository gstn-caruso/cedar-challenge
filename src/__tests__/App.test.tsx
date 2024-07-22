import { fireEvent, render, screen } from '@testing-library/react';
import React                         from 'react';
import App                           from '../App';

test('it renders welcome message', () => {
  render(<App/>);

  expectScreenContainsElementWithText('Hi, Taylor');
});

test('it renders Payment information form after clicking pay button', () => {
  render(<App/>);

  clickButtonWithText('Pay total')

  const paymentForm = screen.getByTestId('payment-form');
  expect(paymentForm).toBeInTheDocument();
})

test('it renders thank you page after submit valid information', () => {
  render(<App/>);

  clickButtonWithText('Pay total')

  fillInput('cardNumber', '4242424242424242');
  fillInput('expires', '12/24');
  fillInput('cvv', '123');
  fillInput('holderName', 'Test User');
  fillInput('zip', '123');

  clickButtonWithText('Continue');

  expectScreenContainsElementWithText('Card ending in ••••4242');

  clickButtonWithRegex(/Pay \$600.00/i);

  expectScreenContainsElementWithText('Thank you for your payment!');
})

function clickButtonWithRegex(regex: RegExp) {
  const continueButton = screen.getByText(regex);
  fireEvent.click(continueButton);
}

function clickButtonWithText(buttonText: string) {
  clickButtonWithRegex(new RegExp(buttonText));
}

function fillInput(inputTestId: string, value: string) {
  const cardNumberField = screen.getByTestId(inputTestId);
  fireEvent.change(cardNumberField, { target: { value: value } });
}

function expectScreenContainsElementWithText(expectedText: string) {
  const reviewAndPay = screen.getByText(expectedText);
  expect(reviewAndPay).toBeInTheDocument();
}
