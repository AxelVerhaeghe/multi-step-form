import React from 'react';
import styles from './footer.module.scss';
import Button from '../button/button';

type FooterProps = {
  form: string;
  isFirstStep: boolean;
  isLastStep: boolean;
  onBack: () => void;
  onConfirm: () => void;
};

export default function Footer({
  form,
  isFirstStep,
  isLastStep,
  onBack,
  onConfirm,
}: FooterProps) {
  return (
    <div className={styles.Footer}>
      <div className={styles.ButtonGroup}>
        {isLastStep ? (
          <Button variant='primary' type='button' onPress={onConfirm}>
            Confirm
          </Button>
        ) : (
          <Button variant='primary' type='submit' form={form}>
            Next Step
          </Button>
        )}
        {!isFirstStep && (
          <Button variant='secondary' type='button' onPress={onBack}>
            Go Back
          </Button>
        )}
      </div>
    </div>
  );
}
