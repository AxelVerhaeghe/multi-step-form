import { useForm } from 'react-hook-form';
import z from 'zod';
import Checkbox from '../checkbox/checkbox';
import styles from './addons-form.module.scss';
import { formatPrice } from '@/util/formatPrice';

const schema = z.object({
  onlineService: z.boolean(),
  largerStorage: z.boolean(),
  customizableProfile: z.boolean(),
});

export type AddonsFormSchema = z.infer<typeof schema>;

type AddonsFormProps = {
  onSumbit: (data: AddonsFormSchema) => void;
  defaultValues?: AddonsFormSchema;
  frequency?: 'monthly' | 'yearly';
};

export const prices = {
  onlineService: {
    monthly: 1,
    yearly: 10,
  },
  largerStorage: {
    monthly: 2,
    yearly: 20,
  },
  customizableProfile: {
    monthly: 2,
    yearly: 20,
  },
};

export default function AddonsForm({
  onSumbit,
  defaultValues,
  frequency = 'monthly',
}: AddonsFormProps) {
  const { control, handleSubmit } = useForm<AddonsFormSchema>({
    mode: 'onBlur',
    defaultValues,
  });
  return (
    <form
      id='add-ons-form'
      onSubmit={handleSubmit(onSumbit)}
      className={styles.Form}
    >
      <Checkbox
        control={control}
        name='onlineService'
        description='Access to multiplayer games'
        price={formatPrice(prices.onlineService[frequency], frequency, true)}
      >
        Online service
      </Checkbox>
      <Checkbox
        control={control}
        name='largerStorage'
        description='Extra 1TB of cloud save'
        price={formatPrice(prices.largerStorage[frequency], frequency, true)}
      >
        Larger storage
      </Checkbox>
      <Checkbox
        control={control}
        name='customizableProfile'
        description='Custom theme on your profile'
        price={formatPrice(
          prices.customizableProfile[frequency],
          frequency,
          true
        )}
      >
        Customizable profile
      </Checkbox>
    </form>
  );
}
