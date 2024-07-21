import { FormInput }            from './FormInput';
import { FormStepSectionTitle } from './FormStepSectionTitle';

export function PaymentInformationFormSection() {
  function handleSubmit() {

  }

  return <>
    <FormStepSectionTitle sectionNumber={ 1 } title="Payment Information"/>
    <form onSubmit={ handleSubmit }>
      <FormInput title={"Card number"}/>
    </form>
  </>;
}
