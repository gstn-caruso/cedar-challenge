import { useState }                                                     from 'react';
import { blankFormInformation }                                         from './BlankFormInformation';
import { PaymentFormContentInformation, PaymentInformationFormSection } from './PaymentInformationFormSection';
import { ReviewAndPayFormSection }                                      from './ReviewAndPayFormSection';

interface PaymentFormProps {
  onSubmit: Function;
  onPay: Function;
  totalAmount: number;
}

export function PaymentForm(props: PaymentFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentInformation, setPaymentInformation] = useState<PaymentFormContentInformation>(blankFormInformation)

  function handleSubmit(formContent: PaymentFormContentInformation) {
    setCurrentStep(currentStep + 1);
    setPaymentInformation(formContent);
  }

  function handlePay() {
    props.onPay(paymentInformation);
  }

  return <ul data-testid="payment-form" className="PaymentForm">
    <li>
      <PaymentInformationFormSection onSubmit={ handleSubmit }
                                     isActive={ currentStep === 1 }
                                     canEdit={ currentStep === 2 }
                                     onEdit={ () => setCurrentStep(1) }
      />
    </li>
    <li>
      <ReviewAndPayFormSection onSubmit={ handlePay }
                               isActive={ currentStep === 2 }
                               cardNumber={ paymentInformation.cardNumber }
                               totalAmount={ props.totalAmount }
      />
    </li>
  </ul>;
}
