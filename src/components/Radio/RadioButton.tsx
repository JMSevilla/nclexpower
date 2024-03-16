import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import { RadioProps } from "@mui/material/Radio";
import { Radio } from "./Radio";

interface Props extends RadioProps {
  value: FormControlLabelProps["value"];
  label: FormControlLabelProps["label"];
  withBorder?: boolean;
}

export const RadioButton: React.FC<Props> = ({
  value,
  label,
  id,
  withBorder = false,
  ...props
}) => (
  <FormControlLabel
    sx={
      withBorder
        ? {
            "&.MuiFormControlLabel-root": {
              py: 0,
              px: 6,
              backgroundColor: "InfoBackground",
              borderWidth: "1px",
              borderStyle: "solid",
              mx: 0,
              my: 2,
              "& .MuiFormControlLabel-label": {
                paddingTop: 1,
              },
            },
          }
        : {
            "& span": {
              margin: 0,
              padding: 0,
              ml: 1,
              "&:last-of-type": { ml: 2 },
            },
            "&:not(:last-of-type)": { mb: 4 },
          }
    }
    id={id}
    data-testid={id}
    value={value}
    control={<Radio {...props} />}
    label={label}
  />
);
