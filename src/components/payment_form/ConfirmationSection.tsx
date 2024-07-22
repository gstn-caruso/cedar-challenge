import { SubmitButton } from '../SubmitButton';
import { VisaIcon }     from './VisaIcon';

interface ConfirmationSectionProps {
  cardNumber: string,
  paymentAmount: number,
  onSubmit: Function,
}

export function ConfirmationSection(props: ConfirmationSectionProps) {
  function lastDigis() {
    return props.cardNumber === null ? '' : props.cardNumber.slice(-4);
  }

  return <div className={ 'ConfirmationSection' }>
    <h2>You’re about to make a payment of <b>{ `$${ props.paymentAmount }` }</b></h2>
    <div className="CreditCardPreview">
      <h3>Payment method</h3>
      <div className="cardPreview">
        <VisaIcon/>
        <p>{ `Card ending in ••••${ lastDigis() }` }</p>
      </div>
    </div>
    <SubmitButton onClick={ props.onSubmit } label={ `Pay $${ props.paymentAmount.toFixed(2) }` }/>
  </div>;
}
