import { FC, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Typography, Select as MuiSelect, FormControl, MenuItem } from "@mui/material";
import { styled } from "@mui/system";

interface ISelectProps {
  label: string;
  array: { value: string; label: string }[];
  initialType: string;
}

const SelectorContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "25%",
  },
}));

const FormControlStyled = styled(FormControl)({
  width: "100%",
});
const FormTitle = styled(Typography)({
  fontSize: "12px",
  marginLeft: "10px",
});
const SelectStyled = styled(MuiSelect)({
  borderRadius: "10px",
  height: "40px",
  padding: "0px",
  "& .MuiOutlinedInput": { color: "red" },
  "&.MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: "2px solid #fff",
    },
  },
}) as unknown as typeof MuiSelect;

const Select: FC<ISelectProps> = ({ label, array, initialType }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get(initialType);
  const [state, setState] = useState<string>(type || "");

  useEffect(() => {
    setState(type || "");
  }, [type]);

  const handleSelectChange = (value: string) => {
    if (value != null && value !== "") {
      searchParams.set(initialType, value);
    } else {
      searchParams.delete(initialType);
    }
    setState(value);

    navigate(`?${searchParams.toString()}`);
  };

  return (
    <SelectorContainer>
      <FormControlStyled>
        <FormTitle>{label}</FormTitle>
        <SelectStyled
          placeholder={label}
          value={state}
          MenuProps={{ style: { maxHeight: 400 } }}
          displayEmpty={true}
          onChange={(e) => {
            handleSelectChange(e.target.value || "");
          }}
          renderValue={(value) => (
            <Typography>
              {array.find((item) => item.value === value)?.label || array[0].label}
            </Typography>
          )}
        >
          {array.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </SelectStyled>
      </FormControlStyled>
    </SelectorContainer>
  );
};
export default Select;
