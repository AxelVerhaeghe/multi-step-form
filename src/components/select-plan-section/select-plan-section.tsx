import React from 'react';
import Section from '../section/section';
import SelectPlanForm, {
  SelectPlanFormSchema,
} from '../select-plan-form/select-plan-form';

type SelectPlanSectionProps = {
  onSubmit: (data: SelectPlanFormSchema) => void;
  defaultValues?: SelectPlanFormSchema;
};

export default function SelectPlanSection({
  onSubmit,
  defaultValues,
}: SelectPlanSectionProps) {
  return (
    <Section
      title='Select your plan'
      description='You have the option of monthly or yearly billing.'
    >
      <SelectPlanForm onSubmit={onSubmit} defaultValues={defaultValues} />
    </Section>
  );
}
