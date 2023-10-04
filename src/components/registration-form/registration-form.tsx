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
import { AddonsFormSchema } from '../addons-form/addons-form';
import AddonsSection from '../addons-section/addons-section';
import SummarySection from '../summary-section/summary-section';
import Confirmation from '../confirmation/confirmation';

export default function RegistrationForm() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoFormSchema>();
  const [plan, setPlan] = useState<SelectPlanFormSchema>({
    plan: 'arcade',
    frequency: false,
  });
  const [addons, setAddons] = useState<AddonsFormSchema>({
    customizableProfile: false,
    largerStorage: false,
    onlineService: false,
  });

  const handlePersonalInfoFormSubmit = (data: PersonalInfoFormSchema) => {
    setPersonalInfo(data);
    next();
  };

  const handleSelectPlanFormSubmit = (data: SelectPlanFormSchema) => {
    setPlan(data);
    next();
  };

  const handleAddonsSubmit = (data: AddonsFormSchema) => {
    setAddons(data);
    next();
  };

  const handleChangePlan = () => goToStep(1);

  const handleConfirm = () => {
    console.log({ ...personalInfo, ...plan, ...addons });
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
    isCompleted,
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
      {
        id: 'add-ons-form',
        component: (
          <AddonsSection
            onSumbit={handleAddonsSubmit}
            defaultValues={addons}
            frequency={plan?.frequency ? 'yearly' : 'monthly'}
          />
        ),
      },
      {
        id: 'summary-form',
        component: (
          <SummarySection
            plan={plan}
            addons={addons}
            onChangePlan={handleChangePlan}
            onConfirm={handleConfirm}
          />
        ),
      },
    ],
  });

  return (
    <div className={styles.Container}>
      <div className={styles.Nav}>
        <Navigation step={currentStep} onClick={goToStep} />
      </div>
      {isCompleted ? (
        <div className={styles.Form}>
          <Confirmation />
        </div>
      ) : (
        <>
          <div className={styles.Form}>{step}</div>
          <div className={styles.Footer}>
            <Footer
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
              onBack={previous}
              form={currentFormId}
            />
          </div>
        </>
      )}
    </div>
  );
}
