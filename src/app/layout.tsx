import './globals.scss';
import type { Metadata } from 'next';
import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'Multi step form',
  description: 'a multi step form',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className={styles.Container}>{children}</div>
      </body>
    </html>
  );
}
