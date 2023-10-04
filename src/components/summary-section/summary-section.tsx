import { AddonsFormSchema } from '../addons-form/addons-form';
import Section from '../section/section';
import { SelectPlanFormSchema } from '../select-plan-form/select-plan-form';
import SummaryForm from '../summary-form/summary-form';

type SummarySectionProps = {
  plan: SelectPlanFormSchema;
  addons: AddonsFormSchema;
  onChangePlan: () => void;
};

export default function SummarySection({
  plan,
  addons,
  onChangePlan,
}: SummarySectionProps) {
  return (
    <Section
      title='Finishing up'
      description='Double-check everything looks OK before confirming.'
    >
      <SummaryForm plan={plan} addons={addons} onChangePlan={onChangePlan} />
    </Section>
  );
}
