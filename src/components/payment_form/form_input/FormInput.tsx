import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

interface FormInputProps {
  title: string,
  type: HTMLInputTypeAttribute,
  isMissing?: boolean,
  value?: string,
  onChange: ChangeEventHandler,
  name: string,
}

export function FormInput({ name, title, type, isMissing, value, onChange }: FormInputProps) {
  return <label className={ `FormInput` }>
    { title }
    <input name={name} className={ `${ isMissing ? 'error' : '' }` } type={ type } required value={value} onChange={onChange}></input>

    { isMissing && <p>This field is required.</p> }
  </label>;
}
