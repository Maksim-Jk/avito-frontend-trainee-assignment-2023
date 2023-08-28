import { FC } from "react";
interface IOptionProps {
  value: string;
  children: string;
}



const Option: FC<IOptionProps> = ({ value, children }) => {
  return <option style={{padding: "10px", borderRadius: "200px"}} value={value}>{children}</option>;
};

export default Option;
