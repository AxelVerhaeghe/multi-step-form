import React from 'react';
import styles from './navigation.module.scss';
import NavigationItem from '../navigation-item/navigation-item';

type NavigationProps = {
  step: number;
  onClick: (step: number) => void;
};
export default function Navigation({ step, onClick }: NavigationProps) {
  return (
    <nav className={styles.Container}>
      <ul className={styles.Nav}>
        <NavigationItem onClick={onClick} isActive={step === 1} step={1}>
          Your info
        </NavigationItem>
        <NavigationItem onClick={onClick} isActive={step === 2} step={2}>
          Select plan
        </NavigationItem>
        <NavigationItem onClick={onClick} isActive={step === 3} step={3}>
          Add-ons
        </NavigationItem>
        <NavigationItem onClick={onClick} isActive={step === 4} step={4}>
          Summary
        </NavigationItem>
      </ul>
    </nav>
  );
}
