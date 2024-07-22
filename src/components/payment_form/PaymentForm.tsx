import { useState }                                                     from 'react';
import { blankFormInformation }                                         from './BlankFormInformation';
import { PaymentFormContentInformation, PaymentInformationFormSection } from './PaymentInformationFormSection';
import { ReviewAndPayFormSection }                                      from './ReviewAndPayFormSection';

interface PaymentFormProps {
  onSubmit: Function;
  onPay: Function;
}

export function PaymentForm(props: PaymentFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentInformation, setPaymentInformation] = useState<PaymentFormContentInformation>(blankFormInformation)

  function handleSubmit(formContent: PaymentFormContentInformation) {
    setCurrentStep(currentStep + 1);
    setPaymentInformation(formContent);
  }

  return <div data-testid="payment-form" className="PaymentForm">
    <PaymentInformationFormSection onSubmit={ handleSubmit } isActive={ currentStep === 1 }/>
    <ReviewAndPayFormSection onSubmit={ props.onPay } isActive={ currentStep === 2 } cardNumber={ paymentInformation.cardNumber }/>
  </div>;
}
