import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import ReactInputMask                                 from 'react-input-mask';

interface FormInputProps {
  title: string,
  type: HTMLInputTypeAttribute,
  isMissing?: boolean,
  value?: string,
  onChange: ChangeEventHandler,
  name: string,
  mask: string,
}

export function FormInput({ name, title, type, isMissing, value, onChange, mask }: FormInputProps) {
  return <label className={ `FormInput` }>
    { title }
    <ReactInputMask maskChar={ '' } mask={ mask } name={ name } className={ `${ isMissing ? 'error' : '' }` } type={ type } required={ true }
                    value={ value } onChange={ onChange }>
    </ReactInputMask>

    { isMissing && <p>This field is required.</p> }
  </label>;
}
