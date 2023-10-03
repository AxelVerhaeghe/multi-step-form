import styles from './page.module.scss';
import RegistrationForm from '@/components/registration-form/registration-form';

export default function Home() {
  return (
    <main className={styles.main}>
      <RegistrationForm />
    </main>
  );
}
