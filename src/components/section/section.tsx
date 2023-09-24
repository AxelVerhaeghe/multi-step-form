import React, { ReactNode } from 'react';
import styles from './section.module.scss';
import Heading from '../heading/heading';
import Text from '../text/text';

type SectionProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function Section({
  title,
  description,
  children,
}: SectionProps) {
  return (
    <div className={styles.Container}>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      {children}
    </div>
  );
}
