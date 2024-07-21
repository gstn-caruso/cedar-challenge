interface FormInputProps {
  title: string
}

export function FormInput({ title }: FormInputProps) {
  return <label className={'FormInput'}>
    { title }
    <input type={ 'number' } required></input>
  </label>;
}
