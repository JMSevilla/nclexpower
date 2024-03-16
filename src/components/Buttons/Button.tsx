import { Button as MuiButton, ButtonProps } from "@mui/material";

export const Button: React.FC<
  Omit<ButtonProps, ""> & { component?: string }
> = (props) => <MuiButton {...props} />;
