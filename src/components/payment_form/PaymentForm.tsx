import { useState }                                                     from 'react';
import { PaymentFormContentInformation, PaymentInformationFormSection } from './PaymentInformationFormSection';
import { ReviewAndPayFormSection }                                      from './ReviewAndPayFormSection';

export function PaymentForm() {
  const [currentStep, setCurrentStep] = useState(1)

  function handleSubmit(formContent: PaymentFormContentInformation) {
    setCurrentStep(currentStep + 1);
  }

  return <div data-testid="payment-form" className="PaymentForm">
    <PaymentInformationFormSection onSubmit={ handleSubmit } isActive={ currentStep === 1 }/>
    <ReviewAndPayFormSection isActive={ currentStep === 2 }/>
  </div>;
}
