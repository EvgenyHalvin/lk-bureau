import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
} from "@mui/material";

import { TSelectOption } from "./types";

type Props = {
  label: string;
  options: TSelectOption[];
  selectProps: SelectProps;
  onItemClick?: (value: TSelectOption) => void;
};

export const Select = ({ label, options, selectProps, onItemClick }: Props) => {
  return (
    <FormControl variant="filled" fullWidth>
      <InputLabel>{label}</InputLabel>
      <MuiSelect {...selectProps}>
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            onClick={() => onItemClick?.(option)}
          >
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
