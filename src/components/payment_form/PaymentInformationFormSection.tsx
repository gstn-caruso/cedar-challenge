import { FormEvent }            from 'react';
import { SubmitButton }         from '../SubmitButton';
import { FormInput }            from './form_input/FormInput';
import { FormStepSectionTitle } from './FormStepSectionTitle';

export function PaymentInformationFormSection() {
  function handleSubmit(event: FormEvent) {

  }

  return <div className="PaymentInformationFormSection">
    <FormStepSectionTitle sectionNumber={ 1 } title="Payment Information"/>
    <form onSubmit={ handleSubmit }>
      <FormInput type={ 'text' } title={ 'Card number' }/>
      <div className="column">
        <FormInput type={ 'text' } title={ 'Expires (MM/YY)' }/>
        <FormInput type={ 'text' } title={ 'Security code (CVV)' }/>
      </div>
      <FormInput type={ 'text' } title={ 'Name on card' }/>
      <FormInput type={ 'text' } title={ 'ZIP code' }/>

      <SubmitButton onClick={ handleSubmit } label={"Continue"}/>
    </form>
  </div>;
}
