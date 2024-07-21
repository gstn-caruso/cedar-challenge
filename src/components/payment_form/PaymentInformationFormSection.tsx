import { FormInput }            from './form_input/FormInput';
import { FormStepSectionTitle } from './FormStepSectionTitle';

export function PaymentInformationFormSection() {
  function handleSubmit() {

  }

  return <>
    <FormStepSectionTitle sectionNumber={ 1 } title="Payment Information"/>
    <form onSubmit={ handleSubmit }>
      <FormInput type={"text"} title={ 'Card number' } isMissing={true}/>
      <FormInput type={"text"} title={ 'Expires (MM/YY)' }/>
      <FormInput type={"text"} title={ 'Security code (CVV)' }/>
      <FormInput type={"text"} title={ 'Name on card' }/>
      <FormInput type={"text"} title={ 'ZIP code' }/>
    </form>
  </>;
}
