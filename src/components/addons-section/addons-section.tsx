import AddonsForm, { AddonsFormSchema } from '../addons-form/addons-form';
import Section from '../section/section';

type AddonsSectionProps = {
  onSumbit: (data: AddonsFormSchema) => void;
  defaultValues?: AddonsFormSchema;
  frequency?: 'monthly' | 'yearly';
};

export default function AddonsSection({
  onSumbit,
  defaultValues,
  frequency,
}: AddonsSectionProps) {
  return (
    <Section
      title='Pick add-ons'
      description='Add-ons help enhance your gaming experience.'
    >
      <AddonsForm
        onSumbit={onSumbit}
        defaultValues={defaultValues}
        frequency={frequency}
      />
    </Section>
  );
}
