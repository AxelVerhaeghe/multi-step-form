'use client';

import { useObjectRef } from '@react-aria/utils';
import styles from './text-field.module.scss';
import { FormEvent, ForwardedRef, forwardRef, useCallback } from 'react';
import { AriaTextFieldOptions, useTextField } from 'react-aria';

type TextFieldProps = Omit<AriaTextFieldOptions<'input'>, 'onChange'> & {
  onChange: (event: FormEvent<HTMLInputElement>) => void;
};

const TextField = forwardRef(
  (
    { onChange, ...restProps }: TextFieldProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    const ref = useObjectRef(forwardedRef);

    const internalOnChange = useCallback(
      (value: string) => {
        // @ts-expect-error Fix typing
        onChange({ target: { value } });
      },
      [onChange]
    );

    const props = {
      ...restProps,
      onChange: internalOnChange,
    };

    const { labelProps, inputProps, errorMessageProps } = useTextField(
      props,
      ref
    );
    return (
      <div className={styles.Field}>
        <div className={styles.Meta}>
          <label className={styles.Label} {...labelProps}>
            {props.label}
          </label>
          {props.errorMessage && (
            <div {...errorMessageProps} className={styles.Error}>
              {props.errorMessage}
            </div>
          )}
        </div>
        <input className={styles.Input} ref={ref} {...inputProps} />
      </div>
    );
  }
);

TextField.displayName = 'TextField';
export default TextField;
