import { formatPrice } from '@/util/formatPrice';
import {
  AddonsFormSchema,
  prices as addonPrices,
} from '../addons-form/addons-form';
import Button from '../button/button';
import {
  SelectPlanFormSchema,
  prices as planPrices,
} from '../select-plan-form/select-plan-form';
import styles from './summary-form.module.scss';
import AddonSummaryRow from '../addon-summary-row/addon-summary-row';
import { FormEvent } from 'react';

type SummaryFormProps = {
  plan: SelectPlanFormSchema;
  addons: AddonsFormSchema;
  onChangePlan: () => void;
  onConfirm: () => void;
};

export default function SummaryForm({
  plan,
  addons,
  onChangePlan,
  onConfirm,
}: SummaryFormProps) {
  const frequency = plan?.frequency ? 'yearly' : 'monthly';

  const total =
    planPrices[plan.plan][frequency] +
    Object.keys(addons)
      .filter((key) => !!addons[key as keyof AddonsFormSchema])
      .map((key) => addonPrices[key as keyof AddonsFormSchema][frequency])
      .reduce((acc, curr) => (acc += curr), 0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <form id='summary-form' onSubmit={handleSubmit}>
      <section className={styles.Choices}>
        <div className={styles.Plan}>
          <div>
            <div className={styles.PlanChoice}>
              {capitalize(plan.plan)} ({capitalize(frequency)})
            </div>
            <Button variant='link' onPress={onChangePlan}>
              Change
            </Button>
          </div>
          <div className={styles.PlanPrice}>
            {formatPrice(planPrices[plan.plan][frequency], frequency)}
          </div>
        </div>
        <div className={styles.Addons}>
          {addons.onlineService && (
            <AddonSummaryRow
              title='Online service'
              price={addonPrices.onlineService[frequency]}
              frequency={frequency}
            />
          )}
          {addons.largerStorage && (
            <AddonSummaryRow
              title='Larger storage'
              price={addonPrices.largerStorage[frequency]}
              frequency={frequency}
            />
          )}
          {addons.customizableProfile && (
            <AddonSummaryRow
              title='Customizable profile'
              price={addonPrices.customizableProfile[frequency]}
              frequency={frequency}
            />
          )}
        </div>
      </section>
      <div className={styles.Total}>
        <div className={styles.TotalTitle}>
          Total (per {frequency === 'monthly' ? 'month' : 'year'})
        </div>
        <div className={styles.TotalPrice}>{formatPrice(total, frequency)}</div>
      </div>
    </form>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
