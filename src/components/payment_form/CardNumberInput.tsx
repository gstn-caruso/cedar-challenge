import React, { ChangeEventHandler }     from 'react';
import { FormInput }                     from './form_input/FormInput';
import { InputMask }                     from './form_input/InputMask';
import { PaymentFormContentInformation } from './PaymentInformationFormSection';

interface CardNumberInputProps {
  firstRender: boolean,
  formContent: PaymentFormContentInformation,
  onChange: ChangeEventHandler,
  isValid: boolean,
}

export function CardNumberInput(props: CardNumberInputProps) {
  return <div className="CardNumberInput">
    <FormInput isValid={ props.isValid } name={ 'cardNumber' } type={ 'text' } title={ 'Card number' } value={ props.formContent.cardNumber }
               onChange={ props.onChange }
               isMissing={ !props.firstRender && !props.formContent.cardNumber } mask={ InputMask.cardNumber }/>
  </div>;
}
