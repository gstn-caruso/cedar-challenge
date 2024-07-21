import { HTMLInputTypeAttribute } from 'react';

interface FormInputProps {
  title: string,
  type: HTMLInputTypeAttribute,
  isMissing?: boolean,
}

export function FormInput({ title, type, isMissing }: FormInputProps) {
  return <label className={ `FormInput` }>
    { title }
    <input className={ `${ isMissing ? 'error' : '' }` } type={ type } required></input>

    { isMissing && <p>This field is required.</p> }
  </label>;
}
