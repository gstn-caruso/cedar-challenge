import React, { useState } from 'react';
import { Header }          from './components/header/Header';
import { PaymentForm }     from './components/payment_form/PaymentForm';
import { WelcomeMessage }  from './components/welcome_message/WelcomeMessage';

function App() {
  const [userIsFillingForm, setUserIsFillingForm] = useState(false)

  return (<>
      <Header/>
      { userIsFillingForm ? <PaymentForm/> : <WelcomeMessage onClick={ () => setUserIsFillingForm(true) }/> }
    </>
  )
}

export default App;
