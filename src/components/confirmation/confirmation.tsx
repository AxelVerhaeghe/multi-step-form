import Heading from '../heading/heading';
import Icon from './icon-thank-you.svg';
import Image from 'next/image';
import Text from '../text/text';
import styles from './confirmation.module.scss';

export default function Confirmation() {
  return (
    <div className={styles.Container}>
      <Image src={Icon} alt='thank you icon' />
      <Heading>Thank you!</Heading>
      <Text>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Text>
    </div>
  );
}
