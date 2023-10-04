import { formatPrice } from '@/util/formatPrice';
import styles from './addon-summary-row.module.scss';

type AddonSummaryRowProps = {
  title: string;
  price: number;
  frequency: 'monthly' | 'yearly';
};

export default function AddonSummaryRow({
  title,
  frequency,
  price,
}: AddonSummaryRowProps) {
  return (
    <div className={styles.Addon}>
      <div className={styles.AddonTitle}>{title}</div>
      <div>{formatPrice(price, frequency, true)}</div>
    </div>
  );
}
