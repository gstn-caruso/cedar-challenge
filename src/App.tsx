import React, { useEffect, useState }    from 'react';
import { PaymentRequest }                from './api/PaymentRequest';
import { useApiClient }                  from './api/useApiClient';
import { Header }                        from './components/header/Header';
import { PaymentForm }                   from './components/payment_form/PaymentForm';
import { PaymentFormContentInformation } from './components/payment_form/PaymentInformationFormSection';
import { ThankYouPage }                  from './components/thank_you_page/ThankYouPage';
import { WelcomeMessage }                from './components/welcome_message/WelcomeMessage';

function App() {
  const apiClient = useApiClient();

  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest>(PaymentRequest.blank());
  useEffect(() => {
    apiClient.getPaymentRequest().then(setPaymentRequest);
  }, []);

  const [userIsFillingForm, setUserIsFillingForm] = useState(false)
  const [paymentApproved, setPaymentApproved] = useState(false)

  function handleSubmit() {
    setUserIsFillingForm(true);
  }

  function handleSubmitPayment(formContent: PaymentFormContentInformation) {
    apiClient.submitPaymentRequest(formContent).then(() => setPaymentApproved(true));
  }

  function renderForm() {
    return userIsFillingForm ?
      <PaymentForm onSubmit={ handleSubmit }
                   onPay={ handleSubmitPayment }
                   totalAmount={ paymentRequest.totalAmount }
      /> :
      <WelcomeMessage onClick={ () => setUserIsFillingForm(true) }
                      userName={ paymentRequest.userName }
                      pendingBillsAmount={ paymentRequest.pendingBillsAmount }
                      totalAmount={ paymentRequest.totalAmount }
      />;
  }

  return (<>
      <Header/>
      { paymentApproved ? <ThankYouPage/> : renderForm() }
    </>
  )
}

export default App;
