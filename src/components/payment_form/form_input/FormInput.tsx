import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import ReactInputMask                                 from 'react-input-mask';
import { AlertCircle }                                from './AlertCircle';
import { CheckIcon }                                  from './CheckIcon';

interface FormInputProps {
  title: string,
  type: HTMLInputTypeAttribute,
  isMissing?: boolean,
  isValid?: boolean,
  value?: string,
  onChange: ChangeEventHandler,
  name: string,
  mask: string,
}

export function FormInput({ name, title, type, isMissing, isValid, value, onChange, mask }: FormInputProps) {
  return <label className={ `FormInput` }>
    { title }
    <div className={ 'input-container' }>
      <ReactInputMask maskChar={ '' } mask={ mask } name={ name } className={ `${ isMissing ? 'error' : '' }` } type={ type } required={ true }
                      value={ value } onChange={ onChange }/>
      { isMissing && <AlertCircle/> }
      { isValid && <CheckIcon/> }
    </div>

    { isMissing && <p>This field is required.</p> }
  </label>;
}
