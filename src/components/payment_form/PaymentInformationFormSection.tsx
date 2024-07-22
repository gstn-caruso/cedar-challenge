import { ChangeEventHandler, FormEvent, useState } from 'react';
import { SubmitButton }                            from '../SubmitButton';
import { blankFormInformation }                    from './BlankFormInformation';
import { FormInput }                               from './form_input/FormInput';
import { FormStepSectionTitle }                    from './FormStepSectionTitle';

export interface PaymentFormContentInformation {
  cardNumber: string;
  expires: string;
  cvv: string;
  holderName: string;
  zip: string;
}

export interface PaymentFormContentInformationProps {
  onSubmit: (formContent: PaymentFormContentInformation) => void;
  isActive: boolean
}

export function PaymentInformationFormSection(props: PaymentFormContentInformationProps) {
  const [formContent, setFormContent] = useState<PaymentFormContentInformation>(blankFormInformation);
  const [firstRender, hasSubmitted] = useState(true);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(formContent);
    hasSubmitted(false);

    if (Object.values(formContent).every(value => value !== null && value !== '')) {
      props.onSubmit(formContent);
    }
  }

  const handleChange: ChangeEventHandler = (event) => {
    event.preventDefault();
    // @ts-ignore
    const { value, name } = event.target;
    setFormContent(prevState => ({ ...prevState, [name]: value }));
  };

  return <div className="PaymentInformationFormSection">
    <FormStepSectionTitle sectionNumber={ 1 } title="Payment Information" isActive={ props.isActive }/>

    { props.isActive &&
        <form onSubmit={ handleSubmit }>
            <FormInput name={ 'cardNumber' } type={ 'text' } title={ 'Card number' } value={ formContent.cardNumber } onChange={ handleChange }
                       isMissing={ !firstRender && !formContent.cardNumber }/>
            <div className="column">
                <FormInput name={ 'expires' } value={ formContent.expires } type={ 'text' } title={ 'Expires (MM/YY)' } onChange={ handleChange }
                           isMissing={ !firstRender && !formContent.expires }/>
                <FormInput name={ 'cvv' } value={ formContent.cvv } type={ 'text' } title={ 'Security code (CVV)' } onChange={ handleChange }
                           isMissing={ !firstRender && !formContent.cvv }/>
            </div>
            <FormInput name={ 'holderName' } value={ formContent.holderName } type={ 'text' } title={ 'Name on card' } onChange={ handleChange }
                       isMissing={ !firstRender && !formContent.holderName }/>
            <FormInput name={ 'zip' } value={ formContent.zip } type={ 'text' } title={ 'ZIP code' } onChange={ handleChange }
                       isMissing={ !firstRender && !formContent.zip }/>

            <SubmitButton onClick={ handleSubmit } label={ 'Continue' }/>
        </form>
    }
  </div>;
}
