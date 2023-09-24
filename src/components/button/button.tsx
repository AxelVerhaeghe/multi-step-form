'use client';

import React, { ReactNode } from 'react';
import {
  Button as RAButton,
  ButtonProps as RAButtonProps,
} from 'react-aria-components';
import styles from './button.module.scss';

type ButtonProps = RAButtonProps & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <RAButton className={styles.Button} data-variant={variant} {...props}>
      {children}
    </RAButton>
  );
}
