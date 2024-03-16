import {
  Box,
  FormHelperTextProps as MuiFormHelperTextProps,
  Stack,
  FormHelperText as MuiFormHelperText,
  InputLabelProps,
  InputLabel as MuiInputLabel,
} from "@mui/material";
import { ErrorFieldIcon } from "./ErrorFieldIcon";
import React from "react";
import { red } from "@mui/material/colors";

type FormHelperTextProps = MuiFormHelperTextProps & {
  error?: boolean;
  showErrorIcon?: boolean;
};

export const FormHelperText: React.FC<FormHelperTextProps> = ({
  children,
  error,
  sx = {},
  ...rest
}) => {
  return (
    <Stack
      direction="row"
      gap={1}
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      {error && (
        <Box>
          <ErrorFieldIcon />
        </Box>
      )}
      <MuiFormHelperText sx={{ mt: 0, ...sx }} error={error} {...rest}>
        {children}
      </MuiFormHelperText>
    </Stack>
  );
};

export const InputLabel: React.FC<InputLabelProps> = ({
  children,
  required,
  ...rest
}) => {
  return (
    <MuiInputLabel {...rest}>
      <Box sx={{ display: "flex" }}>
        {required && <Box sx={{ color: red[500], mr: 0.5 }}>•</Box>}
        {children}
      </Box>
    </MuiInputLabel>
  );
};
