import PersonalInfo from '@/components/personal-info-section/personal-info';
import styles from './page.module.scss';
import { useMemo } from 'react';
import SelectPlan from '@/components/select-plan-section/select-plan';
import RegistrationForm from '@/components/registration-form/registration-form';

export default function Home({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className={styles.main}>
      <RegistrationForm />
    </main>
  );
}
