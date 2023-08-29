import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Select as MuiSelect, FormControl, MenuItem, styled } from "@mui/material";

interface ISelectProps {
  label: string;
  array: { value: string; label: string }[];
  initialType: string;
  clear: any;
}

const Select: FC<ISelectProps> = ({ label, array, initialType, clear }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get(initialType);
  const [state, setState] = useState<string | null>(type);

  console.log(type);

  useEffect(() => {
    setState(type);
  }, [type]);

  const handleSelectChange = (value: string | null) => {
    if (value != null && value !== "") {
      searchParams.set(initialType, value);
    } else {
      searchParams.delete(initialType);
    }
    setState(value);

    // Обновляем URL
    navigate(`?${searchParams.toString()}`);
  };

  const WhiteBorderTextField = styled(MenuItem)`
    & label.Mui-focused {
      color: white;
    }
    & .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border-color: white;
      }
    }
  `;

  return (
    <Box sx={{ width: { xs: "100%", md: "25%" } }}>
      <FormControl
        sx={{
          width: "100%",
        }}
      >
        <Typography sx={{ fontSize: "12px", marginLeft: "10px" }}>{label}</Typography>
        <MuiSelect
          sx={{
            borderRadius: "10px",
            height: "50px",
            padding: "0px",
            "& .MuiOutlinedInput": { color: "red" },
            "&.MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                border: '2px solid #fff',
              },
            },
          }}
          placeholder={label}
          value={state}
          renderValue={(value) => (
            <Typography>{array.find((item) => item.value === value)?.label || array[0].label}</Typography>
          )}
          MenuProps={{
            style: {
               maxHeight: 400,
                  },
            }}
          displayEmpty={true}
          onChange={(e) => {
            console.log("change");
            handleSelectChange(e.target.value || null);
          }}
        >
          {array.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};
export default Select;