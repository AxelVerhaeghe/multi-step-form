import React from 'react';
import Section from '../section/section';
import PersonalInfoForm, {
  PersonalInfoFormSchema,
} from '../personal-info-form/personal-info-form';

type PersonalInfomProps = {
  onSumbit: (data: PersonalInfoFormSchema) => void;
  defaultValues?: PersonalInfoFormSchema;
};

export default function PersonalInfo({
  onSumbit,
  defaultValues,
}: PersonalInfomProps) {
  return (
    <Section
      title='Personal info'
      description='Please provide your name, email address, and phone number.'
    >
      <PersonalInfoForm onSumbit={onSumbit} defaultValues={defaultValues} />
    </Section>
  );
}
