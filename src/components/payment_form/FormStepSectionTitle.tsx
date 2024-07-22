import { MouseEventHandler } from 'react';

interface FormStepSectionTitleProps {
  canEdit?: boolean;
  onEdit?: Function;
  isActive: boolean;
  sectionNumber: number;
  title: string;
}

export function FormStepSectionTitle(props: FormStepSectionTitleProps) {
  return <div className={ `FormStepSectionTitle ${ props.isActive ? 'active' : '' } ${ props.canEdit ? 'completed' : '' }` }>
    <div className={ 'container' }>
      <span>{ props.sectionNumber }</span>
      <h1>{ props.title }</h1>
    </div>
    { props.canEdit && <button onClick={ props.onEdit as MouseEventHandler }>Edit</button> }
  </div>;
}
