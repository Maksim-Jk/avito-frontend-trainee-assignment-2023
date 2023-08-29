import { MenuItem } from "@mui/material";
import { FC } from "react";
interface IOptionProps {
  value: string;
  children: string;
}



const Option: FC<IOptionProps> = ({ value, children }) => {
  return <MenuItem style={{padding: "10px"}} value={value}>{children}</MenuItem>;
};

export default Option;
