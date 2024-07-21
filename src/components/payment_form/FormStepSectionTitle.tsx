interface FormStepSectionTitleProps {
  sectionNumber: number,
  title: string
}

export function FormStepSectionTitle(props: FormStepSectionTitleProps) {
  return <div className="FormStepSectionTitle">
    <span>{ props.sectionNumber }</span>
    <h1>{ props.title }</h1>
  </div>;
}
