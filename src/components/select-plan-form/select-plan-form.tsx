import { Controller, useForm } from 'react-hook-form';
import { PlanOption, PlanOptionGroup } from '../plan-option/plan-option';
import Switch from '../switch/switch';
import styles from './select-plan-form.module.scss';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ArcadeIcon from './icon-arcade.svg';
import AdvancedIcon from './icon-advanced.svg';
import ProIcon from './icon-pro.svg';

const schema = z.object({
  plan: z.enum(['arcade', 'advanced', 'pro']),
  frequency: z.boolean().refine((value) => (value ? 'yearly' : 'monthly')),
});

export type SelectPlanFormSchema = z.infer<typeof schema>;

type SelectPlanFormProps = {
  onSubmit: (data: SelectPlanFormSchema) => void;
  defaultValues?: SelectPlanFormSchema;
};

const prices = {
  arcade: {
    monthly: '$9/mo',
    yearly: '$90/yr',
  },
  advanced: {
    monthly: '$12/mo',
    yearly: '$120/yr',
  },
  pro: {
    monthly: '$15/mo',
    yearly: '$150/yr',
  },
};

const promos = {
  arcade: {
    monthly: '',
    yearly: '2 months free',
  },
  advanced: {
    monthly: '',
    yearly: '2 months free',
  },
  pro: {
    monthly: '',
    yearly: '2 months free',
  },
};

export default function SelectPlanForm({
  onSubmit,
  defaultValues,
}: SelectPlanFormProps) {
  const {
    control,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<SelectPlanFormSchema>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      plan: 'arcade',
      frequency: false,
      ...defaultValues,
    },
  });

  const frequency = watch().frequency ? 'yearly' : 'monthly';

  return (
    <form
      className={styles.Form}
      id='select-plan-form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.Plans}>
        <Controller
          control={control}
          name='plan'
          render={({ field: { value, ...restField } }) => (
            <PlanOptionGroup value={value} aria-label='plan' {...restField}>
              <PlanOption
                icon={ArcadeIcon}
                value='arcade'
                price={prices.arcade[frequency]}
                promo={promos.arcade[frequency]}
              >
                Arcade
              </PlanOption>
              <PlanOption
                icon={AdvancedIcon}
                value='advanced'
                price={prices.advanced[frequency]}
                promo={promos.arcade[frequency]}
              >
                Advanced
              </PlanOption>
              <PlanOption
                icon={ProIcon}
                value='pro'
                price={prices.pro[frequency]}
                promo={promos.arcade[frequency]}
              >
                Pro
              </PlanOption>
            </PlanOptionGroup>
          )}
        />
      </div>
      <div className={styles.Switch}>
        <Switch
          name='frequency'
          control={control}
          notSelectedLabel='Monthly'
          selectedLabel='Yearly'
        >
          Frequency
        </Switch>
      </div>
    </form>
  );
}
