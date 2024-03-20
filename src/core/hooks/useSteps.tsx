import { useMemo } from "react";
import { useScroll } from "./useScroll";
import { WizardStepMap } from "./useWizardStepper";

export const useRegularWizardSteps = (
  onSubmit: VoidFunction,
  backUrl?: string,
  id?: string
) => {
  const { scrollTop } = useScroll();
};
