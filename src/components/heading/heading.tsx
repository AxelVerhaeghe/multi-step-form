import React, { ReactNode } from 'react';
import styles from './heading.module.scss';

type HeadingProps = {
  children: ReactNode;
};
export default function Heading({ children }: HeadingProps) {
  return <h2 className={styles.Heading}>{children}</h2>;
}
