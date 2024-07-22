import { FormInput }                     from './form_input/FormInput';
import { InputMask }                     from './form_input/InputMask';
import { PaymentFormContentInformation } from './PaymentInformationFormSection';

export function CardNumberInput(props: { formContent: PaymentFormContentInformation, onChange: React.ChangeEventHandler, firstRender: boolean }) {
  return <div className="CardNumberInput">
    <FormInput name={ 'cardNumber' } type={ 'text' } title={ 'Card number' } value={ props.formContent.cardNumber } onChange={ props.onChange }
               isMissing={ !props.firstRender && !props.formContent.cardNumber } mask={ InputMask.cardNumber }/>
  </div>;
}
