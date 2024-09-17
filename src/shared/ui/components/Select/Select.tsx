import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
} from "@mui/material";

type TSelectOption = {
  value: number | string;
  label: string;
};

type Props = {
  label: string;
  options: TSelectOption[];
  selectProps: SelectProps;
};

export const Select = ({ label, options, selectProps }: Props) => {
  return (
    <FormControl variant="filled" fullWidth>
      <InputLabel>{label}</InputLabel>
      <MuiSelect {...selectProps}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
