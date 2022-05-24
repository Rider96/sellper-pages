import { Input as AntdInput } from "antd";

import "./index.css";

const PWInput = (props) => {
  return <AntdInput.Password className="custom-pw-input" {...props} />;
};

export default PWInput;
