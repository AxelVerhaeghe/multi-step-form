import styles from './navigation-item.module.scss';

type NavigationItemProps = {
  onClick: (step: number) => void;
  isActive?: boolean;
  children: string;
  step: number;
};

export default function NavigationItem({
  step,
  children,
  onClick,
  isActive = false,
}: NavigationItemProps) {
  return (
    <li>
      <button
        className={styles.Item}
        data-active={isActive}
        onClick={() => onClick(step)}
      >
        <div className={styles.Step}>{step}</div>
        <div className={styles.Text}>
          <div className={styles.Title}>Step {step}</div>
          <div className={styles.SubTitle}>{children}</div>
        </div>
      </button>
    </li>
  );
}
