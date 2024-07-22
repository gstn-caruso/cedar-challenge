import { PaymentFormContentInformation } from '../components/payment_form/PaymentInformationFormSection';
import { mockServerResponse }            from './MockServerResponse';
import { PaymentRequest }                from './PaymentRequest';

export class ApiClient {
  async getPaymentRequest(): Promise<PaymentRequest> {
    return mockServerResponse;
  }

  async submitPaymentRequest(paymentRequest: PaymentFormContentInformation): Promise<void> {
    console.log('*** SENDING TO SERVER ***');
    console.log(paymentRequest);
  }
}
