import { render, screen } from '@testing-library/react';
import React              from 'react';
import { FormInput }      from '../components/payment_form/form_input/FormInput';

test('FormInput renders error when isMissing', () => {
  render(<FormInput title={ 'Test input' } type={ 'text' } isMissing={ true } onChange={ () => {
  } } name={ 'Test' } mask={ '' }/>);
  expect(screen.getByText('This field is required.')).toBeInTheDocument();
})

test('FormInput do not render error when isMissing is false', () => {
  render(<FormInput title={ 'Test input' } type={ 'text' } isMissing={ false } onChange={ () => {
  } } name={ 'Test' } mask={ '' }/>);
  expect(screen.queryByText('This field is required.')).not.toBeInTheDocument();
})

test('FormInput renders check when content is valid', () => {
  render(<FormInput title={ 'Test input' } type={ 'text' } isMissing={ false } onChange={ () => {
  } } name={ 'Test' } mask={ '' } isValid={true} />);
  expect(screen.getByTestId('check-icon')).toBeInTheDocument();
})
