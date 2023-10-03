import {
  CheckboxProps as RACheckboxProps,
  Checkbox as RACheckbox,
} from 'react-aria-components';
import styles from './checkbox.module.scss';
import { ReactNode } from 'react';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';

type CheckboxProps<T extends FieldValues> = Omit<
  RACheckboxProps,
  'children'
> & {
  description: string;
  price: string;
  children: ReactNode;
  control: Control<T>;
  name: FieldPath<T>;
};

export default function Checkbox<T extends FieldValues>({
  children,
  control,
  name,
  description,
  price,
  ...props
}: CheckboxProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...restField } }) => (
        <RACheckbox
          isSelected={value ?? false}
          className={styles.CheckBox}
          {...props}
          {...restField}
        >
          <>
            <div className={styles.Box}>
              <svg viewBox='0 0 18 18' aria-hidden='true'>
                <polyline points='1 9 7 14 15 4' />
              </svg>
            </div>
            <div className={styles.Content}>
              <div>
                <div className={styles.Label}>{children}</div>
                <div className={styles.Description}>{description}</div>
              </div>
              <div className={styles.Price}>{price}</div>
            </div>
          </>
        </RACheckbox>
      )}
    />
  );
}
