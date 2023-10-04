import { ReactElement, useCallback, useState } from 'react';

type FormStep = {
  id: string;
  component: ReactElement;
};

type UseMultiStepFormProps = {
  steps: FormStep[];
};

export default function useMultiStepForm({ steps }: UseMultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const next = useCallback(
    () =>
      setCurrentStep((curr) => {
        if (curr >= steps.length - 1) {
          setIsCompleted(true);
          return curr;
        } else {
          return curr + 1;
        }
      }),
    [steps.length]
  );

  const previous = useCallback(
    () =>
      setCurrentStep((curr) => {
        if (curr <= 0) {
          return curr;
        } else {
          return curr - 1;
        }
      }),
    []
  );

  const goToStep = useCallback((newStep: number) => {
    setIsCompleted(false);
    setCurrentStep(newStep);
  }, []);

  return {
    currentStep,
    currentFormId: steps[currentStep].id,
    step: steps[currentStep].component,
    previous,
    next,
    goToStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    isCompleted,
  };
}
