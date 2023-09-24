import React, { ReactNode } from 'react';
import styles from './text.module.scss';

type TextProps = {
  children: ReactNode;
};

export default function Text({ children }: TextProps) {
  return <p className={styles.Text}>{children}</p>;
}
