import { ChangeEventHandler, FormEvent, useState } from 'react';
import { SubmitButton }                            from '../SubmitButton';
import { blankFormInformation }                    from './BlankFormInformation';
import { CardNumberInput }                         from './CardNumberInput';
import { FormInput }                               from './form_input/FormInput';
import { InputMask }                               from './form_input/InputMask';
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
  isActive: boolean;
  canEdit: boolean;
  onEdit: Function;
}

export function PaymentInformationFormSection(props: PaymentFormContentInformationProps) {
  const [formContent, setFormContent] = useState<PaymentFormContentInformation>(blankFormInformation);
  const [firstRender, hasSubmitted] = useState(true);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    hasSubmitted(false);

    const formIsComplete = Object.values(formContent).every(value => value !== null && value !== '');
    if (formIsComplete) {
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
    <FormStepSectionTitle sectionNumber={ 1 } title="Payment Information" isActive={ props.isActive } canEdit={ props.canEdit }
                          onEdit={ props.onEdit }/>

    { props.isActive &&
        <form onSubmit={ handleSubmit }>
            <CardNumberInput formContent={ formContent } onChange={ handleChange } firstRender={ firstRender }/>
            <div className="column">
                <FormInput name={ 'expires' } value={ formContent.expires } type={ 'text' } title={ 'Expires (MM/YY)' } onChange={ handleChange }
                           isMissing={ !firstRender && !formContent.expires } mask={InputMask.expires}/>
                <FormInput name={ 'cvv' } value={ formContent.cvv } type={ 'text' } title={ 'Security code (CVV)' } onChange={ handleChange }
                           isMissing={ !firstRender && !formContent.cvv } mask={InputMask.cvv}/>
            </div>
            <FormInput name={ 'holderName' } value={ formContent.holderName } type={ 'text' } title={ 'Name on card' } onChange={ handleChange }
                       isMissing={ !firstRender && !formContent.holderName } mask={""}/>
            <FormInput name={ 'zip' } value={ formContent.zip } type={ 'text' } title={ 'ZIP code' } onChange={ handleChange }
                       isMissing={ !firstRender && !formContent.zip } mask={""}/>

            <SubmitButton onClick={ handleSubmit } label={ 'Continue' }/>
        </form>
    }
  </div>;
}
