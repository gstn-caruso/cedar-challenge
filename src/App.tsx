import React, { useState } from 'react';
import { Header }          from './components/header/Header';
import { WelcomeMessage }  from './components/welcome_message/WelcomeMessage';

function App() {
  const [userIsFillingForm, setUserIsFillingForm] = useState(false)

  return (<>
      <Header/>
      { !userIsFillingForm && <WelcomeMessage/> }
    </>
  );
}

export default App;
