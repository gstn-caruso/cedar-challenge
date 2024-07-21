import { FormEvent }            from 'react';

interface SubmitButtonParams {
  onClick: (event: FormEvent) => void;
  label: string;
}

export function SubmitButton(props: SubmitButtonParams) {
  return <button onClick={ props.onClick } className={"SubmitButton"}>{ props.label }</button>;
}
