import { useForm } from 'react-hook-form';
import z from 'zod';
import Checkbox from '../checkbox/checkbox';
import styles from './addons-form.module.scss';

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

const prices = {
  onlineService: {
    monthly: '+$1/mo',
    yearly: '$10/yr',
  },
  largerStorage: {
    monthly: '+$2/mo',
    yearly: '$20/yr',
  },
  customizableProfile: {
    monthly: '+$2/mo',
    yearly: '$20/yr',
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
        price={prices.onlineService[frequency]}
      >
        Online service
      </Checkbox>
      <Checkbox
        control={control}
        name='largerStorage'
        description='Extra 1TB of cloud save'
        price={prices.largerStorage[frequency]}
      >
        Larger storage
      </Checkbox>
      <Checkbox
        control={control}
        name='customizableProfile'
        description='Custom theme on your profile'
        price={prices.customizableProfile[frequency]}
      >
        Customizable profile
      </Checkbox>
    </form>
  );
}
