import PersonalInfo from '@/components/personal-info/personal-info';
import styles from './page.module.scss';
import { useMemo } from 'react';
import SelectPlan from '@/components/select-plan/select-plan';
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
