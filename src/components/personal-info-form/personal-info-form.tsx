import { useForm } from 'react-hook-form';
import TextField from '../text-field/text-field';
import styles from './personal-info-form.module.scss';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type PersonalInfoFormProps = {
  onSumbit: (data: PersonalInfoFormSchema) => void;
  defaultValues?: PersonalInfoFormSchema;
};

const requiredMessage = 'This field is required';

const schema = z.object({
  name: z
    .string({ required_error: requiredMessage })
    .nonempty({ message: requiredMessage }),
  email: z
    .string({ required_error: requiredMessage })
    .nonempty({ message: requiredMessage })
    .email(),
  phoneNumber: z
    .string({ required_error: requiredMessage })
    .nonempty({ message: requiredMessage })
    .refine((value) => parseInt(value), { message: 'Invalid phone number' }),
});

export type PersonalInfoFormSchema = z.infer<typeof schema>;

export default function PersonalInfoForm({
  onSumbit,
  defaultValues,
}: PersonalInfoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormSchema>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onBlur',
  });

  return (
    <form
      id='personal-info-form'
      className={styles.Form}
      onSubmit={handleSubmit(onSumbit)}
    >
      <TextField
        {...register('name')}
        label='Name'
        placeholder='e.g. Stephen King'
        errorMessage={errors.name?.message}
        isInvalid={!!errors.name}
      />
      <TextField
        {...register('email')}
        label='Email Address'
        placeholder='e.g. stephenking@lorem.com'
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        type='email'
        inputMode='email'
      />
      <TextField
        {...register('phoneNumber')}
        label='Phone Number'
        placeholder='e.g. +1 234 567 890'
        isInvalid={!!errors.phoneNumber}
        errorMessage={errors.phoneNumber?.message}
        type='tel'
        inputMode='tel'
      />
    </form>
  );
}
