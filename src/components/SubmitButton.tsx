import { FormEvent } from 'react';

interface SubmitButtonParams {
  onClick: Function;
  label: string;
}

export function SubmitButton(props: SubmitButtonParams) {
  return <button onClick={ props.onClick as (event: FormEvent) => void } className={ 'SubmitButton' }>{ props.label }</button>;
}
