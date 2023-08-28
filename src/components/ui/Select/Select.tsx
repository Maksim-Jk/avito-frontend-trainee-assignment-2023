import { FC } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Option from "../Option/Option";
import { Box, Typography } from "@mui/material";

interface ISelectProps {
  label: string;
  array: { value: string; label: string }[];
  initialType: string
}

const Select: FC<ISelectProps> = ({ label, array, initialType  }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObj  = Object.fromEntries(searchParams.entries());
  const type = searchParamsObj[initialType]

  const handleSelectChange = (param: string, value: string | null) => {
    if (value != null && value !== "") {
      searchParams.set(param, value);
    } else {
      searchParams.delete(param);
    }
    setSearchParams(searchParams);

    // Обновляем URL
    const newSearchParams = new URLSearchParams(searchParams.toString());
    navigate(`?${newSearchParams.toString()}`);
  };

  console.log('render', label);
  

  return (
    <Box sx={{ width: "200px", position: 'relative' }}>
      <Typography component={'span'}  sx={{ fontSize: "12px", display:'inline-block', marginLeft: "10px", marginBottom: '-20px', position: 'absolute', top: '-13px', left: '0px' ,backgroundColor: '#1E1E1E', padding: '2px 5px', borderRadius: '10px' ,zIndex: '1' }}>{label}</Typography>
      <select
        style={{ width: "200px", padding: "15px 10px", borderRadius: "10px", backgroundColor: "#272727", color: "#fff" }}
        value={type || ""}
        onChange={(e) => handleSelectChange(initialType, e.target.value || null)}
      >
        {array.map((item) => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </select>
    </Box>
  );
};

export default Select;
