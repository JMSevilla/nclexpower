import { useEffect, useState } from "react";
import { FormState } from "react-hook-form";

export const useRegularFormDirtyState = (formState: FormState<{}>) => {
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (formState.isDirty) {
      setIsDirty(true);
    }

    return () => {
      setIsDirty(true);
    };
  }, [formState.isDirty]);

  return { isDirty, setIsDirty };
};
