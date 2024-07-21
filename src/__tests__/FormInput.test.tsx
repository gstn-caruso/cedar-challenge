import { render, screen }    from '@testing-library/react';
import React         from 'react';
import { FormInput } from '../components/payment_form/form_input/FormInput';

test('FormInput renders error when isMissing', () => {
  render(<FormInput title={ 'Test input' } type={ 'text' } isMissing={ true } />);
  expect(screen.getByText('This field is required.')).toBeInTheDocument();
})
