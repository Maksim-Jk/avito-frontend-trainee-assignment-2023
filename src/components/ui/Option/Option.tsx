import { FC } from "react";
import { MenuItem } from "@mui/material";
interface IOptionProps {
  value: string;
  children: string;
}

const Option: FC<IOptionProps> = ({ value, children }) => {
  return (
    <MenuItem sx={{ padding: "10px" }} value={value}>
      {children}
    </MenuItem>
  );
};

export default Option;
