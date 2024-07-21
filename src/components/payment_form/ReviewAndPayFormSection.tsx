import { FormStepSectionTitle } from './FormStepSectionTitle';

interface ReviewAndPayFormSectionProps {
  isActive: boolean
}

export function ReviewAndPayFormSection(props: ReviewAndPayFormSectionProps) {
  return <FormStepSectionTitle sectionNumber={ 2 } title={ 'Review and pay' } isActive={props.isActive} />;
}
