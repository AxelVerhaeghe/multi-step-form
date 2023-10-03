'use client';

import React, { useCallback, useState } from 'react';
import PersonalInfoSection from '../personal-info-section/personal-info-section';
import SelectPlanSection from '../select-plan-section/select-plan-section';
import Navigation from '../navigation/navigation';
import styles from './registration-form.module.scss';
import Footer from '../footer/footer';
import { PersonalInfoFormSchema } from '../personal-info-form/personal-info-form';
import { SelectPlanFormSchema } from '../select-plan-form/select-plan-form';
import useMultiStepForm from '@/hooks/useMultiStepForm';

export default function RegistrationForm() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoFormSchema>();
  const [plan, setPlan] = useState<SelectPlanFormSchema>();

  const handlePersonalInfoFormSubmit = (data: PersonalInfoFormSchema) => {
    setPersonalInfo(data);
    next();
  };

  const handleSelectPlanFormSubmit = (data: SelectPlanFormSchema) => {
    setPlan(data);
    next();
  };

  const {
    currentStep,
    goToStep,
    previous,
    next,
    isFirstStep,
    isLastStep,
    step,
    currentFormId,
  } = useMultiStepForm({
    steps: [
      {
        id: 'personal-info-form',
        component: (
          <PersonalInfoSection
            onSumbit={handlePersonalInfoFormSubmit}
            defaultValues={personalInfo}
          />
        ),
      },
      {
        id: 'select-plan-form',
        component: (
          <SelectPlanSection
            onSubmit={handleSelectPlanFormSubmit}
            defaultValues={plan}
          />
        ),
      },
      { id: 'final-form', component: <div>final step</div> },
    ],
  });

  return (
    <div className={styles.Container}>
      <div className={styles.Nav}>
        <Navigation step={currentStep} onClick={goToStep} />
      </div>
      <div className={styles.Form}>{step}</div>
      <div className={styles.Footer}>
        <Footer
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          onBack={previous}
          form={currentFormId}
        />
      </div>
    </div>
  );
}
