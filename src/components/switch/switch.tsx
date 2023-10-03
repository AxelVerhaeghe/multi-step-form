import {
  Switch as RASwitch,
  SwitchProps as RASwitchProps,
} from 'react-aria-components';
import styles from './switch.module.scss';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import { VisuallyHidden } from 'react-aria';

type SwitchProps<T extends FieldValues> = Omit<
  RASwitchProps,
  'onChange|name'
> & {
  children: React.ReactNode;
  control: Control<T>;
  name: FieldPath<T>;
  notSelectedLabel: string;
  selectedLabel: string;
};

export default function Switch<T extends FieldValues>({
  children,
  control,
  name,
  notSelectedLabel,
  selectedLabel,
  ...props
}: SwitchProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...restField } }) => (
        <RASwitch
          isSelected={value ?? false}
          {...props}
          {...restField}
          className={styles.Switch}
        >
          <span className={styles.NotSelectedLabel}>{notSelectedLabel}</span>
          <div className={styles.Indicator}></div>
          <span className={styles.SelectedLabel}>{selectedLabel}</span>

          <VisuallyHidden>{children}</VisuallyHidden>
        </RASwitch>
      )}
    />
  );
}
