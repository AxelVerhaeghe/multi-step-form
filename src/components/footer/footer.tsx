import React from 'react';
import styles from './footer.module.scss';
import Button from '../button/button';

type FooterProps = {
  form: string;
  isFirstStep: boolean;
  isLastStep: boolean;
  onBack: () => void;
};

export default function Footer({
  form,
  isFirstStep,
  isLastStep,
  onBack,
}: FooterProps) {
  return (
    <div className={styles.Footer}>
      <div className={styles.ButtonGroup}>
        <Button variant='primary' type='submit' form={form}>
          {isLastStep ? 'Confirm' : 'Next Step'}
        </Button>
        {!isFirstStep && (
          <Button variant='secondary' type='button' onPress={onBack}>
            Go Back
          </Button>
        )}
      </div>
    </div>
  );
}
