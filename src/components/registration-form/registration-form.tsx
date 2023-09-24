'use client';

import React, { useCallback, useMemo, useState } from 'react';
import PersonalInfo from '../personal-info/personal-info';
import SelectPlan from '../select-plan/select-plan';
import Navigation from '../navigation/navigation';
import styles from './registration-form.module.scss';
import Footer from '../footer/footer';
import { PersonalInfoFormSchema } from '../personal-info-form/personal-info-form';

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoFormSchema>();

  const handlePersonalInfoFormSubmit = useCallback(
    (data: PersonalInfoFormSchema) => {
      setPersonalInfo(data);
      setStep((currentStep) => currentStep + 1);
    },
    []
  );

  const handleConfirm = useCallback(() => {
    console.log(personalInfo);
  }, [personalInfo]);

  const steps = useMemo(
    () => [
      {
        id: 'personal-info-form',
        component: (
          <PersonalInfo
            onSumbit={handlePersonalInfoFormSubmit}
            defaultValues={personalInfo}
          />
        ),
      },
      {
        id: 'select-plan-form',
        component: <SelectPlan />,
      },
    ],
    [handlePersonalInfoFormSubmit, personalInfo]
  );
  const currentStep = steps[step - 1];

  const handleNavigate = useCallback((newStep: number) => setStep(newStep), []);
  const handleBack = useCallback(
    () => setStep((currentStep) => currentStep - 1),
    []
  );

  return (
    <div className={styles.Container}>
      <div className={styles.Nav}>
        <Navigation step={step} onClick={handleNavigate} />
      </div>
      <div className={styles.Form}>{currentStep.component}</div>
      <div className={styles.Footer}>
        <Footer
          isFirstStep={step === 1}
          isLastStep={step === steps.length}
          onBack={handleBack}
          onConfirm={handleConfirm}
          form={currentStep.id}
        />
      </div>
    </div>
  );
}
