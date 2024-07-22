import { ConfirmationSection }  from './ConfirmationSection';
import { FormStepSectionTitle } from './FormStepSectionTitle';

interface ReviewAndPayFormSectionProps {
  isActive: boolean,
  cardNumber: string,
  onSubmit: Function,
  totalAmount: number,
}

export function ReviewAndPayFormSection(props: ReviewAndPayFormSectionProps) {
  return <>
    <FormStepSectionTitle sectionNumber={ 2 } title={ 'Review and pay' } isActive={ props.isActive }/>
    { props.isActive &&
        <ConfirmationSection cardNumber={ props.cardNumber } paymentAmount={ props.totalAmount } onSubmit={ props.onSubmit }/>
    }
  </>;
}
