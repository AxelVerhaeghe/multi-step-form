import { useRadioGroupState } from 'react-stately';
import {
  AriaRadioGroupProps,
  AriaRadioProps,
  VisuallyHidden,
  useFocusRing,
  useRadio,
  useRadioGroup,
} from 'react-aria';
import {
  ForwardedRef,
  ReactNode,
  createContext,
  forwardRef,
  useContext,
  useId,
} from 'react';
import { RadioGroupState } from '@react-stately/radio';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import styles from './plan-option.module.scss';
import Image from 'next/image';

const RadioContext = createContext<RadioGroupState | null>(null);

type PlanOptionGroupProps = AriaRadioGroupProps & {
  children: ReactNode[];
};

export function PlanOptionGroup(props: PlanOptionGroupProps) {
  const { children } = props;
  const state = useRadioGroupState(props);
  const { radioGroupProps } = useRadioGroup(props, state);
  return (
    <label {...radioGroupProps}>
      <RadioContext.Provider value={state}>
        <div className={styles.Cards}>{children}</div>
      </RadioContext.Provider>
    </label>
  );
}

type PlanOptionProps = AriaRadioProps & {
  price: string;
  icon: string;
  promo?: string;
};

const PlanOption = forwardRef(
  (props: PlanOptionProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const state = useContext(RadioContext) as RadioGroupState;
    const ref = useObjectRef(forwardedRef);

    const { inputProps, isSelected } = useRadio(props, state, ref);
    let { isFocusVisible, focusProps } = useFocusRing();

    const descriptionId = useId();

    return (
      <label
        className={styles.Card}
        data-selected={isSelected}
        data-focus={isFocusVisible}
      >
        <VisuallyHidden>
          <input
            {...mergeProps(inputProps, focusProps)}
            {...focusProps}
            ref={ref}
            aria-describedby={descriptionId}
          />
        </VisuallyHidden>
        <Image src={props.icon} alt={''} height={40} width={40} />
        <div className={styles.Content}>
          <h3>{props.children}</h3>
          <div className={styles.Price} id={descriptionId}>
            {props.price}
          </div>
          {!!props.promo && <div className={styles.Promo}>{props.promo}</div>}
        </div>
      </label>
    );
  }
);

PlanOption.displayName = 'PlanOption';
export { PlanOption };
