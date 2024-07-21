interface SubmitButtonParams {
  onClick: () => void;
  label: string;
}

export function SubmitButton(props: SubmitButtonParams) {
  return <button onClick={ props.onClick } className={"SubmitButton"}>{ props.label }</button>;
}
