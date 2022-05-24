import { Input as AntdInput } from "antd";

import "./index.css";

const Input = (props) => {
  return <AntdInput className="custom-input" {...props} />;
};

export default Input;
