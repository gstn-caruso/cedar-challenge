import { FormEvent }    from 'react';
import { SubmitButton } from '../SubmitButton';

interface WelcomeMessageProps {
  onClick: (event: FormEvent) => void;
  userName: string;
  pendingBillsAmount: number;
  totalAmount: number;
}

export function WelcomeMessage({ onClick, userName, totalAmount, pendingBillsAmount }: WelcomeMessageProps) {
  return <div className="WelcomeMessage">
    <div className="message-container">
      <h1>Hi, { userName }</h1>
      <h2>You have { pendingBillsAmount } medical bills ready from ABC Health System. You can pay your bills here or verify your identity to view full
        bill details.</h2>
    </div>
    <div className="controls">
      <div className="controls-container">
        <div className="summary">
          <p>Total due</p>
          <p>${ totalAmount }</p>
        </div>
        <SubmitButton onClick={ onClick } label={ 'Pay total' }/>
      </div>
    </div>
  </div>
}
