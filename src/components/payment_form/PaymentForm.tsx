import { PaymentInformationFormSection } from './PaymentInformationFormSection';
import { ReviewAndPayFormSection }       from './ReviewAndPayFormSection';

export function PaymentForm() {
  return <div data-testid="payment-form" className="PaymentForm">
    <PaymentInformationFormSection />
    <ReviewAndPayFormSection />
  </div>;
}
