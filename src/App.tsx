import React, { useState } from 'react';
import { Header }          from './components/header/Header';
import { PaymentForm }     from './components/payment_form/PaymentForm';
import { ThankYouPage }    from './components/thank_you_page/ThankYouPage';
import { WelcomeMessage }  from './components/welcome_message/WelcomeMessage';

function App() {
  const [userIsFillingForm, setUserIsFillingForm] = useState(false)
  const [paymentApproved, setPaymentApproved] = useState(false)

  function handleSubmit() {
    setUserIsFillingForm(true);
  }

  function handlePay() {
    setPaymentApproved(true);
  }

  function renderForm() {
    return userIsFillingForm ? <PaymentForm onSubmit={ handleSubmit } onPay={ handlePay }/> :
      <WelcomeMessage onClick={ () => setUserIsFillingForm(true) }/>;
  }

  return (<>
      <Header/>
      { paymentApproved ? <ThankYouPage/> : renderForm() }
    </>
  )
}

export default App;
