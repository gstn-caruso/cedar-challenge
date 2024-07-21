interface FormStepSectionTitleProps {
  sectionNumber: number,
  title: string,
  isActive: boolean,
}

export function FormStepSectionTitle(props: FormStepSectionTitleProps) {
  return <div className={ `FormStepSectionTitle ${ props.isActive ? 'active' : '' }` }>
    <span>{ props.sectionNumber }</span>
    <h1>{ props.title }</h1>
  </div>;
}
